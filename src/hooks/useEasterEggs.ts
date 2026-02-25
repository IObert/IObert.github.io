import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';

// Hook for midnight mode
export function useMidnightMode() {
  useEffect(() => {
    const checkMidnight = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        toast({
          title: "🌙 Still coding?",
          description: "Have a coffee ☕ and take a break!",
          duration: 5000,
        });
      }
    };

    // Check every minute
    const interval = setInterval(checkMidnight, 60000);
    return () => clearInterval(interval);
  }, []);
}

// Hook for cursor trail
export function useCursorTrail(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const particles: HTMLDivElement[] = [];
    const maxParticles = 20;

    const handleMouseMove = (e: MouseEvent) => {
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
    };
  }, [enabled]);
}

// Track if console art has been displayed
let consoleArtDisplayed = false;

// Display console art
export function displayConsoleArt() {
  // Only display once, even in StrictMode
  if (consoleArtDisplayed) return;
  consoleArtDisplayed = true;

  const art = `
    ███╗   ███╗ █████╗ ██████╗ ██╗██╗   ██╗███████╗
    ████╗ ████║██╔══██╗██╔══██╗██║██║   ██║██╔════╝
    ██╔████╔██║███████║██████╔╝██║██║   ██║███████╗
    ██║╚██╔╝██║██╔══██║██╔══██╗██║██║   ██║╚════██║
    ██║ ╚═╝ ██║██║  ██║██║  ██║██║╚██████╔╝███████║
    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝
    
    👋 Hey there, fellow developer!
    
    Welcome to the matrix... I mean, my website.
    
    Easter eggs you can try:
    - Hover over my profile pic (watch it fade & flip)
    - Hover over "Munich" for a surprise
    - Click the logo 3 times for cursor magic
    - Toggle theme 10 times rapidly for TRIPPY disco mode
    - Be here at midnight for a surprise
    
    Built with React, TypeScript, and ❤️
    
    Want to connect?
  `;

  console.log(art);
}
