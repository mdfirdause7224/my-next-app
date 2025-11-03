'use client';

import { motion } from 'framer-motion';

export default function RealEstatePage() {
  return (
    <div className="pt-28 px-6 md:px-20">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
        Real Estate & Property Tech
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Digitalizing the real estate industry with innovative property management and visualization tools.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Solutions We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Property Listing Portals</li>
          <li>Virtual Tour Applications</li>
          <li>Booking & Inquiry Management</li>
          <li>CRM Solutions for Realtors</li>
        </ul>
      </section>
    </div>
  );
}
