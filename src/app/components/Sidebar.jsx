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
    <aside className="w-64 bg-white shadow-lg hidden md:block">
      <div className="p-6 text-xl font-bold">🎓 LMS</div>

      <nav className="px-4 space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition
                ${active ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
              `}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}

        <button className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg w-full">
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
