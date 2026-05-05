import React from 'react';
import { useMagneticButton } from '../hooks/useMagneticButton';

/**
 * Wrapper component that adds magnetic effect to buttons
 */
function MagneticButton({ children, className = '', distance = 20, ...props }) {
  const { ref } = useMagneticButton({ distance });

  return (
    <button ref={ref} className={`magnetic-button ${className}`} {...props}>
      {children}
    </button>
  );
}

export default MagneticButton;

