'use client';

import Button from './Button-New';

/**
 * Google Authentication Button
 * Use in Login & Signup pages
 */
export default function GoogleAuthButton({ onClick, disabled = false }) {
  return (
    <Button
      variant="secondary"
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl px-5 py-3 text-[13px] font-bold transition-all active:scale-95"
    >
      {/* GOOGLE ICON */}
      <span className="flex h-5 w-5 items-center justify-center">
        <img src="/google.svg" alt="Google" className="w-full h-full object-contain"/>
      </span>

      <span>Continue with Google</span>
    </Button>
  );
}
