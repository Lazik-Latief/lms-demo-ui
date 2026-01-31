export default function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
      <p className="text-sm text-zinc-400">{title}</p>
      <h3 className="text-2xl font-bold text-yellow-400 mt-2">
        {value}
      </h3>
    </div>
  );
}
