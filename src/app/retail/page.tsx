'use client';

import { motion } from 'framer-motion';

export default function RetailPage() {
  return (
    <div className="pt-28 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Retail & E-Commerce
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        We help retail businesses thrive online with custom e-commerce platforms and intelligent
        automation tools.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Solutions We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Online Store Development</li>
          <li>Inventory & POS Management</li>
          <li>Customer Loyalty Systems</li>
          <li>Product Analytics & Insights</li>
        </ul>
      </section>
    </div>
  );
}
