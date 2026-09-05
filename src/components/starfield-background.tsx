import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  tw: number;
  phase: number;
  gold: boolean;
};

const LINK_DIST = 130;
const CURSOR_DIST = 200;

export function StarfieldBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(150, Math.round((width * height) / 12000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.5 + 0.25,
        tw: Math.random() * 0.9 + 0.3,
        phase: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.3,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
          if (s.y < -10) s.y = height + 10;
          if (s.y > height + 10) s.y = -10;
        }
      }

      // linhas de constelação
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]!;
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > LINK_DIST) continue;

          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const near = Math.hypot(mx - pointer.x, my - pointer.y);
          const boost = near < CURSOR_DIST ? 1 - near / CURSOR_DIST : 0;
          const alpha = (1 - d / LINK_DIST) * (0.09 + boost * 0.5);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(200, 154, 61, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // estrelas
      for (const s of stars) {
        const twinkle = reduced ? 1 : 0.65 + 0.35 * Math.sin(t * 0.001 * s.tw + s.phase);
        const near = Math.hypot(s.x - pointer.x, s.y - pointer.y);
        const boost = near < CURSOR_DIST ? 1 - near / CURSOR_DIST : 0;
        const alpha = Math.min(1, s.a * twinkle + boost * 0.4);
        const radius = s.r * (1 + boost * 0.7);

        ctx.beginPath();
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(200, 154, 61, ${alpha})`
          : `rgba(234, 227, 214, ${alpha * 0.85})`;
        ctx.shadowBlur = radius * 5;
        ctx.shadowColor = s.gold ? "rgba(200,154,61,0.8)" : "rgba(234,227,214,0.6)";
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);

    const onResize = () => build();
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="starfield-canvas" aria-hidden="true" />;
}

export default StarfieldBackground;
