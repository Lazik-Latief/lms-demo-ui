export default function Divider({ text = "OR" }) {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-[var(--border-subtle)]" />
      
      <span className="px-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
        {text}
      </span>
      
      <div className="h-px flex-1 bg-[var(--border-subtle)]" />
    </div>
  );
}
