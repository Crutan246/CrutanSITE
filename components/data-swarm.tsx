"use client";

import { useEffect, useRef } from "react";

// ─── Brand palette ─────────────────────────────────────────────────────────
type RGB = readonly [number, number, number];
const PALETTE: RGB[] = [
  [61,  90,  115],  // action blue (most common)
  [61,  90,  115],
  [61,  90,  115],
  [107, 143, 168],  // action light blue
  [107, 143, 168],
  [196, 130, 45],   // saffron
  [81,  122, 88],   // sage green
  [92,  74,  50],   // loam brown
  [206, 195, 178],  // sand
  [196, 130, 45],   // saffron (extra weight)
];

function rgba(c: RGB, a: number) {
  return `rgba(${c[0]},${c[1]},${c[2]},${Math.min(1, Math.max(0, a)).toFixed(3)})`;
}
function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(v: number, lo = 0, hi = 1)       { return Math.max(lo, Math.min(hi, v)); }

// ─── Particle ──────────────────────────────────────────────────────────────
interface Particle {
  cx: number; cy: number;       // live chaotic position
  cvx: number; cvy: number;     // velocity
  ox: number; oy: number;       // ordered target position
  edx: number; edy: number;     // expand direction (outward unit vector * scale)
  x: number; y: number;         // rendered position
  radius: number;
  color: RGB;
  baseAlpha: number;
  group: "bar" | "trend";
}

// ─── Build ordered positions — 2× scale bar chart + trend line ─────────────
function buildOrderPositions(W: number, H: number) {
  const out: { x: number; y: number; group: "bar" | "trend" }[] = [];

  // Chart covers most of the canvas
  const vizCX   = W * 0.5;
  const bottom  = H * 0.86;
  const maxBarH = H * 0.68;          // 2× taller bars

  const bars    = [0.22, 0.38, 0.30, 0.50, 0.44, 0.62, 0.54, 0.76, 0.68, 0.90];
  const barW    = Math.min(32, W / 18);   // wider bars, spread across more width
  const gap     = barW * 0.65;
  const totalW  = bars.length * barW + (bars.length - 1) * gap;
  const startX  = vizCX - totalW / 2;
  const pitch   = 6;                 // tighter packing = more dots per bar

  bars.forEach((h, i) => {
    const bx    = startX + i * (barW + gap) + barW / 2;
    const count = Math.floor(maxBarH * h / pitch);
    for (let j = 0; j < count; j++) {
      out.push({
        x: bx + (Math.random() - 0.5) * barW * 0.55,
        y: bottom - j * pitch,
        group: "bar",
      });
    }
  });

  // Trend line — more points for larger scale
  const trendN = 140;
  for (let i = 0; i < trendN; i++) {
    const frac = i / (trendN - 1);
    out.push({
      x: startX + frac * totalW + (Math.random() - 0.5) * 6,
      y: bottom - maxBarH * (0.10 + 0.80 * frac) + (Math.random() - 0.5) * 7,
      group: "trend",
    });
  }

  return { positions: out, chartCX: vizCX, chartCY: bottom - maxBarH * 0.5 };
}

// ─── Component ─────────────────────────────────────────────────────────────
export function DataSwarm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let W = 0, H = 0;
    let particles: Particle[] = [];
    let phase      = 0;   // 0 chaos | 1 converge | 2 hold | 3 expand-out
    let phaseStart = 0;

    // Phase durations (ms)
    const DUR = [8000, 5500, 7000, 5500];

    function init(w: number, h: number) {
      W = w; H = h;
      canvas.width  = W;
      canvas.height = H;

      const { positions, chartCX, chartCY } = buildOrderPositions(W, H);

      // 2× ambient extras (one per ~2000 px² vs previous 4000)
      const extras: typeof positions = [];
      const extraCount = Math.floor(W * H / 2000);
      for (let i = 0; i < extraCount; i++) {
        extras.push({
          x: Math.random() * W,
          y: Math.random() * H,
          group: "bar" as const,
        });
      }

      const all = [...positions, ...extras];

      particles = all.map((op, idx) => {
        const cx = Math.random() * W;
        const cy = Math.random() * H;
        const c  = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        const isExtra = idx >= positions.length;

        // Expand direction: unit vector from chart center → ordered pos * expand distance
        const ddx = op.x - chartCX;
        const ddy = op.y - chartCY;
        const dist = Math.max(1, Math.hypot(ddx, ddy));
        const expandDist = isExtra ? 0 : 50 + Math.random() * 70;

        // 25% more opaque than previous version
        const baseAlpha = isExtra
          ? (0.04 + Math.random() * 0.08) * 1.25
          : (0.07 + Math.random() * 0.14) * 1.25;

        return {
          cx, cy,
          cvx: (Math.random() - 0.5) * (isExtra ? 0.18 : 0.28),
          cvy: (Math.random() - 0.5) * (isExtra ? 0.18 : 0.28),
          ox: op.x,
          oy: op.y,
          edx: (ddx / dist) * expandDist,
          edy: (ddy / dist) * expandDist,
          x: cx, y: cy,
          radius: isExtra
            ? 0.8 + Math.random() * 1.2
            : op.group === "trend" ? 1.2 : 1.4 + Math.random() * 1.0,
          color: c,
          baseAlpha,
          group: op.group,
        };
      });
    }

    // ── Resize ──────────────────────────────────────────────────────────────
    const ro = new ResizeObserver((entries) => {
      const e = entries[0];
      const w = Math.round(e.contentRect.width);
      const h = Math.round(e.contentRect.height);
      if (w > 0 && h > 0 && (w !== W || h !== H)) init(w, h);
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    const initW = canvas.parentElement?.getBoundingClientRect().width  ?? 800;
    const initH = canvas.parentElement?.getBoundingClientRect().height ?? 600;
    init(initW, initH);

    // ── Render ──────────────────────────────────────────────────────────────
    function draw(ts: number) {
      raf.current = requestAnimationFrame(draw);
      if (!particles.length) return;

      if (phaseStart === 0) phaseStart = ts;
      const elapsed  = ts - phaseStart;
      const phaseDur = DUR[phase];

      if (elapsed >= phaseDur) {
        phase      = (phase + 1) % 4;
        phaseStart = ts;
      }
      const phaseT = clamp(elapsed / phaseDur);

      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        // Advance slow drift (always running)
        p.cvx += (Math.random() - 0.5) * 0.015;
        p.cvy += (Math.random() - 0.5) * 0.015;
        const maxSpd = 0.35;
        const spd = Math.hypot(p.cvx, p.cvy);
        if (spd > maxSpd) { p.cvx *= maxSpd / spd; p.cvy *= maxSpd / spd; }
        p.cx += p.cvx;
        p.cy += p.cvy;
        if (p.cx < -10)  p.cx = W + 10;
        if (p.cx > W+10) p.cx = -10;
        if (p.cy < -10)  p.cy = H + 10;
        if (p.cy > H+10) p.cy = -10;

        // ── blend: 0 = chaotic position, 1 = ordered position ─────────────
        let blend = 0;
        let pushX = 0, pushY = 0;

        if (phase === 0) {
          // Pure chaos — all dots drift freely
          blend = 0;
        } else if (phase === 1) {
          // Simultaneous convergence — all particles move together
          blend = easeInOut(phaseT);
        } else if (phase === 2) {
          // Hold — steady with gentle breathing wobble
          blend = 1;
          const wobble = 1.5;
          pushX = Math.sin(ts * 0.00045 + p.ox * 0.03) * wobble;
          pushY = Math.cos(ts * 0.00052 + p.oy * 0.03) * wobble;
        } else {
          // Expand-out dissolve: particles burst outward then scatter to chaos
          // blend: 1 → 0 (order back to chaos)
          blend = 1 - easeInOut(phaseT);
          // Outward push peaks at 35% through phase then fades
          const pushAmt = Math.sin(clamp(phaseT / 0.5) * Math.PI);
          pushX = p.edx * pushAmt;
          pushY = p.edy * pushAmt;
        }

        p.x = lerp(p.cx, p.ox + pushX, blend);
        p.y = lerp(p.cy, p.oy + pushY, blend);

        const alpha = p.baseAlpha * (0.65 + blend * 0.35);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.color, alpha);
        ctx.fill();
      });

      // ── Saffron trend line — appears during hold, fades on dissolve ─────
      const SAFFRON: RGB = [196, 130, 45];
      const tA =
        phase === 2 ? clamp(phaseT / 0.25) * 0.30 :
        phase === 1 ? clamp((phaseT - 0.75) / 0.25) * 0.30 :
        phase === 3 ? (1 - easeInOut(clamp(phaseT / 0.4))) * 0.30 :
        0;

      if (tA > 0.005) {
        const tp = particles
          .filter(p => p.group === "trend")
          .sort((a, b) => a.ox - b.ox);

        ctx.beginPath();
        tp.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.lineTo(tp[tp.length - 1].x, H);
        ctx.lineTo(tp[0].x, H);
        ctx.closePath();
        ctx.fillStyle = rgba(SAFFRON, tA * 0.10);
        ctx.fill();

        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = rgba(SAFFRON, tA * 0.65);
        tp.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();

        const last = tp[tp.length - 1];
        ctx.beginPath();
        ctx.arc(last.x, last.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = rgba(SAFFRON, tA);
        ctx.fill();
      }
    }

    raf.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf.current); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
