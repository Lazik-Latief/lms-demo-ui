'use client';

// Wrapper card for Login / Signup forms
// Enforces LMS layout & typography

export default function FormWrapper({
  title,
  subtitle,
  children,
  className = '',
  as: Component = 'div',
}) {
  return (
    <Component
      className={`
        w-full max-w-md
        rounded-[var(--radius-lg)]
        bg-[var(--surface)]
        border border-[var(--border-subtle)]
        p-6 shadow-lg
        ${className}
      `}
    >
      {/* Title */}
      {title && (
        <h1 className="mb-1 text-2xl font-semibold text-[var(--foreground)] font-poppins">
          {title}
        </h1>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="mb-5 text-sm text-[var(--text-body)]">
          {subtitle}
        </p>
      )}

      {children}
    </Component>
  );
}
