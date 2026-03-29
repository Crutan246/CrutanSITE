"use client";

import { useEffect, useRef } from "react";

// ─── Brand palette ─────────────────────────────────────────────────────────
type RGB = readonly [number, number, number];
const PALETTE: RGB[] = [
  [61,  90,  115],  // action blue       (most common)
  [61,  90,  115],
  [107, 143, 168],  // action light blue
  [107, 143, 168],
  [196, 130, 45],   // saffron
  [81,  122, 88],   // sage green
  [92,  74,  50],   // loam brown
  [206, 195, 178],  // sand
  [196, 130, 45],   // saffron (slightly more weight)
  [61,  90,  115],
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
  cx: number; cy: number;          // live chaotic position
  cvx: number; cvy: number;        // velocity
  ox: number; oy: number;          // ordered target position
  x: number; y: number;            // rendered position
  radius: number;
  color: RGB;
  baseAlpha: number;               // max alpha (very low — these are background dots)
  group: "bar" | "trend";
}

// ─── Build ordered positions (bar chart + trend line) ─────────────────────
function buildOrderPositions(W: number, H: number) {
  const out: { x: number; y: number; group: "bar" | "trend" }[] = [];

  // Anchor the chart toward bottom-center of the hero
  const vizCX   = W * 0.5;
  const bottom  = H * 0.82;
  const maxBarH = H * 0.40;

  const bars    = [0.28, 0.46, 0.38, 0.60, 0.52, 0.72, 0.58, 0.88];
  const barW    = Math.min(26, W / 26);
  const gap     = barW * 0.6;
  const totalW  = bars.length * barW + (bars.length - 1) * gap;
  const startX  = vizCX - totalW / 2;
  const pitch   = 7;

  bars.forEach((h, i) => {
    const bx    = startX + i * (barW + gap) + barW / 2;
    const count = Math.floor(maxBarH * h / pitch);
    for (let j = 0; j < count; j++) {
      out.push({
        x: bx + (Math.random() - 0.5) * barW * 0.5,
        y: bottom - j * pitch,
        group: "bar",
      });
    }
  });

  // Smooth trend line
  const trendN = 80;
  for (let i = 0; i < trendN; i++) {
    const frac = i / (trendN - 1);
    out.push({
      x: startX + frac * totalW + (Math.random() - 0.5) * 5,
      y: bottom - maxBarH * (0.12 + 0.76 * frac) + (Math.random() - 0.5) * 6,
      group: "trend",
    });
  }

  return out;
}

// ─── Component ────────────────────────────────────────────────────────────
export function DataSwarm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    // ── Mutable state (no React re-renders) ──────────────────────────────
    let W = 0, H = 0;
    let particles: Particle[] = [];
    let phase      = 0;     // 0 chaos | 1 sweep | 2 hold | 3 dissolve
    let phaseStart = 0;
    let sweepX     = -200;

    // Slow — the whole experience is ambient background
    const DUR = [5000, 10000, 8000, 4000]; // ms per phase

    function init(w: number, h: number) {
      W = w; H = h;
      canvas.width  = W;
      canvas.height = H;

      // More particles for full-bleed coverage
      const base = buildOrderPositions(W, H);

      // Extra scattered ambient particles (not part of the ordered viz)
      const extras: typeof base = [];
      const extraCount = Math.floor(W * H / 4000); // density-based
      for (let i = 0; i < extraCount; i++) {
        extras.push({
          x: Math.random() * W,
          y: Math.random() * H,
          group: "bar" as const,
        });
      }

      // Combine: ordered targets use base, extras drift freely
      const allPositions = [...base, ...extras];

      particles = allPositions.map((op, idx) => {
        const cx = Math.random() * W;
        const cy = Math.random() * H;
        const c  = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        const isExtra = idx >= base.length;
        return {
          cx, cy,
          // Extras move slower, always chaotic
          cvx: (Math.random() - 0.5) * (isExtra ? 0.18 : 0.28),
          cvy: (Math.random() - 0.5) * (isExtra ? 0.18 : 0.28),
          ox: op.x,
          oy: op.y,
          x: cx, y: cy,
          radius: isExtra
            ? 0.8 + Math.random() * 1.2
            : op.group === "trend" ? 1.2 : 1.4 + Math.random() * 1.0,
          color: c,
          // Very low alpha — subtle background dots
          baseAlpha: isExtra
            ? 0.04 + Math.random() * 0.08
            : 0.07 + Math.random() * 0.14,
          group: op.group,
        };
      });
    }

    // ── Resize ────────────────────────────────────────────────────────────
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

    // ── Render ────────────────────────────────────────────────────────────
    function draw(ts: number) {
      raf.current = requestAnimationFrame(draw);
      if (!particles.length) return;

      if (phaseStart === 0) phaseStart = ts;
      const elapsed  = ts - phaseStart;
      const phaseDur = DUR[phase];

      if (elapsed >= phaseDur) {
        phase      = (phase + 1) % 4;
        phaseStart = ts;
        if (phase === 1) sweepX = -150;
      }
      const phaseT = clamp(elapsed / phaseDur);

      // ── Always fully clear — transparent canvas, parchment shows through
      ctx.clearRect(0, 0, W, H);

      // Advance sweep
      if (phase === 1) sweepX = lerp(-150, W + 150, easeInOut(phaseT));

      // ── Per-particle update & draw ─────────────────────────────────────
      particles.forEach((p) => {
        // Advance chaos position (very slow drift)
        p.cvx += (Math.random() - 0.5) * 0.015;
        p.cvy += (Math.random() - 0.5) * 0.015;
        const maxSpd = 0.35;
        const spd = Math.hypot(p.cvx, p.cvy);
        if (spd > maxSpd) { p.cvx *= maxSpd / spd; p.cvy *= maxSpd / spd; }
        p.cx += p.cvx;
        p.cy += p.cvy;
        // Wrap around edges (no bouncing — smoother for ambient)
        if (p.cx < -10)  p.cx = W + 10;
        if (p.cx > W+10) p.cx = -10;
        if (p.cy < -10)  p.cy = H + 10;
        if (p.cy > H+10) p.cy = -10;

        // Blend: 0 = chaotic position, 1 = ordered position
        let blend = 0;
        if (phase === 0) {
          blend = 0;
        } else if (phase === 1) {
          const zone  = 220;
          blend = easeInOut(clamp((sweepX - p.ox) / zone));
        } else if (phase === 2) {
          blend = 1;
        } else {
          blend = 1 - easeInOut(phaseT);
        }

        // Gentle breathing when fully ordered
        const wobble = blend > 0.9 ? (blend - 0.9) / 0.1 : 0;
        const wx = Math.sin(ts * 0.00045 + p.ox * 0.03) * 1.5 * wobble;
        const wy = Math.cos(ts * 0.00052 + p.oy * 0.03) * 1.0 * wobble;

        p.x = lerp(p.cx, p.ox + wx, blend);
        p.y = lerp(p.cy, p.oy + wy, blend);

        // Alpha: slightly brighter when ordered, still very subtle
        const alpha = p.baseAlpha * (0.6 + blend * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.color, alpha);
        ctx.fill();
      });

      // ── Saffron trend line — faint, appears in hold phase ─────────────
      const SAFFRON: RGB = [196, 130, 45];
      const tA =
        phase === 2 ? clamp(phaseT / 0.2) * 0.28 :
        phase === 1 ? clamp((phaseT - 0.80) / 0.20) * 0.28 :
        phase === 3 ? (1 - easeInOut(phaseT)) * 0.28 :
        0;

      if (tA > 0.005) {
        const tp = particles
          .filter(p => p.group === "trend")
          .sort((a, b) => a.ox - b.ox);

        // Area fill — extremely subtle
        ctx.beginPath();
        tp.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.lineTo(tp[tp.length - 1].x, H);
        ctx.lineTo(tp[0].x, H);
        ctx.closePath();
        ctx.fillStyle = rgba(SAFFRON, tA * 0.12);
        ctx.fill();

        // Line
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = rgba(SAFFRON, tA * 0.7);
        tp.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // End dot
        const last = tp[tp.length - 1];
        ctx.beginPath();
        ctx.arc(last.x, last.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = rgba(SAFFRON, tA);
        ctx.fill();
      }

      // ── Sweep front — very faint soft edge ────────────────────────────
      if (phase === 1 && sweepX > 0 && sweepX < W) {
        const ACTION: RGB = [61, 90, 115];
        const sg = ctx.createLinearGradient(sweepX - 120, 0, sweepX + 20, 0);
        sg.addColorStop(0,    rgba(ACTION, 0));
        sg.addColorStop(0.75, rgba(ACTION, 0.04));
        sg.addColorStop(1,    rgba([107, 143, 168], 0.07));
        ctx.fillStyle = sg;
        ctx.fillRect(sweepX - 120, 0, 140, H);
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
