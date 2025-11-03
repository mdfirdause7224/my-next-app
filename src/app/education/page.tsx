'use client';

import { motion } from 'framer-motion';

export default function EducationPage() {
  return (
    <div className="pt-28 px-6 md:px-20">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
        Education & E-Learning
      </motion.h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        We build modern EdTech solutions that make learning more engaging, accessible, and scalable across devices.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Solutions We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Learning Management Systems (LMS)</li>
          <li>Online Course & Certification Platforms</li>
          <li>Virtual Classrooms</li>
          <li>Student Analytics Dashboards</li>
        </ul>
      </section>
    </div>
  );
}
