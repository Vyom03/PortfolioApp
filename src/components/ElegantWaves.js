import React, { useEffect, useRef } from 'react';
import './ElegantWaves.css';

function ElegantWaves() {
  const containerRef = useRef(null);
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const wave1 = wave1Ref.current;
    const wave2 = wave2Ref.current;
    if (!container || !wave1 || !wave2) return;

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Calculate mouse position relative to viewport
      const mouseXPercent = (e.clientX / window.innerWidth) * 100;
      const mouseYPercent = (e.clientY / window.innerHeight) * 100;

      // Make waves react to mouse position
      const offsetX1 = (mouseXPercent - 50) * 0.3;
      const offsetY1 = (mouseYPercent - 50) * 0.2;
      const offsetX2 = (mouseXPercent - 50) * -0.25;
      const offsetY2 = (mouseYPercent - 50) * 0.15;

      // Apply interactive transform
      wave1.style.transform = `translateX(${offsetX1}px) translateY(${offsetY1}px) scale(1.05)`;
      wave2.style.transform = `translateX(${offsetX2}px) translateY(${offsetY2}px) scale(1.03)`;
    };

    const handleMouseLeave = () => {
      wave1.style.transform = '';
      wave2.style.transform = '';
    };

    // Scroll interaction
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
      const scrollPercent = Math.min(scrollY / 1000, 1);
      
      // Waves move up slightly as you scroll
      const scrollOffset = scrollPercent * 50;
      wave1.style.setProperty('--scroll-offset', `${scrollOffset}px`);
      wave2.style.setProperty('--scroll-offset', `${scrollOffset * 0.8}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="elegant-waves">
      <div ref={wave1Ref} className="wave-layer wave-1"></div>
      <div ref={wave2Ref} className="wave-layer wave-2"></div>
    </div>
  );
}

export default ElegantWaves;

