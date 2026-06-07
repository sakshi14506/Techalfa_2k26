export default function CertificatePage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-32">

      <h1 className="text-6xl font-bold text-center gradient-text mb-6">
        Certificate Verification
      </h1>

      <p className="text-center text-gray-400 mb-16">
        Verify Techalfa certificates using Certificate ID and Email.
      </p>

      <div className="glass rounded-3xl p-10">

        <div className="mb-6">

          <label className="block mb-2 text-gray-300">
            Certificate ID
          </label>

          <input
            type="text"
            placeholder="TECHALFA-2026-001"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

        </div>

        <div className="mb-8">

          <label className="block mb-2 text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="student@email.com"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

        </div>

        <button className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700">
          Verify Certificate
        </button>

      </div>

      {/* Demo Result */}

      <div className="glass rounded-3xl p-8 mt-10">

        <h2 className="text-2xl font-bold mb-4 text-green-400">
          Verified ✓
        </h2>

        <p className="mb-2">
          <strong>Name:</strong> Sakshi Rakhade
        </p>

        <p className="mb-2">
          <strong>Workshop:</strong> AI & Machine Learning
        </p>

        <p className="mb-2">
          <strong>Date:</strong> 15 June 2026
        </p>

        <p>
          <strong>Status:</strong> Valid Certificate
        </p>

      </div>

    </main>
  );
}