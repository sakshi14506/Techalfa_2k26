export default function EventsPage() {
  const events = [
    {
      title: "Techalfa Hackathon 2026",
      date: "10 July 2026",
      type: "Hackathon",
      description:
        "Compete with innovators, solve real-world challenges and win exciting prizes.",
    },
    {
      title: "Tech Career Summit",
      date: "18 July 2026",
      type: "Conference",
      description:
        "Connect with industry experts, founders and recruiters.",
    },
    {
      title: "Coding Competition",
      date: "25 July 2026",
      type: "Competition",
      description:
        "Test your programming skills and climb the leaderboard.",
    },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-6">
        Events
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Participate in hackathons, coding competitions, networking sessions
        and technology events organized by Techalfa.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {events.map((event) => (
          <div
            key={event.title}
            className="glass rounded-3xl p-8"
          >
            <span className="text-cyan-400 font-semibold">
              {event.type}
            </span>

            <h2 className="text-2xl font-bold mt-3 mb-3">
              {event.title}
            </h2>

            <p className="text-purple-400 mb-4">
              📅 {event.date}
            </p>

            <p className="text-gray-300 mb-6">
              {event.description}
            </p>

            <button className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600">
              Register
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}