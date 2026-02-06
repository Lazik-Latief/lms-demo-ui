'use client';

import { useState } from 'react';

// Reusable password input with show / hide toggle
// Used in login, signup and other secure forms

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
    <div className={`flex flex-col gap-1.5 ${className}`}>
      
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--text-secondary)]"
        >
          {label}
        </label>
      )}

      {/* Input + show/hide toggle */}
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
            w-full
            rounded-xl
            border
            px-3.5
            py-2.5
            pr-12
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
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
          `}
        />

        {/* Show / Hide button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-xs
            font-medium
            text-[var(--text-muted)]
            transition-colors
            hover:text-[var(--text-secondary)]
            focus:outline-none
          "
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
