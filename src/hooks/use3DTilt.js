import { useEffect, useRef } from 'react';

export const use3DTilt = ({
  maxTilt = 8,
  scale = 1.03,
  perspective = 1200
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Disable on touch/mobile devices
    if (window.matchMedia('(hover: none)').matches) return;

    const element = elementRef.current;
    if (!element) return;

    let rafId = null;
    let isHovered = false;

    element.style.transformStyle = 'preserve-3d';
    element.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';

    const handleMouseMove = (e) => {
      if (!isHovered) return;
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        element.style.transition = 'transform 0.08s linear';
        element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      });
    };

    const handleMouseEnter = () => {
      isHovered = true;
      element.style.willChange = 'transform';
    };

    const handleMouseLeave = () => {
      isHovered = false;
      if (rafId) cancelAnimationFrame(rafId);
      element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      setTimeout(() => {
        element.style.willChange = 'auto';
      }, 500);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, scale, perspective]);

  return { ref: elementRef };
};
