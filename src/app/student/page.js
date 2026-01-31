import StatCard from "../components/StatCard";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back, Lazik 👋</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Enrolled Courses" value="5" />
        <StatCard title="Completed Lectures" value="24" />
        <StatCard title="Pending Lectures" value="8" />
        <StatCard title="Doubts Asked" value="3" />
      </div>

      {/* Continue Learning */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Continue Learning</h2>
        <p>📘 JavaScript Basics – Lesson 6</p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
          Resume
        </button>
      </div>
    </div>
  );
}
