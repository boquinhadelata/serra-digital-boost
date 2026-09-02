import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
  hue: number;
  blur: number;
};

const HUES = [28, 38, 45]; // laranja, âmbar, dourado

export function BokehBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const build = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(46, Math.max(16, (width * height) / 34000)));
      particles = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: 6 + depth * 60,
          speed: 0.08 + (1 - depth) * 0.35,
          drift: 0.25 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2,
          alpha: 0.2 + Math.random() * 0.5,
          hue: HUES[Math.floor(Math.random() * HUES.length)]!,
          blur: 4 + depth * 26,
        };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        if (!reduced) {
          p.y -= p.speed;
          p.phase += 0.004;
          if (p.y + p.r < -20) {
            p.y = height + p.r + Math.random() * 60;
            p.x = Math.random() * width;
          }
        }
        const x = p.x + Math.sin(p.phase + t * 0.00012) * p.drift * 18;
        const pulse = reduced ? 1 : 0.85 + Math.sin(p.phase * 2) * 0.15;
        const a = p.alpha * pulse;

        const grad = ctx.createRadialGradient(x, p.y, 0, x, p.y, p.r);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 62%, ${a})`);
        grad.addColorStop(0.45, `hsla(${p.hue}, 100%, 55%, ${a * 0.45})`);
        grad.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

        ctx.filter = `blur(${p.blur}px)`;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="bokeh-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="bokeh-canvas" />
      <div className="bokeh-veil" />
    </div>
  );
}
