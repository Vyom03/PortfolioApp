import React, { useEffect, useRef } from 'react';
import './FloatingShapes.css';

function FloatingShapes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = [];
    const shapeCount = 8;

    // Create floating shapes
    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement('div');
      shape.className = `floating-shape shape-${i % 4}`;
      
      // Random position
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      
      // Random size
      const size = Math.random() * 100 + 50;
      shape.style.width = size + 'px';
      shape.style.height = size + 'px';
      
      // Random animation duration
      const duration = Math.random() * 20 + 15;
      shape.style.animationDuration = duration + 's';
      
      // Random delay
      shape.style.animationDelay = Math.random() * 5 + 's';
      
      container.appendChild(shape);
      shapes.push(shape);
    }

    return () => {
      shapes.forEach(shape => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="floating-shapes-container" />;
}

export default FloatingShapes;

