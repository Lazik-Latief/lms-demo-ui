'use client';

// Reusable button component for LMS
// Supports primary & secondary variants
// Uses global CSS variables defined in globals.css

export default function Button({
  children,
  type = 'button',
  variant = 'primary', // primary | secondary
  disabled = false,
  className = '',
  onClick,
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-[15px] font-medium transition-all focus:outline-none focus:ring-2';

  const variants = {
    primary: `
      bg-[var(--color-primary)]
      text-[var(--color-primary-text)]
      hover:bg-[var(--color-primary-hover)]
      active:bg-[var(--color-primary-active)]
      focus:ring-[var(--color-focus)]
    `,
    secondary: `
      bg-[var(--color-card)]
      text-white
      border border-[var(--color-border)]
      hover:shadow-[0_0_0_3px_rgba(255,210,51,0.25)]
      focus:ring-[var(--color-focus)]
    `,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
