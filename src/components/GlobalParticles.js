import React, { useEffect, useRef } from 'react';
import './GlobalParticles.css';

function GlobalParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particleCount = window.innerWidth < 768 ? 60 : 120;

    const navbarHeight = 80; // Height to exclude from top

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      const fullHeight = document.documentElement.scrollHeight || window.innerHeight;
      canvas.height = fullHeight;
      canvas.style.height = fullHeight + 'px';
    };
    resizeCanvas();
    
    const handleResize = () => {
      resizeCanvas();
      // Reinitialize particles on resize
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        // Start particles below navbar
        this.y = Math.random() * (canvas.height - navbarHeight) + navbarHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 3 + 2;
        this.baseRadius = this.radius;
        this.color = Math.random() > 0.5 ? '#0ABEAD' : '#FF5823';
        this.opacity = Math.random() * 0.6 + 0.4;
      }

      update() {
        // Mouse interaction (account for scroll)
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const mouseY = mouseRef.current.y + scrollTop;
        const dx = mouseRef.current.x - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          // Repulsion effect
          this.vx -= Math.cos(angle) * force * 0.08;
          this.vy -= Math.sin(angle) * force * 0.08;
          // Pulse effect - more dramatic
          this.radius = this.baseRadius + force * 5;
          this.opacity = Math.min(1, this.opacity + force * 0.5);
        } else {
          this.radius = this.baseRadius + (this.radius - this.baseRadius) * 0.9;
          this.opacity = Math.max(0.4, this.opacity * 0.98);
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < navbarHeight || this.y > canvas.height) this.vy *= -1;

        // Keep particles in bounds (below navbar)
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(navbarHeight, Math.min(canvas.height, this.y));

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw() {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.fill();
        
        // Main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        // Inner highlight
        ctx.beginPath();
        ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Update canvas on scroll
    const handleScroll = () => {
      resizeCanvas();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation loop
    const animate = () => {
      // Update canvas height based on scroll
      const currentHeight = document.documentElement.scrollHeight || window.innerHeight;
      if (canvas.height !== currentHeight) {
        canvas.height = currentHeight;
        canvas.style.height = currentHeight + 'px';
      }

      // Account for scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewportTop = scrollTop;
      const viewportBottom = scrollTop + window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        // Only draw if in or near viewport for performance
        if (particle.y >= viewportTop - 150 && particle.y <= viewportBottom + 150) {
          particle.draw();
        }
      });

      // Draw connections - more visible (only for visible particles)
      particlesRef.current.forEach((particle, i) => {
        if (particle.y >= viewportTop - 150 && particle.y <= viewportBottom + 150) {
          particlesRef.current.slice(i + 1).forEach(otherParticle => {
            if (otherParticle.y >= viewportTop - 150 && otherParticle.y <= viewportBottom + 150) {
              const dx = otherParticle.x - particle.x;
              const dy = otherParticle.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const maxDistance = 150;

              if (distance < maxDistance) {
                const opacity = (1 - distance / maxDistance) * 0.6;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                
                // Gradient color based on particle colors
                const gradient = ctx.createLinearGradient(
                  particle.x, particle.y,
                  otherParticle.x, otherParticle.y
                );
                gradient.addColorStop(0, particle.color);
                gradient.addColorStop(1, otherParticle.color);
                
                ctx.strokeStyle = gradient;
                ctx.globalAlpha = opacity;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.globalAlpha = 1;
              }
            }
          });
        }
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="global-particles"
    />
  );
}

export default GlobalParticles;

