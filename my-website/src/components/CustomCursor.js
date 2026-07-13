import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches);
    const handleChange = (event) => setEnabled(event.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    function handleMove(event) {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    function handleOver(event) {
      setActive(Boolean(event.target.closest('a, button, .tilt-card')));
    }

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerover', handleOver, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`custom-cursor ${active ? 'is-active' : ''}`}
      style={{ translateX: springX, translateY: springY }}
      aria-hidden="true"
    />
  );
}

export default CustomCursor;
