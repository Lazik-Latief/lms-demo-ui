'use client';

// Reusable text input for LMS forms
// Uses global CSS variables (globals.css)

export default function TextField({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-[var(--text-subheading)]">
          {label}
        </label>
      )}

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          rounded-[var(--radius-md)]
          bg-[var(--input-bg)]
          px-4 py-2 text-sm
          text-[var(--foreground)]
          placeholder-[var(--text-muted)]
          border ${error ? 'border-rose-500' : 'border-[var(--border-subtle)]'}
          focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--focus-glow)]
        `}
      />

      {/* Error */}
      {error && (
        <span className="text-xs text-rose-500">
          {error}
        </span>
      )}
    </div>
  );
}
