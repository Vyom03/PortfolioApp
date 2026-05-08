import React, { useEffect, useRef } from 'react';
import './GlobalParticles.css';

function GlobalParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Disable on touch/mobile — no mouse interaction and saves significant battery
    if (window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particleCount = 70;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.color = Math.random() > 0.5 ? '#0ABEAD' : '#FF5823';
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 180;
        const maxDistSq = maxDist * maxDist;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * 0.06;
          this.vy -= Math.sin(angle) * force * 0.06;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));

        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const maxConnectionDistSq = 130 * 130;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Draw connections with solid color (no gradient per line)
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistSq) {
            const opacity = (1 - Math.sqrt(distSq) / 130) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="global-particles" />;
}

export default GlobalParticles;
