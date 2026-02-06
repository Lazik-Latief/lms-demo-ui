'use client';

import Button from './Button-New';


// Google authentication button
// Used in login and signup pages

export default function GoogleAuthButton({
  onClick,
  disabled = false,
}) {
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
        hover:shadow-[0_0_0_2px_rgba(255,210,51,0.25)]
        focus:outline-none
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {/* Google icon placeholder */}
      <span
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[var(--surface)]
          text-[var(--text-primary)]
          text-xs
        "
      >
        G
      </span>

      <span className="text-[var(--text-secondary)]">
        Continue with Google
      </span>
    </Button>
  );
}
