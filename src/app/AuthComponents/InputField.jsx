'use client';

// TextField = reusable input field for forms
// Used in Login, Register, etc.

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
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-[var(--text-secondary)]">
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
          w-full
          rounded-xl
          border
          px-3.5
          py-2.5
          text-sm
          bg-[var(--input-bg)]
          text-[var(--text-primary)]
          border-[var(--border-subtle)]
          placeholder:text-[var(--text-muted)]
          transition-all
          duration-200
          focus:outline-none
          focus:border-[var(--accent)]
          focus:shadow-[0_0_0_3px_var(--focus-glow)]
          ${error ? 'border-red-500' : ''}
        `}
      />

      {/* Error message */}
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
