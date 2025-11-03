'use client';

import { motion } from 'framer-motion';

export default function HealthcarePage() {
  return (
    <div className="pt-28 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Healthcare & eHealth
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        We empower healthcare providers with smart digital solutions that streamline patient
        management, telemedicine, and hospital operations.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Solutions We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Hospital & Clinic Management Systems</li>
          <li>Telemedicine Applications</li>
          <li>Electronic Health Record (EHR) Platforms</li>
          <li>Health Data Analytics Dashboards</li>
        </ul>
      </section>
    </div>
  );
}
