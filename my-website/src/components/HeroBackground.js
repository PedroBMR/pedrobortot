import { useRef } from 'react';
import './HeroBackground.css';
import useParticleField from '../hooks/useParticleField';

function HeroBackground() {
  const canvasRef = useRef(null);
  useParticleField(canvasRef, { interactive: true });

  return (
    <div className="hero-background">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-gradient" />
    </div>
  );
}

export default HeroBackground;
