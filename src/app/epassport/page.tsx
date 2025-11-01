'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
  SiAuth0,
} from 'react-icons/si';

// 👇 Reusable scroll animation wrapper
function FadeInSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="scroll-mt-20"
    >
      {children}
    </motion.div>
  );
}

export default function EpassportStory() {
  return (
    <div className="relative bg-gradient-to-b mt-4 from-white via-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_25%),radial-gradient(circle_at_80%_0%,#34d399,transparent_25%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-10">
        {/* Header Section */}
        <FadeInSection>
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              ePassport User Verification System
            </motion.h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A secure, end-to-end digital identity solution transforming manual document checks into an intelligent, automated verification system.
            </p>
          </div>
        </FadeInSection>

        {/* Elevator Pitch */}
        <FadeInSection>
          <section>
            <h2 className="text-2xl font-semibold mb-3">Elevator Pitch</h2>
            <p className="text-gray-600 leading-relaxed">
              We engineered a secure platform that digitizes document verification — eliminating manual review delays and ensuring fast, accurate user authentication for sensitive services.
            </p>
          </section>
        </FadeInSection>

        {/* Challenge */}
        <FadeInSection>
          <section>
            <h2 className="text-2xl font-semibold mb-3">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">
              Traditional onboarding is slow, error-prone, and resource-heavy. Manual verification of IDs and proofs of address not only delays access but also introduces security risks and administrative load.
            </p>
          </section>
        </FadeInSection>

        {/* Solution */}
        <FadeInSection>
          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed">
              We built a full-stack web application that simplifies registration, automates document validation, and empowers administrators with intuitive tools for secure verification.
            </p>
          </section>
        </FadeInSection>

        {/* Achievements */}
        <FadeInSection>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3">What We Achieved</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">1. Seamless User Onboarding</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Intuitive registration portal for user details.</li>
                  <li>Camera upload for Emirates ID, Passport, and verification selfie.</li>
                  <li>Automated ePassport ID generation and communication.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">2. Automated & Secure Verification</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Multi-step validation via Email & SMS.</li>
                  <li>Admin panel for manual checks and secure document handling.</li>
                  <li>Automatic activation for verified users.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">3. Robust Admin Control & Security</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Powerful admin dashboard with search and filters.</li>
                  <li>Encryption for all sensitive information.</li>
                  <li>Workflow for rejections and document updates.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">4. Digital Identity Output</h3>
                <p className="text-gray-600 mt-2">
                  Generated a secure, visually clear ePassport card for every verified user.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">5. Foundation for Growth</h3>
                <p className="text-gray-600 mt-2">
                  Delivered a scalable, compliant system designed for internal and future external deployments.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Technical Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
              {[
                { icon: <SiNextdotjs className="text-4xl text-gray-900" />, name: 'Next.js' },
                { icon: <SiTypescript className="text-4xl text-blue-600" />, name: 'TypeScript' },
                { icon: <SiTailwindcss className="text-4xl text-sky-500" />, name: 'Tailwind CSS' },
                { icon: <SiPostgresql className="text-4xl text-blue-700" />, name: 'Vercel Postgres' },
                { icon: <SiAuth0 className="text-4xl text-amber-500" />, name: 'NextAuth.js' },
                { icon: <SiVercel className="text-4xl text-gray-800" />, name: 'Vercel' },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center hover:shadow-md"
                >
                  {tech.icon}
                  <span className="mt-2 text-sm font-medium text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Final Quote */}
        <FadeInSection>
          <section className="text-center border-t border-gray-200 pt-10 mt-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-lg italic text-gray-700 max-w-3xl mx-auto"
            >
              “This project bridges the gap between rigorous security and exceptional user experience — delivering a future-proof digital identity solution.”
            </motion.p>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
