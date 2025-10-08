export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 text-white py-28 px-6 text-center shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            About Trangla Innovations
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Building the future of web and mobile solutions with innovation, expertise, and passion.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At <span className="font-semibold">Trangla Innovations</span>, we transform ideas into
              high-impact digital solutions. With{' '}
              <span className="font-semibold">50+ skilled professionals</span>, we specialize in{' '}
              <span className="font-semibold">Full-Stack Development</span>— covering intuitive{' '}
              <strong>Frontend</strong> experiences, robust <strong>Backend</strong> architectures,
              and complete web and mobile applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every project is driven by innovation, precision, and a deep commitment to excellence,
              ensuring our clients’ success in today’s fast-paced digital world.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700">
              <li>🚀 50+ talented engineers and designers</li>
              <li>🌍 Expertise in Web & Mobile Applications</li>
              <li>⚡ Specialized Frontend, Backend, and Full-Stack teams</li>
              <li>🤝 Strong client partnerships worldwide</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Specialized Professionals</h3>
              <p className="text-gray-700 leading-relaxed">
                Distinct squads for Frontend, Backend, and Full-Stack ensure technical mastery,
                accountability, and smoother collaboration.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Agile Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                Our lean, agile model minimizes barriers—empowering teams to deliver faster with
                greater communication and efficiency.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Built for Digital Success</h3>
              <p className="text-gray-700 leading-relaxed">
                Nimble and expert-driven, our teams consistently exceed expectations—accelerating
                innovation and launching impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At the heart of <span className="font-semibold">Trangla Innovations</span> lies a clear
          mission: to empower clients with{' '}
          <span className="font-semibold">future-ready, scalable digital products</span>. From
          concept to deployment, we build software that not only achieves business goals—but also
          delights users and sets new industry benchmarks.
        </p>
      </section>
    </main>
  );
}
