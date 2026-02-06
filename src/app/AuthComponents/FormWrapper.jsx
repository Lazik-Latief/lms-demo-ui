'use client';

// Wrapper for auth forms (login / signup)

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
        w-full
        max-w-md
        rounded-2xl
        border
        border-[var(--border-subtle)]
        bg-[var(--surface)]
        p-6
        sm:p-8
        shadow-lg
        shadow-black/40
        backdrop-blur-sm
        transition-all
        ${className}
      `}
    >
      {title && (
        <h2 className="mb-1 text-xl font-semibold text-[var(--text-primary)]">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mb-6 text-sm text-[var(--text-muted)]">
          {subtitle}
        </p>
      )}

      {children}
    </Component>
  );
}
