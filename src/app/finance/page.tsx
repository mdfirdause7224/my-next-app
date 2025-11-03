'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  FaCreditCard,
  FaPiggyBank,
  FaChartLine,
  FaLock,
  FaMobileAlt,
  FaCoins,
} from 'react-icons/fa';

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

export default function FinanceCaseStudy() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20 bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Innovation in Finance & FinTech
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Empowering the financial world through digital transformation, data intelligence, and
            secure automation.
          </p>
        </div>
      </FadeInSection>

      {/* ===== CLIENT OVERVIEW ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Client Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our client, a rapidly growing FinTech company, aimed to modernize its digital banking
            and payment infrastructure to enhance customer experience, security, and performance.
            The goal was to design a unified financial ecosystem that offers seamless transactions,
            real-time insights, and compliance with evolving regulations.
          </p>
        </section>
      </FadeInSection>

      {/* ===== CHALLENGES ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              'Legacy systems causing transaction delays and downtime.',
              'Limited scalability for increasing digital transactions.',
              'Complex compliance with financial regulations (KYC, AML, PCI-DSS).',
              'Security concerns with customer data protection.',
              'Fragmented user experience across multiple digital platforms.',
              'High operational costs due to manual financial processes.',
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
            We engineered a modern <strong>FinTech platform</strong> that unified digital banking,
            payments, and investment operations within a secure, scalable, and compliant system. Our
            approach combined cloud-native infrastructure, intelligent automation, and intuitive UX
            design to help the client drive customer trust and financial growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <FaCreditCard className="text-blue-600 text-4xl" />,
                title: 'Digital Banking Suite',
                desc: 'Launched a multi-feature banking system with instant fund transfers and account insights.',
              },
              {
                icon: <FaPiggyBank className="text-blue-600 text-4xl" />,
                title: 'Automated Payments Gateway',
                desc: 'Enabled secure, real-time transactions integrated with multiple payment networks.',
              },
              {
                icon: <FaCoins className="text-blue-600 text-4xl" />,
                title: 'Investment Management',
                desc: 'Developed tools for real-time portfolio tracking and risk assessment.',
              },
              {
                icon: <FaLock className="text-blue-600 text-4xl" />,
                title: 'Data Security & Compliance',
                desc: 'Implemented advanced encryption and compliance monitoring (KYC, AML).',
              },
              {
                icon: <FaMobileAlt className="text-blue-600 text-4xl" />,
                title: 'Mobile-First Experience',
                desc: 'Delivered a unified mobile and web experience for banking on-the-go.',
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl" />,
                title: 'Analytics Dashboard',
                desc: 'Empowered financial leaders with real-time analytics and revenue forecasts.',
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
            <li>Processed 3x more transactions with 99.99% uptime.</li>
            <li>Increased customer retention by 40% through improved UX.</li>
            <li>Reduced fraud cases by 70% using real-time security analytics.</li>
            <li>Achieved full compliance with KYC, AML, and PCI-DSS standards.</li>
            <li>Cut operational costs by 35% with workflow automation.</li>
            <li>Delivered a 50% faster onboarding experience for new customers.</li>
          </ul>
        </section>
      </FadeInSection>

      {/* ===== TESTIMONIAL ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg">
            “The new FinTech platform not only strengthened our digital banking capabilities but
            also gave our customers a seamless and secure financial experience.”
          </blockquote>
          <p className="mt-4 font-semibold text-blue-700">— CTO, FinTech Organization</p>
        </section>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection>
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Looking to Transform Your Financial Ecosystem?
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Partner with us to design secure, compliant, and intelligent FinTech solutions that
            redefine the future of finance.
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
