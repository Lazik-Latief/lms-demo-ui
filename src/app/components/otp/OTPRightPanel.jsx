'use client';

import { motion } from 'framer-motion';
import FloatingIcons from './FloatingIcons';

export default function OTPRightPanel() {
  return (
    <div className="relative flex items-center justify-center">

      {/* GLASS CARD */}
      <div className="relative w-[420px] h-[560px] rounded-3xl
        bg-white/5 backdrop-blur-xl border border-white/10
        flex flex-col items-center justify-center text-center">

        {/* ICON ORBITS */}
        <FloatingIcons />

        {/* CENTER IMAGE */}
        <motion.img
          src="/otp/character.png" 
          alt="OTP Character"
          className="w-56 z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        {/* ↑↑↑ REPLACE IMAGE HERE ↑↑↑ */}

        {/* TEXT */}
        <div className="absolute bottom-10 px-8">
          <h3 className="text-xl font-semibold mb-1">
            Secure Your Journey
          </h3>
          <p className="text-sm text-gray-400">
            Verification helps us keep your learning safe.
          </p>
        </div>

      </div>
    </div>
  );
}