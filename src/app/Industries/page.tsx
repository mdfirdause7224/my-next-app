'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const industries = [
  {
    title: 'Healthcare & eHealth',
    description:
      'We design secure, scalable, and user-focused healthcare solutions that simplify patient engagement, telemedicine, and medical data management.',
    link: '/Industries/healthcare',
  },
  {
    title: 'Education & E-Learning',
    description:
      'From virtual classrooms to interactive learning platforms, we craft digital education tools that enhance learning experiences and accessibility.',
    link: '/Industries/education',
  },
  {
    title: 'Finance & FinTech',
    description:
      'We deliver robust financial applications that ensure security, compliance, and a seamless user experience for modern digital banking and fintech innovation.',
    link: '/Industries/finance',
  },
  {
    title: 'Retail & E-Commerce',
    description:
      'Empowering brands with fast, scalable, and conversion-driven eCommerce platforms optimized for engagement and streamlined customer journeys.',
    link: '/Industries/retail',
  },
  {
    title: 'Real Estate & PropTech',
    description:
      'We create property management, listing, and real-time analytics platforms that transform how buyers, sellers, and agents interact digitally.',
    link: '/Industries/real-estate',
  },
  {
    title: 'Travel & Hospitality',
    description:
      'We build intuitive travel and booking systems that enhance guest experience, simplify operations, and drive customer loyalty.',
    link: '/Industries/travel',
  },
];

const Industries: React.FC = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We collaborate with businesses across diverse sectors, crafting tailored digital solutions that
          meet industry-specific needs and empower growth.
        </p>
      </div>

      {/* Grid of industries */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {industries.map((industry) => (
          <div
            key={industry.title}
            className="bg-neutral-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">{industry.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{industry.description}</p>
            </div>

            {/* View More Link */}
            <div>
              <Link
                href={industry.link}
                className="inline-flex items-center text-sky-400 font-medium hover:text-sky-300 group"
              >
                <span>View More</span>
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
