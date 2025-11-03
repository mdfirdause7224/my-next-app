'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaHeartbeat, FaHospitalAlt, FaChartLine, FaLaptopMedical } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

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

export default function HealthcareCaseStudy() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20 bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Digital Transformation in Healthcare & eHealth
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Building smarter, secure, and patient-first healthcare ecosystems through digital innovation.
          </p>
        </div>
      </FadeInSection>

      {/* ===== CLIENT CONTEXT ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Client Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our client — a mid-sized healthcare organization — aimed to modernize its patient management
            system and improve accessibility of healthcare services for both patients and medical staff.
            With a growing patient base and outdated infrastructure, the client needed a unified, data-driven
            platform to streamline care delivery and optimize administrative operations.
          </p>
        </section>
      </FadeInSection>

      {/* ===== CHALLENGES ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              'Fragmented patient data across multiple systems.',
              'Limited interoperability between departments.',
              'Manual workflows causing delays in patient care.',
              'Compliance risks around data privacy and HIPAA standards.',
              'Lack of real-time analytics and operational visibility.',
              'Poor user experience for both doctors and patients.',
            ].map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-blue-50 rounded-2xl border border-blue-100"
              >
                <p className="text-gray-700">{point}</p>
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
            We developed a comprehensive <strong>eHealth ecosystem</strong> that integrates clinical,
            operational, and patient engagement functionalities under one secure digital platform.
            The solution leveraged modern cloud architecture, advanced analytics, and an intuitive
            user experience to deliver measurable outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <FaHospitalAlt className="text-blue-600 text-4xl" />,
                title: 'Hospital Management System',
                desc: 'Digitized scheduling, billing, and clinical workflows for better efficiency.',
              },
              {
                icon: <FaLaptopMedical className="text-blue-600 text-4xl" />,
                title: 'Telemedicine Platform',
                desc: 'Enabled remote consultations and real-time doctor-patient interaction.',
              },
              {
                icon: <FaHeartbeat className="text-blue-600 text-4xl" />,
                title: 'EHR Integration',
                desc: 'Centralized electronic health records accessible across departments.',
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl" />,
                title: 'Analytics Dashboard',
                desc: 'Real-time insights into patient trends, resource use, and outcomes.',
              },
              {
                icon: <MdHealthAndSafety className="text-blue-600 text-4xl" />,
                title: 'Security & Compliance',
                desc: 'End-to-end encryption and HIPAA/GDPR compliance built into every layer.',
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
            <li>Reduced patient registration time by 45% through automation.</li>
            <li>Achieved 99.9% uptime with cloud-based architecture.</li>
            <li>Improved doctor-patient interaction by 60% via telemedicine.</li>
            <li>Enhanced operational visibility with real-time data insights.</li>
            <li>Fully compliant with HIPAA and regional healthcare standards.</li>
            <li>Enabled scalability for 5x more users without infrastructure changes.</li>
          </ul>
        </section>
      </FadeInSection>

      {/* ===== TESTIMONIAL / INSIGHT ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg">
            “Their team helped us modernize our entire hospital workflow. From patient data management
            to teleconsultations, every process became faster, smarter, and compliant.”
          </blockquote>
          <p className="mt-4 font-semibold text-blue-700">— Head of IT, Healthcare Organization</p>
        </section>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection>
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Want to Build Your Own Digital Healthcare Solution?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Let’s collaborate to design, develop, and deploy a secure, scalable, and patient-focused
            healthcare platform that transforms how care is delivered.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition">
              Let’s Connect
            </button>
          </Link>
        </section>
      </FadeInSection>
    </div>
  );
}
