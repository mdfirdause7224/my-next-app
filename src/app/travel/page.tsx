'use client';

import { motion } from 'framer-motion';

export default function TravelPage() {
  return (
    <div className="pt-28 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Travel & Hospitality
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        We craft digital travel and hospitality solutions that enhance experiences and streamline
        operations.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Solutions We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Hotel Booking & Reservation Systems</li>
          <li>Travel Management Platforms</li>
          <li>Tourism Experience Apps</li>
          <li>Guest Review & Feedback Tools</li>
        </ul>
      </section>
    </div>
  );
}
