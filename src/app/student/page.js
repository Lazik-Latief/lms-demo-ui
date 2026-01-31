import StatCard from "../components/StatCard";

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-black">
        Welcome back, Lazik 👋
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Enrolled Courses" value="5" />
        <StatCard title="Completed Lectures" value="24" />
        <StatCard title="Pending Lectures" value="8" />
        <StatCard title="Doubts Asked" value="3" />
      </div>

      {/* Continue Learning */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-zinc-100 mb-2">
          Continue Learning
        </h2>
        <p className="text-zinc-400">
          JavaScript Basics — Lesson 6
        </p>
        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-lg font-medium transition">
          Resume
        </button>
      </div>
    </div>
  );
}
