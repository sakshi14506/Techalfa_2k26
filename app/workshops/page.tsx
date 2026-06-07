export default function WorkshopsPage() {
  const workshops = [
    {
      title: "AI & Machine Learning",
      date: "15 June 2026",
      speaker: "Industry Expert",
      description:
        "Learn AI fundamentals, machine learning models and real-world applications.",
    },
    {
      title: "Full Stack Web Development",
      date: "22 June 2026",
      speaker: "Tech Mentor",
      description:
        "Build modern web applications using React, Next.js and databases.",
    },
    {
      title: "UI/UX Design Bootcamp",
      date: "29 June 2026",
      speaker: "Design Lead",
      description:
        "Master Figma, design systems and user experience fundamentals.",
    },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-6">
        Workshops
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Explore our workshops designed to help students learn practical skills,
        gain industry exposure and build their careers.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {workshops.map((workshop) => (
          <div
            key={workshop.title}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              {workshop.title}
            </h2>

            <p className="text-cyan-400 mb-2">
              📅 {workshop.date}
            </p>

            <p className="text-purple-400 mb-4">
              🎤 {workshop.speaker}
            </p>

            <p className="text-gray-300 mb-6">
              {workshop.description}
            </p>

            <button className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700">
              Register Now
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}