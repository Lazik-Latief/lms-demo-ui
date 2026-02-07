'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import OTPInputs from './OTPInputs';

export default function OTPLeftPanel() {
  const [showOTP, setShowOTP] = useState(false);

  return (
    <div className="flex flex-col justify-center px-10 lg:px-16">

      {/* LOGO */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-xl font-semibold">Koshur</span>
        <span className="bg-[#FACC15] text-black text-xs px-2 py-0.5 rounded">
          LMS
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2">Verify Your Account</h1>
      <p className="text-gray-400 mb-8 max-w-sm">
        Enter your email or phone number to receive a verification code
      </p>

      {/* EMAIL / PHONE INPUT */}
      {!showOTP && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <input
            placeholder="Email address or Phone number"
            className="w-full bg-[#111111] border border-white/10 rounded-xl 
            px-4 py-3 focus:outline-none focus:border-[#FACC15]"
          />

          <button
            onClick={() => setShowOTP(true)}
            className="w-full bg-[#FACC15] text-black py-3 rounded-xl font-semibold
            hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] transition"
          >
            Send OTP
          </button>
        </motion.div>
      )}

      {/* OTP SECTION */}
      <AnimatePresence>
        {showOTP && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6 mt-4"
          >
            <OTPInputs />

            <p className="text-sm text-[#FACC15] cursor-pointer w-fit">
              Resend OTP
            </p>

            <button
              className="w-full bg-[#FACC15] text-black py-3 rounded-xl font-semibold
              hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] transition"
            >
              Verify & Continue
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}