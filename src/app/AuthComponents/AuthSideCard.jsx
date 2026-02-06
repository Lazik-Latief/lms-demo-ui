'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/* ================================
   CONFIG — TUNE THESE
================================ */

// ⬇️ Bigger container so nothing clips
const SIZE = 1500;

// ⬇️ PULL ORBIT CLOSER TO CENTER IMAGE
const RADIUS = 280;

const CENTER_IMAGE = 220;

const symbols = [
  { src: '/AuthComponents/symbols/atom-blue.png', size: 68 },
  { src: '/AuthComponents/symbols/brain-blue.png', size: 68 },
  { src: '/AuthComponents/symbols/pi-yellow.png', size: 68 },
  { src: '/AuthComponents/symbols/sigma-yellow.png', size: 68 },
  { src: '/AuthComponents/symbols/ui-bell.png', size: 68 },
];

/* ================================
   MAIN COMPONENT
================================ */
export default function AuthSideCard() {
  return (
    <div className="relative hidden lg:flex w-full h-full items-center justify-center overflow-hidden">

      {/* =====================
         GOLD / BLACK BACKGROUND
      ====================== */}
      <div className="absolute inset-0">
        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.22),rgba(0,0,0,0.9)_65%)]" />

        {/* Vignette for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* =====================
         ORBIT SCENE
      ====================== */}
      <motion.div
        className="relative z-10"
        style={{ width: SIZE, height: SIZE }}
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      >
        {/* =====================
           SYMBOLS (STATIC CIRCLE)
           👉 Edit RADIUS above
        ====================== */}
        {symbols.map((icon, i) => {
          const angle = (2 * Math.PI * i) / symbols.length;
          const x = Math.cos(angle) * RADIUS;
          const y = Math.sin(angle) * RADIUS;

          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <Image
                src={icon.src}
                width={icon.size}
                height={icon.size}
                alt="symbol"
                draggable={false}
                style={{
                  filter:
                    'drop-shadow(0 0 22px rgba(250,204,21,0.9))',
                }}
              />
            </div>
          );
        })}

        {/* =====================
           CENTER IMAGE
        ====================== */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Glowing ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: CENTER_IMAGE + 50,
              height: CENTER_IMAGE + 50,
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(250,204,21,0.5)',
                '0 0 100px rgba(250,204,21,0.95)',
                '0 0 40px rgba(250,204,21,0.5)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Actual image */}
          <div
            className="relative rounded-full overflow-hidden ring-2 ring-yellow-400/70"
            style={{
              width: CENTER_IMAGE,
              height: CENTER_IMAGE,
            }}
          >
            <Image
              src="/AuthComponents/symbols/character-typing.png"
              alt="center"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
