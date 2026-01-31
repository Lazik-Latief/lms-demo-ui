"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Video,
  BarChart,
  HelpCircle,
  User,
  LogOut,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/student", icon: Home },
  { name: "My Courses", href: "/student/courses", icon: BookOpen },
  { name: "Lectures", href: "/student/lectures", icon: Video },
  { name: "My Progress", href: "/student/progress", icon: BarChart },
  { name: "Doubts", href: "/student/doubts", icon: HelpCircle },
  { name: "Profile", href: "/student/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-black text-zinc-300 hidden md:flex flex-col border-r border-zinc-800">
      <div className="p-6 text-xl font-bold text-yellow-400">
        🎓 LMS
      </div>

      <nav className="px-4 space-y-1 flex-1">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  active
                    ? "bg-yellow-400 text-black font-semibold"
                    : "hover:bg-zinc-800 hover:text-yellow-400"
                }
              `}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-zinc-800 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
