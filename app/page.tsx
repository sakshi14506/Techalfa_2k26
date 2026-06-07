import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#05031A] text-white">

      {/* HERO */}

      <section className="min-h-screen max-w-7xl mx-auto px-6 flex items-center pt-24">

        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

          <div>

            <h1 className="text-7xl md:text-8xl font-black mb-6 gradient-text">
              TECHALFA
            </h1>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Beyond Learning,
              <br />
              Beyond Limits
            </h2>

            <p className="text-xl text-gray-300 max-w-xl">
              A student-driven technology and innovation community empowering
              future developers, designers, innovators and leaders.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

  <Link
    href="/contact"
    className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
  >
    Join Community
  </Link>

  <Link
    href="/events"
    className="px-8 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
  >
    Explore Events
  </Link>

</div>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[120px]"></div>

            <Image
              src="/logo.png"
              alt="Techalfa"
              width={350}
              height={350}
              className="relative z-10"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">500+</h3>
            <p className="text-gray-400 mt-3">Members</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-purple-400">25+</h3>
            <p className="text-gray-400 mt-3">Workshops</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-pink-400">10+</h3>
            <p className="text-gray-400 mt-3">Collaborations</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-3">Events</p>
          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-5xl mx-auto px-6 py-28 text-center">

        <h2 className="text-5xl font-bold mb-10">
          About Techalfa
        </h2>

        <p className="text-xl text-gray-300 leading-10">
          Techalfa is a student-led technology and innovation community focused
          on empowering learners through workshops, hackathons, competitions,
          networking opportunities and industry collaborations.
        </p>

      </section>

      {/* EVENTS */}

      <section className="max-w-7xl mx-auto px-6 py-28">

        <h2 className="text-5xl font-bold text-center mb-16">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              AI & ML Workshop
            </h3>

            <p className="text-gray-400">
              Learn Artificial Intelligence and Machine Learning.
            </p>

            <Link
  href="/contact"
  className="inline-block mt-6 bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-700 transition"
>
  Register
</Link>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Web Development Bootcamp
            </h3>

            <p className="text-gray-400">
              Build modern web applications.
            </p>
<Link
  href="/contact"
  className="inline-block mt-6 bg-cyan-500 text-black px-5 py-2 rounded-xl hover:scale-105 transition"
>
  Register
</Link>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Hackathon 2026
            </h3>

            <p className="text-gray-400">
              Solve real-world challenges and win prizes.
            </p>

            <Link
  href="/contact"
  className="inline-block mt-6 bg-pink-500 px-5 py-2 rounded-xl hover:scale-105 transition"
>
  Register
</Link>
          </div>

        </div>

      </section>

      {/* LEADERSHIP */}

      <section className="max-w-7xl mx-auto px-6 py-28">

        <h2 className="text-5xl font-bold text-center mb-16">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="glass rounded-3xl p-10 text-center">

            <Image
              src="/team/rajeev.jpg"
              alt="Rajeev Tiwari"
              width={140}
              height={140}
              className="rounded-full object-cover mx-auto mb-6 border-4 border-cyan-400"
            />

            <h3 className="text-3xl font-bold">
              Rajeev Tiwari
            </h3>

            <p className="text-cyan-400 mt-2">
              President
            </p>

          </div>

          <div className="glass rounded-3xl p-10 text-center">

            <Image
              src="/team/sakshi.jpg"
              alt="Sakshi Rakhade"
              width={140}
              height={140}
              className="rounded-full object-cover mx-auto mb-6 border-4 border-pink-400"
            />

            <h3 className="text-3xl font-bold">
              Sakshi Rakhade
            </h3>

            <p className="text-pink-400 mt-2">
              Vice President
            </p>

          </div>

        </div>

      </section>

      {/* COLLABORATIONS */}

      <section className="max-w-7xl mx-auto px-6 py-28">

        <h2 className="text-5xl font-bold text-center mb-16">
          Collaborations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Widesoftech Pvt Ltd",
            "Priyadarshini College of Engineering",
            "Nagpur Institute of Technology",
            "Data Council Nagpur",
            "Vision Computer",
            "Intermeet"
          ].map((item) => (
            <div
              key={item}
              className="glass rounded-2xl p-8 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-6 py-28 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Join The Community
        </h2>

        <p className="text-xl text-gray-400 mb-10">
          Learn, build, network and grow with Techalfa.
        </p>

        <button className="px-10 py-4 rounded-xl bg-purple-600 hover:bg-purple-700">
          Join Now
        </button>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <h3 className="text-3xl font-bold gradient-text">
            TECHALFA
          </h3>

          <p className="text-gray-400 mt-4">
            Beyond Learning • Beyond Limits
          </p>

          <p className="text-gray-500 mt-6 text-sm">
            © 2026 Techalfa. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}