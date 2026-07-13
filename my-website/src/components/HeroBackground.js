import { useEffect, useRef } from 'react';
import './HeroBackground.css';

const ACCENT = '139, 92, 246';
const LINE_DISTANCE = 130;
const POINTER_RADIUS = 140;

function getParticleCount(width, height) {
  const isSmall = width < 640;
  const base = Math.round((width * height) / 16000);
  return Math.max(18, Math.min(isSmall ? 40 : 90, base));
}

function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let animationId = null;
    const pointer = { x: null, y: null };

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getParticleCount(width, height);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 1,
      }));
    }

    function drawStatic() {
      resize();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(${ACCENT}, 0.5)`;
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (pointer.x !== null) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_RADIUS && dist > 0.01) {
            const force = (POINTER_RADIUS - dist) / POINTER_RADIUS;
            p.x += (dx / dist) * force * 1.2;
            p.y += (dy / dist) * force * 1.2;
          }
        }
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINE_DISTANCE) {
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.18 * (1 - dist / LINE_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = `rgba(${ACCENT}, 0.65)`;
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(step);
    }

    function handlePointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }

    function handlePointerLeave() {
      pointer.x = null;
      pointer.y = null;
    }

    function handleTouchMove(event) {
      if (!event.touches.length) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.touches[0].clientX - rect.left;
      pointer.y = event.touches[0].clientY - rect.top;
    }

    resize();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      animationId = requestAnimationFrame(step);
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    let resizeTimeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (prefersReducedMotion) {
          drawStatic();
        } else {
          resize();
        }
      }, 150);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="hero-background">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-gradient" />
    </div>
  );
}

export default HeroBackground;
