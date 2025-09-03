'use client';

import { useRouter } from 'next/dist/client/components/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const router = useRouter();

  // Dropdown mock data (add more content per item if needed)
  const NAV_ITEMS = [
    { name: 'Home', href: '/dashboard', dropdown: [{ label: 'Dashboard', href: '/dashboard' }] },
    { name: 'About us', href: '/About', dropdown: [{ label: 'About Us', href: '/About' }] },
    {
      name: 'Services',
      href: '/Services',
      dropdown: [{ label: 'Services', href: '/Services' }],
    },
    {
      name: 'Success Stories',
      href: '/Success',
      dropdown: [{ label: 'Success Stories', href: '/Success' }],
    },
    {
      name: 'Industries',
      href: '/Industries',
      dropdown: [{ label: 'Industries', href: '/Industries' }],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-center bg-[#0f0f0f] z-50">
        <div className="flex justify-center py-3 w-full md:w-[75vw] relative">
          <nav className="bg-[#111111] text-white rounded-full px-6 py-3 w-[90%] max-w-7xl flex items-center justify-between shadow-md border border-[#222222] font-inter relative">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/trangla_triangle.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-base font-medium">Trangla Innovations</span>
            </div>

            {/* Centered Menu */}
            <ul className="hidden lg:flex items-center text-gray-400 text-sm font-medium flex-1 justify-center relative">
              {NAV_ITEMS.map((item, idx) => (
                <li
                  key={item.name}
                  className="relative cursor-pointer whitespace-nowrap"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Main Nav Item */}
                  <div
                    className={`relative px-4 py-4 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-[width] after:duration-200 hover:after:w-[50%] hover:text-white select-none ${
                      hoveredIndex === idx ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/JoinUs"
                className="px-5 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition whitespace-nowrap flex-shrink-0"
              >
                Join Us
              </Link>
              <Link
                href="/partner"
                className="px-5 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition whitespace-nowrap flex-shrink-0"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden flex-1 justify-end">
              <button
                className="p-2 rounded hover:bg-gray-800 focus:outline-none"
                aria-label="Open mobile menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-300"></span>
              </button>
            </div>
          </nav>

          {/* Centered Dropdown */}
          {hoveredIndex !== null && (
            <div
              className="absolute left-1/2 top-full z-50 -translate-x-1/2 w-[70%] bg-[#111111] border border-[#222222] rounded-xl shadow-lg p-4 -mt-3"
              onMouseEnter={() => setHoveredIndex(hoveredIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ul className="text-gray-300 space-y-2">
                {NAV_ITEMS[hoveredIndex].dropdown.map((drop, i) => (
                  <li key={i}>
                    <Link
                      href={drop.href}
                      className="block px-3 py-2 rounded hover:text-white hover:bg-gray-800 transition"
                    >
                      {drop.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-start justify-end">
          <div className="w-3/4 max-w-xs bg-[#111111] h-full shadow-lg flex flex-col p-6 animate-slide-in-right font-inter text-white">
            {/* Close Button */}
            <button
              className="self-end mb-6 p-2 rounded hover:bg-gray-800 focus:outline-none"
              aria-label="Close mobile menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-1.5"></span>
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5 -mt-1"></span>
            </button>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-4 text-lg font-medium text-gray-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/JoinUs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition text-center"
              >
                Join Us
              </Link>
              <Link
                href="/partner"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
