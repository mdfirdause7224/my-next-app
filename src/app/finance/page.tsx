'use client';

import { motion } from 'framer-motion';

export default function FinancePage() {
  return (
    <div className="pt-28 px-6 md:px-20">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
        Finance & FinTech
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Our FinTech solutions combine innovation, security, and scalability to empower modern banking and finance.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Solutions We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Digital Banking Platforms</li>
          <li>Payment Gateway Integrations</li>
          <li>Investment & Portfolio Management</li>
          <li>Data Security & Compliance Tools</li>
        </ul>
      </section>
    </div>
  );
}
