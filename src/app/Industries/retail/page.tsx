'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaShoppingCart, FaWarehouse, FaChartLine, FaUsers, FaMobileAlt } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

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

export default function RetailCaseStudy() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20 bg-white text-gray-800">
      {/* ===== HERO ===== */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Retail & E-Commerce Digital Transformation
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Enabling retailers to thrive in the digital era through intelligent automation,
            omnichannel commerce, and data-driven insights.
          </p>
        </div>
      </FadeInSection>

      {/* ===== CLIENT CONTEXT ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Client Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our client, a mid-sized retail brand with both physical and online presence, wanted to
            unify their inventory, sales, and customer engagement systems. They aimed to scale
            rapidly, enhance user experience, and gain real-time visibility into sales performance
            across channels.
          </p>
        </section>
      </FadeInSection>

      {/* ===== CHALLENGES ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              'Disconnected online and offline sales data.',
              'Inefficient inventory tracking across multiple stores.',
              'Manual billing and POS operations causing errors.',
              'Poor customer retention due to lack of loyalty programs.',
              'Limited insights into product performance and user behavior.',
              'High cart abandonment and slow checkout experiences.',
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
            We built a custom <strong>omnichannel retail management platform</strong> integrating
            inventory control, POS systems, e-commerce storefront, and customer engagement modules.
            The solution provides a seamless shopping experience while enabling business
            intelligence through advanced analytics.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <FaShoppingCart className="text-blue-600 text-4xl" />,
                title: 'E-Commerce Platform',
                desc: 'Modern online store with mobile-first design and smooth checkout.',
              },
              {
                icon: <FaWarehouse className="text-blue-600 text-4xl" />,
                title: 'Inventory Management',
                desc: 'Centralized stock tracking with automated re-ordering.',
              },
              {
                icon: <MdPayment className="text-blue-600 text-4xl" />,
                title: 'Smart POS System',
                desc: 'Unified POS for in-store and online sales with real-time sync.',
              },
              {
                icon: <FaUsers className="text-blue-600 text-4xl" />,
                title: 'Customer Loyalty Program',
                desc: 'Reward system that boosts engagement and repeat purchases.',
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl" />,
                title: 'Analytics Dashboard',
                desc: 'Live sales metrics and predictive insights for better decisions.',
              },
              {
                icon: <FaMobileAlt className="text-blue-600 text-4xl" />,
                title: 'Mobile Integration',
                desc: 'Responsive and app-ready solutions for on-the-go shoppers.',
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
            <li>35% increase in online conversions within 3 months.</li>
            <li>Unified stock management reduced out-of-stock issues by 50%.</li>
            <li>Customer retention improved through loyalty rewards integration.</li>
            <li>Checkout time reduced by 40% with faster payment flow.</li>
            <li>Enhanced decision-making through real-time analytics dashboards.</li>
            <li>Scalable infrastructure ready for new product lines and regions.</li>
          </ul>
        </section>
      </FadeInSection>

      {/* ===== TESTIMONIAL ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg">
            “We went from manual store operations to a fully automated, data-driven retail system.
            Our sales and customer engagement have grown beyond expectations.”
          </blockquote>
          <p className="mt-4 font-semibold text-blue-700">CEO, Retail Brand Client</p>
        </section>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection>
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Experience?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Let’s build intelligent, scalable, and customer-centric e-commerce solutions that drive
            growth and deliver unmatched shopping experiences.
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
