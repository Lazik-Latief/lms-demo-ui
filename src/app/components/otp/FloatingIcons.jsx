'use client';

import { motion } from 'framer-motion';

export default function FloatingIcons() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >

      {/* 
        🔴 REPLACE THESE WITH REAL ICONS LATER
        Position + animation already done
      */}

      <div className="absolute text-[#FACC15]" style={{ transform: 'translateY(-200px)' }}>π</div>
      <div className="absolute text-blue-400" style={{ transform: 'translateX(200px)' }}>⚛</div>
      <div className="absolute text-[#FACC15]" style={{ transform: 'translateY(200px)' }}>Σ</div>
      <div className="absolute text-blue-400" style={{ transform: 'translateX(-200px)' }}>📘</div>

    </motion.div>
  );
}