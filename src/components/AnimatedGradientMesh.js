import React, { useEffect, useRef } from 'react';
import './AnimatedGradientMesh.css';

function AnimatedGradientMesh() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      time += 0.005;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradient orbs that move slowly
      const orbCount = 3;
      
      for (let i = 0; i < orbCount; i++) {
        const x = canvas.width * (0.2 + i * 0.3) + Math.sin(time + i) * 100;
        const y = canvas.height * (0.3 + i * 0.2) + Math.cos(time * 0.7 + i) * 80;
        const radius = 300 + Math.sin(time * 0.5 + i) * 50;

        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        
        if (i === 0) {
          // Sea green orb
          gradient.addColorStop(0, 'rgba(10, 190, 173, 0.15)');
          gradient.addColorStop(0.5, 'rgba(10, 190, 173, 0.08)');
          gradient.addColorStop(1, 'transparent');
        } else if (i === 1) {
          // Orange orb
          gradient.addColorStop(0, 'rgba(255, 88, 35, 0.15)');
          gradient.addColorStop(0.5, 'rgba(255, 88, 35, 0.08)');
          gradient.addColorStop(1, 'transparent');
        } else {
          // Blend orb
          gradient.addColorStop(0, 'rgba(10, 190, 173, 0.1)');
          gradient.addColorStop(0.5, 'rgba(255, 88, 35, 0.1)');
          gradient.addColorStop(1, 'transparent');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-gradient-mesh"
    />
  );
}

export default AnimatedGradientMesh;

