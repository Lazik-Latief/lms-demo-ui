'use client';

import { useState } from 'react';

// Password input with show / hide toggle
// Fully driven by global CSS variables

export default function PasswordInput({
  label = 'Password',
  placeholder = '••••••••',
  value,
  onChange,
  error,
  id,
  name,
  disabled = false,
  required = false,
  className = '',
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--text-subheading)]"
        >
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`
            w-full rounded-[var(--radius-md)]
            bg-[var(--input-bg)]
            px-4 py-2 pr-12 text-sm
            text-[var(--foreground)]
            placeholder-[var(--text-muted)]
            border ${error ? 'border-rose-500' : 'border-[var(--border-subtle)]'}
            focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--focus-glow)]
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
          `}
        />

        {/* Show / Hide */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[var(--accent-primary)]"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <span className="text-xs text-rose-500">
          {error}
        </span>
      )}
    </div>
  );
}
