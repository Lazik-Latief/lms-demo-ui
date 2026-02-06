"use client";

// Reusable checkbox component for forms
// Works for login, signup, settings, or any form

export default function Checkbox({
  label,
  checked,
  onChange,
  id,
  name,
  disabled = false,
  className = "",
}) {
  return (
    <label
      htmlFor={id}
      className={`
        flex
        items-start
        gap-2.5
        select-none
        text-sm
        text-[var(--text-secondary)]
        transition-opacity
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {/* Native checkbox input */}
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="
          mt-0.5
          h-4
          w-4
          rounded
          border
          border-[var(--border-subtle)]
          bg-[var(--input-bg)]
          text-[var(--accent)]
          transition-all
          duration-150
          focus:outline-none
          focus:ring-2
          focus:ring-[var(--accent)]
          focus:ring-offset-2
          focus:ring-offset-[var(--background)]
        "
      />

      {/* Checkbox label */}
      <span className="leading-snug">
        {label}
      </span>
    </label>
  );
}
