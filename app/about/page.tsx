import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-16">
        About Techalfa
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Techalfa is a student-led technology and innovation community
            focused on helping students learn, build, innovate and grow.
            Through workshops, hackathons, competitions and industry
            collaborations, we create opportunities for practical learning.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Techalfa"
            width={300}
            height={300}
          />
        </div>

      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">
            Vision
          </h3>

          <p className="text-gray-300">
            Build a thriving ecosystem where students become future innovators.
          </p>
        </div>

        <div className="glass rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">
            Mission
          </h3>

          <p className="text-gray-300">
            Provide learning, networking and career opportunities through
            technology-driven initiatives.
          </p>
        </div>

      </div>

    </main>
  );
}