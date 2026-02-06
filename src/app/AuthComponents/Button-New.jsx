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
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    px-4
    py-2.5
    text-[15px]
    font-medium
    transition-all
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-[var(--focus-glow)]
  `;

  const variants = {
    primary: `
      bg-[var(--accent)]
      text-[#0B0B0B]
      hover:bg-[var(--accent-hover)]
      active:bg-[var(--accent-active)]
    `,
    secondary: `
      bg-[var(--surface)]
      text-[var(--text-primary)]
      border
      border-[var(--border-subtle)]
      hover:shadow-[0_0_0_2px_rgba(255,210,51,0.25)]
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
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
