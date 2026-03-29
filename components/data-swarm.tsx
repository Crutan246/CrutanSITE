"use client";

import { useEffect, useRef } from "react";

// ─── Brand color helpers ───────────────────────────────────────────────────
type RGB = readonly [number, number, number];
const C = {
  action:       [61, 90, 115] as RGB,
  actionLight:  [107, 143, 168] as RGB,
  saffron:      [196, 130, 45] as RGB,
  sand:         [206, 195, 178] as RGB,
} as const;

function rgba(c: RGB, a: number) {
  return `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;
}

// ─── Easing ────────────────────────────────────────────────────────────────
function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp(v: number, lo = 0, hi = 1) {
  return Math.max(lo, Math.min(hi, v));
}

// ─── Particle ──────────────────────────────────────────────────────────────
interface Particle {
  // live chaotic position + velocity
  cx: number; cy: number;
  cvx: number; cvy: number;
  // target ordered position
  ox: number; oy: number;
  // rendered interpolated position
  x: number; y: number;
  radius: number;
  color: RGB;
  baseAlpha: number;
  group: "bar" | "trend";
}

// ─── Build ordered analytics-chart positions ──────────────────────────────
function buildOrderPositions(W: number, H: number) {
  const out: { x: number; y: number; group: "bar" | "trend" }[] = [];

  const vizCX   = W * 0.5;
  const bottom  = H * 0.78;
  const maxBarH = H * 0.48;

  // 8 bars with an overall upward trend
  const bars = [0.30, 0.50, 0.42, 0.68, 0.58, 0.78, 0.64, 0.92];
  const barW  = Math.min(30, W / 22);
  const gap   = barW * 0.55;
  const totalW = bars.length * barW + (bars.length - 1) * gap;
  const startX = vizCX - totalW / 2;
  const pitch  = 6.5; // px between stacked particles

  bars.forEach((h, i) => {
    const bx   = startX + i * (barW + gap) + barW / 2;
    const bh   = maxBarH * h;
    const count = Math.floor(bh / pitch);
    for (let j = 0; j < count; j++) {
      out.push({
        x: bx + (Math.random() - 0.5) * barW * 0.55,
        y: bottom - j * pitch - 3,
        group: "bar",
      });
    }
  });

  // Smooth upward trend line overlaid on bars
  const trendN = 70;
  for (let i = 0; i < trendN; i++) {
    const frac = i / (trendN - 1);
    const tx = startX + frac * totalW;
    const ty = bottom - maxBarH * (0.15 + 0.78 * frac);
    out.push({ x: tx + (Math.random() - 0.5) * 5, y: ty + (Math.random() - 0.5) * 6, group: "trend" });
  }

  return out;
}

// ─── Component ────────────────────────────────────────────────────────────
export function DataSwarm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    // Per-particle color assignment (weighted toward action blue)
    const palette: RGB[] = [
      C.action, C.action, C.action, C.action,
      C.actionLight, C.actionLight,
      C.saffron,
    ];

    // ── State ──────────────────────────────────────────────────────────────
    let W = 0, H = 0;
    let particles: Particle[] = [];
    let phase = 0;         // 0 chaos | 1 sweep | 2 hold | 3 dissolve
    let phaseStart = 0;
    let sweepX = -200;
    let initialized = false;

    // Phase durations in ms
    const DUR = [2200, 4200, 2800, 1400];

    function init(width: number, height: number) {
      W = width;
      H = height;
      canvas!.width  = W;
      canvas!.height = H;

      const ops = buildOrderPositions(W, H);
      particles = ops.map((op) => {
        const cx = Math.random() * W;
        const cy = Math.random() * H;
        return {
          cx, cy,
          cvx: (Math.random() - 0.5) * 1.6,
          cvy: (Math.random() - 0.5) * 1.6,
          ox: op.x,
          oy: op.y,
          x: cx, y: cy,
          radius: op.group === "trend" ? 1.5 : 1.8 + Math.random() * 1.2,
          color: palette[Math.floor(Math.random() * palette.length)],
          baseAlpha: 0.55 + Math.random() * 0.45,
          group: op.group,
        };
      });
      initialized = true;
    }

    // ── Resize via ResizeObserver ──────────────────────────────────────────
    const ro = new ResizeObserver((entries) => {
      const w = Math.round(entries[0].contentRect.width);
      if (w > 0 && w !== W) init(w, canvas!.offsetHeight || 480);
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    // seed first size
    const initW = canvas.parentElement?.getBoundingClientRect().width ?? 800;
    init(initW, 480);

    // ── Render loop ────────────────────────────────────────────────────────
    function draw(ts: number) {
      raf.current = requestAnimationFrame(draw);
      if (!initialized || !particles.length) return;

      // Phase management
      if (phaseStart === 0) phaseStart = ts;
      const elapsed  = ts - phaseStart;
      const phaseDur = DUR[phase];

      if (elapsed >= phaseDur) {
        phase = (phase + 1) % 4;
        phaseStart = ts;
        if (phase === 1) sweepX = -120; // reset sweep
      }

      const phaseT = clamp(elapsed / phaseDur);

      // Clear — on dark background; use partial alpha in chaos for motion trails
      const isChaosy = phase === 0 || phase === 3;
      if (isChaosy) {
        ctx.fillStyle = "rgba(42,31,20,0.35)";
        ctx.fillRect(0, 0, W, H);
      } else {
        ctx.fillStyle = "rgba(42,31,20,0.85)";
        ctx.fillRect(0, 0, W, H);
      }

      // Advance sweep line
      if (phase === 1) {
        sweepX = -120 + phaseT * (W + 220);
      }

      // ── Compute per-particle blend ─────────────────────────────────────
      particles.forEach((p) => {
        // Advance chaos position every frame
        p.cvx += (Math.random() - 0.5) * 0.12;
        p.cvy += (Math.random() - 0.5) * 0.12;
        const spd = Math.hypot(p.cvx, p.cvy);
        if (spd > 2.2) { p.cvx *= 2.2 / spd; p.cvy *= 2.2 / spd; }
        p.cx += p.cvx;
        p.cy += p.cvy;
        if (p.cx < 0)  { p.cvx =  Math.abs(p.cvx); p.cx = 0; }
        if (p.cx > W)  { p.cvx = -Math.abs(p.cvx); p.cx = W; }
        if (p.cy < 0)  { p.cvy =  Math.abs(p.cvy); p.cy = 0; }
        if (p.cy > H)  { p.cvy = -Math.abs(p.cvy); p.cy = H; }

        // Blend factor (0 = chaos, 1 = ordered)
        let blend = 0;
        if (phase === 0) {
          blend = 0;
        } else if (phase === 1) {
          // Sweep: how far is this particle's order position left of the sweep front?
          const zone = 180;
          blend = easeInOut(clamp((sweepX - p.ox) / zone));
        } else if (phase === 2) {
          blend = 1;
        } else {
          // Dissolve: faster particles escape first (stagger by oy position)
          const stagger = clamp((p.oy / H) * 0.4);
          blend = 1 - easeInOut(clamp((phaseT - stagger) / (1 - stagger)));
        }

        // Subtle breathing wobble when fully ordered
        const wobble = blend > 0.95 ? 1 : 0;
        const wx = Math.sin(ts * 0.0009 + p.ox * 0.04) * 1.2 * wobble;
        const wy = Math.cos(ts * 0.0011 + p.oy * 0.04) * 0.8 * wobble;

        p.x = lerp(p.cx, p.ox + wx, blend);
        p.y = lerp(p.cy, p.oy + wy, blend);

        // Draw glow for saffron particles in ordered state
        if (p.color === C.saffron && blend > 0.6) {
          const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
          const ga = (blend - 0.6) / 0.4 * 0.18;
          gr.addColorStop(0, rgba(C.saffron, ga));
          gr.addColorStop(1, rgba(C.saffron, 0));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = gr;
          ctx.fill();
        }

        // Draw particle — brighter on dark background
        const alpha = p.baseAlpha * (
          isChaosy
            ? 0.55 + blend * 0.3
            : 0.45 + blend * 0.55
        );
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 + blend * 0.25), 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.color, alpha);
        ctx.fill();
      });

      // ── Trend line (renders at end of sweep and during hold) ───────────
      const trendAlpha =
        phase === 2 ? 0.85 :
        phase === 1 ? clamp((phaseT - 0.75) / 0.25) * 0.85 :
        phase === 3 ? (1 - easeInOut(phaseT)) * 0.85 :
        0;

      if (trendAlpha > 0.01) {
        const tp = particles
          .filter((p) => p.group === "trend")
          .sort((a, b) => a.ox - b.ox);

        // Subtle area fill under trend line
        ctx.beginPath();
        tp.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.lineTo(tp[tp.length - 1].x, H);
        ctx.lineTo(tp[0].x, H);
        ctx.closePath();
        ctx.fillStyle = rgba(C.saffron, trendAlpha * 0.06);
        ctx.fill();

        // Trend line stroke
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = rgba(C.saffron, trendAlpha);
        tp.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // End-point dot highlight
        const last = tp[tp.length - 1];
        ctx.beginPath();
        ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = rgba(C.saffron, trendAlpha);
        ctx.fill();
      }

      // ── Sweep glow front ──────────────────────────────────────────────
      if (phase === 1 && sweepX > 0 && sweepX < W + 50) {
        const sg = ctx.createLinearGradient(sweepX - 90, 0, sweepX + 30, 0);
        sg.addColorStop(0,   rgba(C.action, 0));
        sg.addColorStop(0.6, rgba(C.action, 0.10));
        sg.addColorStop(0.9, rgba(C.actionLight, 0.20));
        sg.addColorStop(1,   rgba(C.actionLight, 0));
        ctx.fillStyle = sg;
        ctx.fillRect(sweepX - 90, 0, 120, H);
      }
    }

    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full block"
      style={{ height: 480 }}
      aria-hidden="true"
    />
  );
}
