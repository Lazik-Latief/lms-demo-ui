export default function CoursesPage() {
  const courses = [
    { title: "JavaScript", progress: 60 },
    { title: "React Basics", progress: 30 },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {courses.map((course) => (
        <div key={course.title} className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-500">
            Progress: {course.progress}%
          </p>
          <button className="mt-3 text-blue-600">View Lectures →</button>
        </div>
      ))}
    </div>
  );
}
