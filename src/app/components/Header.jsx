import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h2 className="font-semibold text-lg">Student Dashboard</h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full"
          />
          <span className="font-medium">Lazik</span>
        </div>
      </div>
    </header>
  );
}
