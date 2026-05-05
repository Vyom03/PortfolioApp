import { useEffect, useRef } from 'react';

/**
 * Custom hook for 3D tilt effect on cards
 * @param {Object} options
 * @param {number} options.maxTilt - Maximum tilt angle in degrees (default: 15)
 * @param {number} options.scale - Scale on hover (default: 1.05)
 * @param {number} options.perspective - CSS perspective value (default: 1000)
 * @returns {Object} { ref, handleMouseMove, handleMouseLeave }
 */
export const use3DTilt = ({
  maxTilt = 15,
  scale = 1.05,
  perspective = 1000
} = {}) => {
  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    element.style.transform = `
      perspective(${perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(${scale}, ${scale}, ${scale})
    `;
    element.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    const element = elementRef.current;
    if (!element) return;

    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    element.style.transition = 'transform 0.5s ease-out';
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.transformStyle = 'preserve-3d';
    element.style.willChange = 'transform';

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { ref: elementRef };
};

