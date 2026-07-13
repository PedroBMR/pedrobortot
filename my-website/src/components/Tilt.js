import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function Tilt({ children, className = '', max = 8, ...motionProps }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(event) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max);
    rotateX.set(-py * max);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export default Tilt;
