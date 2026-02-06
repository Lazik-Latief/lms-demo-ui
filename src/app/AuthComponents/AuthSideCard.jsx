'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * AuthSideCard
 * -----------------------------
 * Visual side card for Login / Signup
 * Center image with glowing ring
 * Symbols orbiting around the image
 *
 * Uses:
 * - framer-motion for animation
 * - Tailwind + existing global.css variables
 */

// const symbols = [
//   { src: '/AuthComponents/symbols/atom-blue.png', size: 36 },
//   { src: '/AuthComponents/symbols/brain-blue.png', size: 32 },
//   { src: '/AuthComponents/symbols/character-typing.png', size: 34 },
//   { src: '/AuthComponents/symbols/pi-blue.png', size: 30 },
//    { src: '/AuthComponents/symbols/pi-yellow.png', size: 30 },
//     { src: '/AuthComponents/symbols/sigma-yellow.png', size: 30 },
//      { src: '/AuthComponents/symbols/ui-bell.png', size: 30 },
// ];

const symbols = [
  { src: '/AuthComponents/symbols/atom-blue.png', size: 48 },
  { src: '/AuthComponents/symbols/brain-blue.png', size: 44 },
  { src: '/AuthComponents/symbols/character-typing.png', size: 46 },
  { src: '/AuthComponents/symbols/pi-yellow.png', size: 42 },
  { src: '/AuthComponents/symbols/sigma-yellow.png', size: 42 },
  { src: '/AuthComponents/symbols/ui-bell.png', size: 40 },
];


export default function AuthSideCard() {
  return (
    <div className="relative hidden h-full w-full items-center justify-center lg:flex">
      
      {/* ===== Card Container ===== */}
      <div className="card relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-10">
        
        {/* ===== Heading Text ===== */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold">Koshur Scientist</h1>
          <p className="mt-2 text-sm text-muted">
            Where curiosity meets clarity
          </p>
        </div>

        {/* ===== Image + Orbit System ===== */}
        <div className="relative flex h-[260px] w-[260px] items-center justify-center">
          
          {/* --- Glowing circular ring --- */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--accent)]"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,210,51,0.25)',
                '0 0 40px rgba(255,210,51,0.45)',
                '0 0 20px rgba(255,210,51,0.25)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* --- Center Image --- */}
          <div className="relative z-10 h-[150px] w-[150px] overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]">
            <Image
              src="/AuthComponents/symbols/new-profile.jpeg"
              alt="Koshur Scientist Visual"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* --- Orbiting Symbols Layer --- */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {symbols.map((icon, index) => {
              const angle = (360 / symbols.length) * index;

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translateY(-130px)
                      rotate(-${angle}deg)
                    `,
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    filter: [
                      'drop-shadow(0 0 6px rgba(255,210,51,0.3))',
                      'drop-shadow(0 0 12px rgba(255,210,51,0.6))',
                      'drop-shadow(0 0 6px rgba(255,210,51,0.3))',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt="symbol"
                    width={icon.size}
                    height={icon.size}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ===== Footer Text ===== */}
        <p className="mt-10 max-w-xs text-center text-sm text-muted">
          Learn. Experiment. Innovate.  
          Built for thinkers, makers, and future scientists.
        </p>
      </div>
    </div>
  );
}
