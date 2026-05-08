import React, { useEffect, useRef } from 'react';
import './ElegantWaves.css';

function ElegantWaves() {
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const rafRef = useRef(null);
  const pendingRef = useRef(null);

  useEffect(() => {
    // No mouse on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const wave1 = wave1Ref.current;
    const wave2 = wave2Ref.current;
    if (!wave1 || !wave2) return;

    const handleMouseMove = (e) => {
      pendingRef.current = e;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const ev = pendingRef.current;
        if (!ev) return;
        const mouseXPercent = (ev.clientX / window.innerWidth) * 100;
        const mouseYPercent = (ev.clientY / window.innerHeight) * 100;
        const offsetX1 = (mouseXPercent - 50) * 0.2;
        const offsetY1 = (mouseYPercent - 50) * 0.15;
        const offsetX2 = (mouseXPercent - 50) * -0.15;
        const offsetY2 = (mouseYPercent - 50) * 0.1;
        wave1.style.transform = `translateX(${offsetX1}px) translateY(${offsetY1}px)`;
        wave2.style.transform = `translateX(${offsetX2}px) translateY(${offsetY2}px)`;
      });
    };

    const handleMouseLeave = () => {
      pendingRef.current = null;
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
      wave1.style.transform = '';
      wave2.style.transform = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="elegant-waves">
      <div ref={wave1Ref} className="wave-layer wave-1" />
      <div ref={wave2Ref} className="wave-layer wave-2" />
    </div>
  );
}

export default ElegantWaves;
