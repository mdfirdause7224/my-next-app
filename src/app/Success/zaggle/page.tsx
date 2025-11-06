'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFigma } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: 'easeOut' },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls} className="w-full">
      {children}
    </motion.div>
  );
}

export default function SuccessStoryZaggle() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 py-24 px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <FadeInSection>
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">Zaggle</span> – Hotel Booking System
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A next-generation booking platform designed for fast, seamless, and reliable hotel
              reservations bringing comfort and convenience to every traveler’s journey.
            </p>
          </div>
        </FadeInSection>

        {/* Overview */}
        <FadeInSection delay={0.2}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 p-10 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              Zaggle is a sleek, intuitive hotel booking platform created to help users find and
              reserve accommodations effortlessly. Built for speed and scalability, it allows users
              to search, filter, and book hotels in real-time, offering rich details, smart filters,
              and a seamless cross-device experience.
            </p>
          </div>
        </FadeInSection>

        {/* Challenge & Approach */}
        <FadeInSection delay={0.4}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-10 hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Challenge</h3>
              <p className="text-gray-700 leading-relaxed">
                The client needed a high-performance booking system capable of handling large-scale
                user activity while maintaining real-time availability, effortless navigation, and a
                premium design across devices.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-10 hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team adopted a component-driven architecture using React.js and TypeScript, with
                Tailwind CSS for rapid styling and Figma as the design foundation. REST APIs powered
                real-time data, while a mobile-first approach ensured seamless responsiveness and
                accessibility.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Highlights */}
        <FadeInSection delay={0.6}>
          <div className="bg-white/90 rounded-3xl shadow-lg border border-blue-100 p-10 md:p-14">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Highlights</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Implemented a complete hotel search, details, and booking workflow from Figma design
                specs.
              </li>
              <li>
                Integrated REST APIs for real-time listings, availability, and booking
                confirmations.
              </li>
              <li>
                Developed smart filters and sorting mechanisms for personalized user experiences.
              </li>
              <li>Ensured fully responsive, mobile-first layouts with blazing-fast performance.</li>
              <li>
                Enhanced UX with micro-animations, clean navigation, and robust error handling.
              </li>
              <li>Integrated secure payment flow and automated email confirmations.</li>
            </ul>
          </div>
        </FadeInSection>

        {/* Outcome */}
        <FadeInSection delay={0.8}>
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white p-10 md:p-14">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]"></div>
            <h3 className="text-2xl font-semibold mb-4 relative z-10">Outcome</h3>
            <p className="leading-relaxed text-blue-50 relative z-10">
              The platform achieved a 40% faster load time and a 25% increase in completed bookings.
              With an intuitive interface and real-time reliability, Zaggle’s booking system has set
              a new standard in seamless online hotel reservations driving both user satisfaction
              and business growth.
            </p>
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={1}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-10 text-4xl text-blue-600">
              {[
                { icon: <FaReact />, label: 'React.js' },
                { icon: <SiTypescript />, label: 'TypeScript' },
                { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
                { icon: <TbApi />, label: 'REST API' },
                { icon: <FaNodeJs />, label: 'Node.js' },
                { icon: <SiFigma />, label: 'Figma' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col items-center transition-transform"
                >
                  {item.icon}
                  <span className="text-sm text-gray-600 mt-2">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
