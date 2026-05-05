import { useEffect, useRef } from 'react';

/**
 * Custom hook for magnetic button effect - button follows cursor
 * @param {Object} options
 * @param {number} options.distance - Maximum distance to move (default: 20)
 * @returns {Object} { ref }
 */
export const useMagneticButton = ({ distance = 20 } = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.min(rect.width, rect.height) / 2 + distance;

      if (distanceFromCenter < maxDistance) {
        const moveX = (deltaX / maxDistance) * distance;
        const moveY = (deltaY / maxDistance) * distance;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        element.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
      element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [distance]);

  return { ref: elementRef };
};

