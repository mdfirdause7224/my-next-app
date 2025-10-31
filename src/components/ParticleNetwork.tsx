'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  rotation: number;
  rotationSpeed: number;
}

export const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.2 + 1.2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
        });
      }
    };

    const drawTriangle = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      const gradient = ctx.createLinearGradient(-size, -size, size, size);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
      gradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.6)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.4)');

      ctx.fillStyle = gradient;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.866, size * 0.5);
      ctx.lineTo(-size * 0.866, size * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        if (mouse.current.active) {
          const dx = particle.x - mouse.current.x;
          const dy = particle.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const force = (120 - dist) / 120;
            const angle = Math.atan2(dy, dx);
            particle.vx += Math.cos(angle) * force * 0.15;
            particle.vy += Math.sin(angle) * force * 0.15;
          }
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        drawTriangle(particle.x, particle.y, particle.radius * 3, particle.rotation, 0.6);

        // ✨ Thicker lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${0.25 * (1 - distance / 130)})`);
            gradient.addColorStop(1, `rgba(14, 165, 233, ${0.15 * (1 - distance / 130)})`);
            ctx.strokeStyle = gradient;

            // ⬆️ Increased from 0.5 → 1.2 for visibility
            ctx.lineWidth = 1.2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
      }}
    />
  );
};
