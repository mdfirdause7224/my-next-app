'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaHotel, FaPlaneDeparture, FaGlobeAsia, FaUsers, FaChartLine } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';

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

export default function TravelPage() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20 bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Digital Innovation in Travel & Hospitality
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Redefining travel experiences with smart digital solutions for booking, engagement, and
            customer delight.
          </p>
        </div>
      </FadeInSection>

      {/* ===== CLIENT OVERVIEW ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Client Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our client a growing global travel management company aimed to deliver seamless travel
            experiences and optimize their hospitality operations. They wanted to simplify bookings,
            automate workflows, and enhance guest engagement with a unified digital ecosystem.
          </p>
        </section>
      </FadeInSection>

      {/* ===== CHALLENGES ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              'Manual hotel booking and payment systems causing inefficiencies.',
              'Fragmented guest data and lack of personalization.',
              'Difficulty managing multi-destination travel itineraries.',
              'Low engagement and retention among travelers.',
              'Limited online visibility and inconsistent user experiences.',
              'Need for real-time insights to improve business decisions.',
            ].map((challenge, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-blue-50 rounded-2xl border border-blue-100"
              >
                <p className="text-gray-700">{challenge}</p>
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
            We built a unified digital platform that integrates booking, travel management, and
            guest engagement. From dynamic hotel reservations to real-time itinerary updates and
            personalized loyalty programs, the solution delivers a consistent and delightful
            experience across web and mobile.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <FaHotel className="text-blue-600 text-4xl" />,
                title: 'Hotel Booking & Reservation System',
                desc: 'Streamlined multi-property booking with secure payment and confirmation.',
              },
              {
                icon: <FaPlaneDeparture className="text-blue-600 text-4xl" />,
                title: 'Travel Management Platform',
                desc: 'Centralized itinerary and expense tracking for travelers and agents.',
              },
              {
                icon: <MdTravelExplore className="text-blue-600 text-4xl" />,
                title: 'Tour Experience App',
                desc: 'Interactive mobile app for tours, attractions, and location-based recommendations.',
              },
              {
                icon: <FaUsers className="text-blue-600 text-4xl" />,
                title: 'Guest Engagement Tools',
                desc: 'Integrated review, feedback, and loyalty modules to boost retention.',
              },
              {
                icon: <FaGlobeAsia className="text-blue-600 text-4xl" />,
                title: 'Multi-language Global Platform',
                desc: 'Supported multi-currency and localization for global travelers.',
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl" />,
                title: 'Analytics Dashboard',
                desc: 'Real-time reporting and insights for business and marketing optimization.',
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

      {/* ===== IMPACT & RESULTS ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-5xl mx-auto bg-blue-50 p-10 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Impact & Results</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
            <li>Online bookings increased by 65% within the first quarter of launch.</li>
            <li>Customer satisfaction improved by 40% through better personalization.</li>
            <li>Automated workflows reduced manual workload by 50% for hotel staff.</li>
            <li>Introduced global access with multi-currency and multi-language support.</li>
            <li>Real-time analytics empowered better business and marketing decisions.</li>
            <li>Achieved 99.8% system uptime through scalable cloud infrastructure.</li>
          </ul>
        </section>
      </FadeInSection>

      {/* ===== TESTIMONIAL ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg">
            “Our digital transformation journey became effortless with this team. The new travel
            platform helped us improve engagement, automate operations, and deliver exceptional
            guest experiences.”
          </blockquote>
          <p className="mt-4 font-semibold text-blue-700">Director of Operations, Travel Company</p>
        </section>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection>
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Want to Elevate Your Travel Business?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Let’s craft immersive, customer-first digital experiences that transform how people
            travel, book, and connect with destinations worldwide.
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
