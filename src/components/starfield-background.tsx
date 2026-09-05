import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
  phase: number;
  vy: number;
  gold: boolean;
};

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

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(240, Math.round((width * height) / 7000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.9 + 0.3,
        phase: Math.random() * Math.PI * 2,
        vy: Math.random() * 0.05 + 0.01,
        gold: Math.random() < 0.28,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        if (!reduced) {
          s.y -= s.vy;
          if (s.y < -2) s.y = height + 2;
        }
        const twinkle = reduced ? 1 : 0.65 + 0.35 * Math.sin(t * 0.001 * s.tw + s.phase);
        const alpha = Math.min(1, s.a * twinkle);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(200, 154, 61, ${alpha})`
          : `rgba(234, 227, 214, ${alpha * 0.85})`;
        ctx.shadowBlur = s.r * 5;
        ctx.shadowColor = s.gold ? "rgba(200,154,61,0.8)" : "rgba(234,227,214,0.6)";
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);

    const onResize = () => build();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="starfield-canvas" aria-hidden="true" />;
}

export default StarfieldBackground;
