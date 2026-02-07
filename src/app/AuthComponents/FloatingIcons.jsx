'use client';

import { useEffect, useRef } from 'react';

/**
 * FloatingIcons
 * 3D orbiting symbols with glow effect
 * Each icon moves in an elliptical orbit and has dynamic glow
 */

const ICONS = [
  { src: 'AuthComponents/symbols/atom-blue.png', color: 'blue', size: 64, delay: 0 },
  { src: 'AuthComponents/symbols/brain-blue.png', color: 'blue', size: 64, delay: 0.5 },
  { src: 'AuthComponents/symbols/pi-yellow.png', color: 'yellow', size: 64, delay: 1 },
  { src: 'AuthComponents/symbols/sigma-yellow.png', color: 'yellow', size: 64, delay: 1.5 },
  { src: 'AuthComponents/symbols/ui-bell.png', color: 'yellow', size: 64, delay: 2 },
];

const RADIUS_X = 200; // horizontal orbit radius
const RADIUS_Y = 300; // vertical orbit radius
const PERSPECTIVE = 1000; // 3D perspective for orbit

export default function FloatingIcons() {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    let time = 0;
    let animationId;

    const animate = () => {
      time += 0.004;

      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        // Compute orbit positions
        const angle = time + (index * (2 * Math.PI / ICONS.length));
        const x = Math.cos(angle) * RADIUS_X;
        const y = Math.sin(angle) * RADIUS_Y * 0.6;
        const z = Math.sin(angle) * 100;

        // Scale and opacity based on depth
        const scale = 0.7 + ((z + 100) / 200) * 0.6;
        const opacity = 0.5 + ((z + 100) / 200) * 0.5;

        icon.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        icon.style.opacity = opacity;
        icon.style.zIndex = Math.round(z + 100);

        // Glow effect
        const glowIntensity = (z + 100) / 200;
        const glowColor = ICONS[index].color === 'yellow'
          ? `rgba(255, 215, 0, ${glowIntensity * 0.8})`
          : `rgba(0, 191, 255, ${glowIntensity * 0.8})`;

        icon.style.filter = `drop-shadow(0 0 ${10 + glowIntensity * 20}px ${glowColor})`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    // CONTAINER DIV FOR ALL FLOATING ICONS
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: `${PERSPECTIVE}px` }}
    >
      {/* EACH ICON */}
      {ICONS.map((icon, index) => (
        <div
          key={index}
          ref={el => (iconsRef.current[index] = el)}
          className="absolute transition-all duration-100"
          style={{ width: icon.size, height: icon.size }}
        >
          <img
            src={icon.src}
            alt="orbit-icon"
            className="w-full h-full object-contain"
            // <-- EDIT THIS ANIMATION PROPERTY TO CHANGE PULSE SPEED/DELAY
            style={{ animation: `pulse-glow 2s ease-in-out infinite ${icon.delay}s` }}
          />
        </div>
      ))}
    </div>
  );
}
