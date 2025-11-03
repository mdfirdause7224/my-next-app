'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaReact, FaNodeJs, FaTruck } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFigma } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, delay } });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={controls} className="w-full">
      {children}
    </motion.div>
  );
}

export default function SuccessStoryTruckManagement() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <FadeInSection>
          <div className="text-center pt-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Truck Management System</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A fleet operations platform built for SwiftLogistics to simplify, monitor, and
              optimize truck and driver management.
            </p>
          </div>
        </FadeInSection>

        {/* Overview */}
        <FadeInSection delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              The Truck Management System is a powerful fleet operations platform designed to help
              logistics companies manage trucks, drivers, routes, and loads more efficiently. It
              centralizes all operational data into a single intuitive interface, offering real-time
              tracking and enhanced coordination between dispatchers and drivers for smooth
              logistics management.
            </p>
          </div>
        </FadeInSection>

        {/* Challenge & Approach */}
        <FadeInSection delay={0.4}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Challenge</h3>
              <p className="text-gray-700">
                SwiftLogistics needed a scalable and reliable fleet management system that could
                offer real-time visibility, optimize truck routes, and streamline dispatcher-driver
                communication — all while ensuring a user-friendly interface and fast system
                performance.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Approach</h3>
              <p className="text-gray-700">
                We developed a responsive and interactive front-end using ReactJS and Tailwind CSS,
                integrating real-time data via REST APIs for live truck status and route updates.
                The design emphasized clarity, speed, and usability — empowering logistics teams to
                make informed decisions in real time.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Highlights */}
        <FadeInSection delay={0.6}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Highlights</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Developed a modern, responsive front-end for the Fleet Management platform using
                ReactJS.
              </li>
              <li>
                Collaborated with backend teams to ensure smooth API integration and efficient data
                handling.
              </li>
              <li>
                Implemented real-time truck tracking for enhanced transparency and operational
                control.
              </li>
              <li>Created reusable and scalable UI components for long-term maintainability.</li>
              <li>
                Improved dispatcher efficiency with intuitive workflows and live route optimization
                features.
              </li>
              <li>
                Enhanced user experience with optimized loading performance and visual consistency.
              </li>
            </ul>
          </div>
        </FadeInSection>

        {/* Outcome */}
        <FadeInSection delay={0.8}>
          <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4">Outcome</h3>
            <p className="text-blue-50 leading-relaxed">
              The Truck Management System transformed SwiftLogistics’ fleet operations by providing
              real-time insights, reducing communication delays, and improving route efficiency. It
              led to faster decision-making, optimized delivery times, and higher customer
              satisfaction — setting a new standard for logistics efficiency.
            </p>
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={1}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8 text-4xl text-blue-600">
              <div className="flex flex-col items-center">
                <FaReact />
                <span className="text-sm text-gray-600 mt-2">ReactJS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript />
                <span className="text-sm text-gray-600 mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss />
                <span className="text-sm text-gray-600 mt-2">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <TbApi />
                <span className="text-sm text-gray-600 mt-2">REST API</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs />
                <span className="text-sm text-gray-600 mt-2">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFigma />
                <span className="text-sm text-gray-600 mt-2">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <FaTruck />
                <span className="text-sm text-gray-600 mt-2">Fleet Ops</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
