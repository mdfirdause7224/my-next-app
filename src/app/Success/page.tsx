'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const stories = [
  {
    title: 'ePassport Verification System',
    description:
      'A secure, end-to-end digital identity solution transforming manual verification into an intelligent, automated, and scalable digital onboarding process.',
    overview:
      'The ePassport Verification System modernizes document verification for government and enterprise platforms. It enables secure user onboarding, identity authentication, and real-time validation of official documents, ensuring efficiency, accuracy, and compliance with modern digital standards.',
    link: '/Success/epassport',
  },
  {
    title: 'Zaggle – Hotel Booking System',
    description:
      'A next-generation booking platform designed for fast, seamless, and reliable hotel reservations bringing comfort and convenience to every traveler’s journey.',
    overview:
      'Zaggle is a sleek, intuitive hotel booking platform created to help users find and reserve accommodations effortlessly. Built for speed and scalability, it allows users to search, filter, and book hotels in real-time with a premium design and smooth UX.',
    link: '/Success/zaggle',
  },
  {
    title: 'Truck Management System',
    description:
      'A fleet operations platform built for logistics companies to simplify, monitor, and optimize truck and driver management.',
    overview:
      'The Truck Management System is a powerful logistics platform designed to help companies manage trucks, drivers, routes, and loads more efficiently. It offers real-time tracking and enhanced coordination between dispatchers and drivers.',
    link: '/Success/truck',
  },
  {
    title: 'PlayAt – Sports Ground Booking App',
    description:
      'A seamless booking platform designed for athletes and enthusiasts to discover, book, and engage with sports facilities across Hyderabad.',
    overview:
      'PlayAt is a modern sports booking application that empowers users to find nearby venues, check availability, and instantly reserve time slots. It aims to make sports more accessible and enjoyable for everyone.',
    link: '/Success/playAt',
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our recent projects that showcase how we transform ideas into impactful,
          high-performing digital solutions.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {stories.map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-2xl font-semibold text-sky-600 mb-3">{item.title}</h3>
            <p className="text-gray-700 mb-5 leading-relaxed">{item.description}</p>

            <div className="mb-4">
              <div className="font-medium text-gray-800 mb-1">Project Overview:</div>
              <p className="text-gray-600 leading-relaxed">{item.overview}</p>
            </div>

            {/* View More Link */}
            <div className="mt-6">
              <Link
                href={item.link}
                className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700 group"
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

export default SuccessStories;
