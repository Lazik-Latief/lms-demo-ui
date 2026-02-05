'use client';

import Button from '../../components/forms/Button';

// Secondary auth button (Google)
// Styled using global LMS variables

export default function GoogleAuthButton({
  onClick,
  disabled = false,
}) {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        w-full flex items-center justify-center gap-2
        rounded-[var(--radius-md)]
        bg-[var(--surface)]
        border border-[var(--border-subtle)]
        text-[var(--foreground)]
        hover:shadow-[0_0_20px_var(--hover-glow)]
      "
    >
      <span className="text-base">🟢</span>
      Continue with Google
    </Button>
  );
}
