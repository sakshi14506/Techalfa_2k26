export default function OpportunitiesPage() {
  const opportunities = [
    {
      title: "Campus Ambassador Program",
      type: "Leadership",
      description:
        "Represent Techalfa in your college and help grow the community.",
      deadline: "30 June 2026",
    },
    {
      title: "Core Committee Recruitment",
      type: "Community",
      description:
        "Join the Techalfa core team and contribute to events, marketing and operations.",
      deadline: "15 July 2026",
    },
    {
      title: "Volunteer Program",
      type: "Events",
      description:
        "Volunteer in workshops, hackathons and community initiatives.",
      deadline: "Open",
    },
    {
      title: "Internship Opportunities",
      type: "Career",
      description:
        "Access internship opportunities shared by our industry partners.",
      deadline: "Rolling",
    },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-6">
        Opportunities
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Discover internships, leadership programs, volunteer positions
        and career opportunities through Techalfa.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {opportunities.map((item) => (
          <div
            key={item.title}
            className="glass rounded-3xl p-8"
          >
            <span className="text-cyan-400 font-semibold">
              {item.type}
            </span>

            <h2 className="text-3xl font-bold mt-3 mb-4">
              {item.title}
            </h2>

            <p className="text-gray-300 mb-6">
              {item.description}
            </p>

            <p className="text-pink-400 mb-6">
              Deadline: {item.deadline}
            </p>

            <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700">
              Apply Now
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}