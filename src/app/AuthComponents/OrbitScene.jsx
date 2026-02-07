'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ======================================================
   CONFIGURATION ZONE — EDIT THESE TO ADJUST ORBIT
====================================================== */
const SIZE = 1200;          // Container size (should be bigger than orbit)
const RADIUS_X = 420;       // Horizontal orbit radius
const RADIUS_Y = 280;       // Vertical orbit radius
const BASE_SPEED = 0.002;   // Base rotation speed
const HOVER_DAMPING = 0.2;  // Slowdown on hover
const TILT_STRENGTH = 12;   // Parallax tilt strength

/* ======================================================
   SINGLE ORBITING SYMBOL
====================================================== */
function OrbitSymbol({ icon, index, total, angle }) {
  // Each symbol has an offset so they distribute evenly
  const a = useTransform(angle, (v) => v + (index * Math.PI * 2) / total);

  // Compute x, y position based on ellipse
  const x = useTransform(a, (v) => Math.cos(v) * RADIUS_X);
  const y = useTransform(a, (v) => Math.sin(v) * RADIUS_Y);

  // Depth simulation for scale, opacity, zIndex
  const depth = useTransform(a, (v) => (Math.sin(v) + 1) / 2);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        x,
        y,
        scale: depth.to((d) => 0.65 + d * 0.75),
        opacity: depth.to((d) => 0.35 + d * 0.65),
        filter: depth.to(
          (d) =>
            `blur(${(1 - d) * 2}px) drop-shadow(0 0 ${12 + d * 24}px rgba(250,204,21,0.9))`
        ),
        zIndex: depth.to((d) => Math.round(d * 40)),
      }}
    >
      {/* SELF ROTATION OF SYMBOL */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <Image
          src={icon.src}
          width={icon.size}
          height={icon.size}
          alt="orbit-symbol"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

/* ======================================================
   MAIN ORBIT SCENE
====================================================== */
export default function OrbitScene({ symbols, center }) {
  const angle = useMotionValue(0);
  const speed = useRef(BASE_SPEED);
  const [isHover, setIsHover] = useState(false);

  // Mouse parallax
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  // Animation loop for orbit
  useEffect(() => {
    let raf;
    let last = performance.now();

    const loop = (now) => {
      const delta = now - last;
      last = now;
      angle.set(angle.get() + delta * speed.current);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [angle]);

  // Slow down orbit on hover
  useEffect(() => {
    speed.current = isHover ? BASE_SPEED * HOVER_DAMPING : BASE_SPEED;
  }, [isHover]);

  // Mouse parallax calculation
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    tiltX.set((-dy / rect.height) * TILT_STRENGTH);
    tiltY.set((dx / rect.width) * TILT_STRENGTH);
  };

  // MOBILE FALLBACK: no orbit
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return <div className="flex items-center justify-center">{center}</div>;
  }

  return (
    // ORBIT SCENE CONTAINER
    <motion.div
      className="relative mx-auto"
      style={{
        width: SIZE,
        height: SIZE,
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseMove={handleMouseMove}
    >
      {/* ORBITING SYMBOLS */}
      {symbols.map((icon, i) => (
        <OrbitSymbol key={i} icon={icon} index={i} total={symbols.length} angle={angle} />
      ))}

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        {center}
      </div>

      {/* GRAIN / NOISE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')]" />
      {/* <-- EDIT opacity or bg to change overlay intensity/color --> */}
    </motion.div>
  );
}
