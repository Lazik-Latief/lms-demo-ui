// Divider used between authentication methods

export default function Divider({ text = 'OR' }) {
  return (
    <div className="my-4 flex items-center gap-3">
      <div className="h-px flex-1 bg-[var(--border-subtle)]" />
      <span className="text-xs text-[var(--text-muted)]">
        {text}
      </span>
      <div className="h-px flex-1 bg-[var(--border-subtle)]" />
    </div>
  );
}
