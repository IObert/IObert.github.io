import { useEffect } from 'react';

interface CursorTrailProps {
  enabled: boolean;
}

export function CursorTrail({ enabled }: CursorTrailProps) {
  useEffect(() => {
    if (!enabled) return;

    const style = document.createElement('style');
    style.textContent = `
      .cursor-trail-particle {
        position: fixed;
        width: 8px;
        height: 8px;
        background: hsl(var(--primary));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        animation: cursor-trail-fade 1s ease-out forwards;
      }
      
      @keyframes cursor-trail-fade {
        0% {
          opacity: 0.8;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.3);
        }
      }
    `;
    document.head.appendChild(style);

    const particles: HTMLDivElement[] = [];
    const maxParticles = 30;
    let lastTime = 0;
    const throttle = 30; // ms between particles

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;

      const particle = document.createElement('div');
      particle.className = 'cursor-trail-particle';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      document.body.appendChild(particle);
      particles.push(particle);

      if (particles.length > maxParticles) {
        const oldParticle = particles.shift();
        oldParticle?.remove();
      }

      setTimeout(() => {
        particle.remove();
        const index = particles.indexOf(particle);
        if (index > -1) particles.splice(index, 1);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(p => p.remove());
      style.remove();
    };
  }, [enabled]);

  return null;
}
