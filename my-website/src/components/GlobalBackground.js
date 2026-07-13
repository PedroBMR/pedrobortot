import { useRef } from 'react';
import './GlobalBackground.css';
import useParticleField from '../hooks/useParticleField';

function GlobalBackground() {
  const canvasRef = useRef(null);
  useParticleField(canvasRef, {
    interactive: false,
    densityDivisor: 32000,
    minCount: 14,
    maxCount: 46,
    maxCountMobile: 20,
    lineDistance: 150,
    lineOpacity: 0.08,
    dotOpacity: 0.35,
    staticDotOpacity: 0.3,
    speed: 0.12,
  });

  return <canvas ref={canvasRef} className="global-background" aria-hidden="true" />;
}

export default GlobalBackground;
