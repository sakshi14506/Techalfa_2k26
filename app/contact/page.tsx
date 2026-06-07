export default function ContactPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-6">
        Contact Us
      </h1>

      <p className="text-center text-gray-400 mb-16">
        Have questions, collaboration proposals or event inquiries?
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Contact Information
          </h2>

          <p className="mb-4">
            📧 techalfa.community@gmail.com
          </p>

          <p className="mb-4">
            📱 +91 XXXXX XXXXX
          </p>

          <p>
            📍 Maharashtra, India
          </p>

        </div>

        <div className="glass rounded-3xl p-8">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/5 mb-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/5 mb-4"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-xl bg-white/5 mb-4"
          />

          <button className="w-full py-4 rounded-xl bg-purple-600">
            Send Message
          </button>

        </div>

      </div>

    </main>
  );
}