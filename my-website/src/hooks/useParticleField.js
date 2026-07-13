import { useEffect } from 'react';

const DEFAULTS = {
  color: '139, 92, 246',
  densityDivisor: 16000,
  minCount: 18,
  maxCount: 90,
  maxCountMobile: 40,
  lineDistance: 130,
  lineOpacity: 0.18,
  dotOpacity: 0.65,
  staticDotOpacity: 0.5,
  pointerRadius: 140,
  interactive: true,
  speed: 0.25,
};

function getParticleCount(width, height, config) {
  const isSmall = width < 640;
  const base = Math.round((width * height) / config.densityDivisor);
  return Math.max(config.minCount, Math.min(isSmall ? config.maxCountMobile : config.maxCount, base));
}

export default function useParticleField(canvasRef, options = {}) {
  const {
    color = DEFAULTS.color,
    densityDivisor = DEFAULTS.densityDivisor,
    minCount = DEFAULTS.minCount,
    maxCount = DEFAULTS.maxCount,
    maxCountMobile = DEFAULTS.maxCountMobile,
    lineDistance = DEFAULTS.lineDistance,
    lineOpacity = DEFAULTS.lineOpacity,
    dotOpacity = DEFAULTS.dotOpacity,
    staticDotOpacity = DEFAULTS.staticDotOpacity,
    pointerRadius = DEFAULTS.pointerRadius,
    interactive = DEFAULTS.interactive,
    speed = DEFAULTS.speed,
  } = options;

  useEffect(() => {
    const config = {
      color,
      densityDivisor,
      minCount,
      maxCount,
      maxCountMobile,
      lineDistance,
      lineOpacity,
      dotOpacity,
      staticDotOpacity,
      pointerRadius,
      interactive,
      speed,
    };

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
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

      const count = getParticleCount(width, height, config);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        r: Math.random() * 1.5 + 1,
      }));
    }

    function drawStatic() {
      resize();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(${config.color}, ${config.staticDotOpacity})`;
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

        if (config.interactive && pointer.x !== null) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < config.pointerRadius && dist > 0.01) {
            const force = (config.pointerRadius - dist) / config.pointerRadius;
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
          if (dist < config.lineDistance) {
            ctx.strokeStyle = `rgba(${config.color}, ${config.lineOpacity * (1 - dist / config.lineDistance)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = `rgba(${config.color}, ${config.dotOpacity})`;
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
      if (config.interactive) {
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
      }
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
  }, [
    canvasRef,
    color,
    densityDivisor,
    minCount,
    maxCount,
    maxCountMobile,
    lineDistance,
    lineOpacity,
    dotOpacity,
    staticDotOpacity,
    pointerRadius,
    interactive,
    speed,
  ]);
}
