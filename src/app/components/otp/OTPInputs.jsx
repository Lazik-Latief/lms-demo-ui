'use client';

export default function OTPInputs() {
  return (
    <div className="flex gap-3 justify-start">
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          maxLength={1}
          className="w-12 h-12 rounded-lg bg-[#111111]
          border border-white/10 text-center text-lg
          focus:outline-none focus:border-[#FACC15]
          transition"
        />
      ))}
    </div>
  );
}