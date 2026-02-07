'use client';

import { useEffect, useRef } from 'react';

/**
 * FloatingIcons
 * Premium 3D orbiting symbols
 * Dim black + yellow / blue glow
 */

const ICONS = [
  { src: 'AuthComponents/symbols/atom-blue.png', color: 'blue', size: 64 },
  { src: 'AuthComponents/symbols/brain-blue.png', color: 'blue', size: 64 },
  { src: 'AuthComponents/symbols/pi-yellow.png', color: 'yellow', size: 64 },
  { src: 'AuthComponents/symbols/sigma-yellow.png', color: 'yellow', size: 64 },
  { src: 'AuthComponents/symbols/ui-bell.png', color: 'yellow', size: 64 },
  { src: 'AuthComponents/symbols/pi-blue.png', color: 'blue', size: 64 },
  { src: 'AuthComponents/symbols/atom-blue.png', color: 'blue', size: 64 },
  { src: 'AuthComponents/symbols/pi-yellow.png', color: 'yellow', size: 64 },
];

const RADIUS_X = 240;
const RADIUS_Y = 180;
const DEPTH = 220;
const PERSPECTIVE = 1200;

export default function FloatingIcons() {
  const iconsRef = useRef([]);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    // prevent double animation loop (Next.js strict mode)
    if (animationRef.current) return;

    const animate = () => {
      timeRef.current += 0.006;

      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        // unique phase per icon
        const phase = (index / ICONS.length) * Math.PI * 2;
        const angle = timeRef.current + phase;

        const x = Math.cos(angle) * RADIUS_X;
        const y = Math.sin(angle) * RADIUS_Y;
        const z = Math.sin(angle) * DEPTH;

        const depthRatio = (z + DEPTH) / (DEPTH * 2);
        const scale = 0.55 + depthRatio * 0.6;
        const opacity = 0.25 + depthRatio * 0.55;

        icon.style.transform =
          `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;

        icon.style.opacity = opacity;
        icon.style.zIndex = Math.floor(depthRatio * 100);

        const glow =
          ICONS[index].color === 'yellow'
            ? `rgba(250,204,21,${depthRatio * 0.35})`
            : `rgba(56,189,248,${depthRatio * 0.35})`;

        icon.style.filter =
          `drop-shadow(0 0 ${10 + depthRatio * 22}px ${glow})`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    };
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ perspective: `${PERSPECTIVE}px` }}
    >
      {ICONS.map((icon, index) => (
        <div
          key={index}
          ref={(el) => (iconsRef.current[index] = el)}
          className="absolute will-change-transform"
          style={{ width: icon.size, height: icon.size }}
        >
          <img
            src={icon.src}
            alt="orbit-icon"
            className="w-full h-full object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
