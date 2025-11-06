'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaBuilding, FaHome, FaSearchLocation, FaChartLine, FaVrCardboard } from 'react-icons/fa';
import { MdRealEstateAgent } from 'react-icons/md';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function RealEstateCaseStudy() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20 bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Real Estate & Property Tech Transformation
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Empowering real estate businesses with digital platforms that simplify property
            management, enhance sales, and transform the buyer experience.
          </p>
        </div>
      </FadeInSection>

      {/* ===== CLIENT OVERVIEW ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Client Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our client, a fast-growing real estate firm, aimed to move beyond traditional property
            listings and bring digital innovation into how customers explore, inquire, and book
            properties. They needed a unified platform that integrates property data, sales
            processes, and client communications all while offering immersive digital experiences.
          </p>
        </section>
      </FadeInSection>

      {/* ===== CHALLENGES ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              'Manual property listings leading to inconsistent data updates.',
              'Limited visibility for customers searching specific property types.',
              'Complex sales workflows and disconnected client interactions.',
              'No virtual experience or digital walkthroughs for remote buyers.',
              'Difficulty tracking leads and managing agent performance.',
              'Lack of analytics to measure sales and marketing efficiency.',
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm"
              >
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* ===== SOLUTION ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We built a comprehensive <strong>Real Estate Digital Platform</strong> that helps
            property developers, agents, and customers seamlessly manage every stage from listing to
            booking. Our solution integrates data analytics, automation, and immersive technology to
            enhance transparency and boost conversions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <FaBuilding className="text-blue-600 text-4xl" />,
                title: 'Property Listing Portal',
                desc: 'An intelligent search and filter system to help users find properties instantly.',
              },
              {
                icon: <FaVrCardboard className="text-blue-600 text-4xl" />,
                title: 'Virtual 3D Tours',
                desc: 'Interactive VR and 360° property tours providing a real-world walkthrough experience.',
              },
              {
                icon: <MdRealEstateAgent className="text-blue-600 text-4xl" />,
                title: 'CRM for Agents',
                desc: 'Centralized CRM with lead tracking, automated follow-ups, and deal analytics.',
              },
              {
                icon: <FaSearchLocation className="text-blue-600 text-4xl" />,
                title: 'Smart Location Mapping',
                desc: 'Integrated Google Maps APIs and geolocation-based property recommendations.',
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl" />,
                title: 'Data Analytics Dashboard',
                desc: 'Real-time insights into sales, inquiries, and customer trends.',
              },
              {
                icon: <FaHome className="text-blue-600 text-4xl" />,
                title: 'Booking & Inquiry Management',
                desc: 'Seamless process for booking visits, submitting offers, and managing inquiries.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* ===== IMPACT ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-5xl mx-auto bg-blue-50 p-10 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Impact & Results</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
            <li>Increased property inquiry conversion rate by 65%.</li>
            <li>Reduced agent workload by 40% through CRM automation.</li>
            <li>Boosted customer engagement with immersive 3D tours.</li>
            <li>Improved listing accuracy and data consistency by 95%.</li>
            <li>Enhanced decision-making using analytics and reports.</li>
            <li>Scaled to support 10,000+ concurrent property listings.</li>
          </ul>
        </section>
      </FadeInSection>

      {/* ===== TESTIMONIAL ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg">
            “The digital platform completely transformed our operations. Our agents now close deals
            faster, and customers love the virtual tours. It’s a real game-changer for our
            business.”
          </blockquote>
          <p className="mt-4 font-semibold text-blue-700">Managing Director, Real Estate Group</p>
        </section>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection>
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Property Tech Platform?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Partner with us to create smart, scalable, and visually stunning digital solutions for
            your real estate business from listings to live tours.
          </p>
          <Link href="/partner">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition">
              Let’s Connect
            </button>
          </Link>
        </section>
      </FadeInSection>
    </div>
  );
}
