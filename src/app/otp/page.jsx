'use client';

import OTPLeftPanel from '../components/otp/OTPLeftPanel';
import OTPRightPanel from '../components/otp/OTPRightPanel';

export default function OTPPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      
      {/* Main Card Container */}
      <div className="w-full max-w-6xl h-[680px] rounded-3xl 
        bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10
        grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-2xl">

        <OTPLeftPanel />
        <OTPRightPanel />

      </div>
    </main>
  );
}