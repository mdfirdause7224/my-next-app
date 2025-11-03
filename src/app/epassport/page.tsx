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

// Reusable animation wrapper
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function EpassportStory() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden text-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_30%,#3b82f6,transparent_25%),radial-gradient(circle_at_80%_0%,#10b981,transparent_25%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-16">
        {/* Header */}
        <FadeInSection>
          <div className="text-center space-y-4 pt-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="text-blue-600">ePassport Verification System</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A secure, end-to-end digital identity solution transforming manual verification into an
              intelligent, automated, and scalable digital onboarding process.
            </p>
          </div>
        </FadeInSection>

        {/* Overview */}
        <FadeInSection delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The ePassport Verification System modernizes document verification for government and enterprise platforms.
              It enables secure user onboarding, identity authentication, and real-time validation of official documents,
              ensuring efficiency, accuracy, and compliance with modern digital standards.
            </p>
          </div>
        </FadeInSection>

        {/* Challenge & Solution */}
        <FadeInSection delay={0.4}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Challenge</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional document verification was slow, manual, and error-prone — requiring
                human validation of IDs, passports, and residency proofs. This process increased
                administrative workload and delayed user access to key services.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                We developed a full-stack identity verification web app that digitizes registration,
                automates document validation, and streamlines administrative reviews — integrating
                multi-step authentication, real-time tracking, and secure user management.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Highlights */}
        <FadeInSection delay={0.6}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Key Highlights</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Seamless onboarding with real-time document uploads and validations.</li>
              <li>Automated ID verification using integrated API and secure workflow checks.</li>
              <li>Multi-layer authentication with email and OTP verification.</li>
              <li>Intuitive admin dashboard for reviewing and managing user documents.</li>
              <li>Encrypted data handling to ensure full compliance and privacy.</li>
              <li>Scalable architecture built for both internal and external deployments.</li>
            </ul>
          </div>
        </FadeInSection>

        {/* Outcome */}
        <FadeInSection delay={0.8}>
          <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4">Outcome</h3>
            <p className="text-blue-50 leading-relaxed">
              The ePassport Verification System replaced manual onboarding with an automated, secure, and efficient workflow.
              It improved verification accuracy, reduced processing time by 70%, and established a foundation for a
              future-ready digital identity ecosystem.
            </p>
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={1}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8 text-4xl text-blue-600">
              <div className="flex flex-col items-center">
                <SiNextdotjs />
                <span className="text-sm text-gray-600 mt-2">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript />
                <span className="text-sm text-gray-600 mt-2">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss />
                <span className="text-sm text-gray-600 mt-2">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql />
                <span className="text-sm text-gray-600 mt-2">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAuth0 />
                <span className="text-sm text-gray-600 mt-2">NextAuth.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiVercel />
                <span className="text-sm text-gray-600 mt-2">Vercel</span>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Final Note */}
        <FadeInSection delay={1.2}>
          <div className="text-center border-t border-gray-200 pt-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-lg italic text-gray-700 max-w-3xl mx-auto"
            >
              “This project bridges the gap between strict security protocols and effortless user
              experience — setting a benchmark for future-ready identity verification systems.”
            </motion.p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
