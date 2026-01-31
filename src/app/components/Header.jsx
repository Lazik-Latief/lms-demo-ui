import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-yellow-400">
        Student Dashboard
      </h2>

      <div className="flex items-center gap-5">
        {/* Notification */}
        <div className="relative text-zinc-300 hover:text-yellow-400 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-xs px-1.5 rounded-full font-semibold">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full border-2 border-yellow-400"
            alt="profile"
          />
          <span className="text-sm font-medium text-zinc-200">
            Lazik
          </span>
        </div>
      </div>
    </header>
  );
}
