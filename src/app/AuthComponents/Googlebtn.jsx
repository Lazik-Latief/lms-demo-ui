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
      className="
        w-full
        flex
        items-center
        justify-center
        gap-3
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        border border-gray-500
        rounded-md
        bg-white
        text-black
        color-black 
        hover:bg-yellow-400
        focus:outline-none
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {/* GOOGLE ICON */}
      <span className="flex h-5 w-5 items-center justify-center">
        <img src="/google.svg" alt="Google" className="w-full h-full object-contain"/>
      </span>

      <span>Continue with Google</span>
    </Button>
  );
}
