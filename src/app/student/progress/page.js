export default function ProgressPage() {
  const progress = [
    { course: "JavaScript", value: 60 },
    { course: "React", value: 30 },
  ];

  return (
    <div className="space-y-4">
      {progress.map((p) => (
        <div key={p.course} className="bg-white p-5 rounded-xl shadow">
          <p className="font-medium">{p.course}</p>
          <div className="w-full bg-gray-200 rounded h-2 mt-2">
            <div
              className="bg-blue-600 h-2 rounded"
              style={{ width: `${p.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
