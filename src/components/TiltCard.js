import React from 'react';
import { use3DTilt } from '../hooks/use3DTilt';
import './TiltCard.css';

/**
 * Wrapper component that adds 3D tilt effect to its children
 */
function TiltCard({ children, className = '', maxTilt = 15, scale = 1.05 }) {
  const { ref } = use3DTilt({ maxTilt, scale });

  return (
    <div ref={ref} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
}

export default TiltCard;

