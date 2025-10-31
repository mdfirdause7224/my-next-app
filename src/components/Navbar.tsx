'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const NAV_ITEMS = [
    {
      name: 'Home',
      href: '/dashboard',
      dropdown: [
        { label: 'Home', href: '/dashboard' },
        { label: 'Latest Updates', href: '/updates' },
        { label: 'Newsroom', href: '/newsroom' },
      ],
    },
    {
      name: 'About Us',
      href: '/About',
      dropdown: [
        { label: 'About Us', href: '/About' },
        { label: 'Our Team', href: '/team' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      name: 'Services',
      href: '/Services',
      dropdown: [
        { label: 'Services', href: '/Services' },
        { label: 'Echo Cancellation', href: '/echo-cancellation' },
        { label: 'Beamforming', href: '/beamforming' },
        { label: 'Voice Enhancement', href: '/voice-enhancement' },
        { label: 'Speaker Separation', href: '/speaker-separation' },
      ],
    },
    {
      name: 'Success Stories',
      href: '/Success',
      dropdown: [
        { label: 'Success Stories', href: '/Success' },
        { label: 'Automotive Voice AI', href: '/automotive' },
        { label: 'Healthcare Voice Analysis', href: '/healthcare' },
        { label: 'Smart Device Integrations', href: '/smart-devices' },
      ],
    },
    {
      name: 'Industries',
      href: '/Industries',
      dropdown: [
        { label: 'Industries', href: '/Industries' },
        { label: 'Consumer Electronics', href: '/electronics' },
        { label: 'Telecom & BPO', href: '/bpo' },
        { label: 'Healthcare', href: '/healthcare' },
        { label: 'Software & SaaS', href: '/software' },
      ],
    },
  ];

  const splitIntoColumns = <T,>(items: T[], columns: number): T[][] => {
    const perColumn = Math.ceil(items.length / columns);
    return Array.from({ length: columns }, (_, i) =>
      items.slice(i * perColumn, (i + 1) * perColumn)
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // ✅ Only change background on scroll, no shrink or scale
      controls.start({
        backgroundColor: scrolled ? 'rgba(17,17,17,0.95)' : '#111111',
        transition: { duration: 0.3, ease: 'easeInOut' },
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 font-inter">
      <div
        className="flex justify-center py-3 w-full md:w-[75vw] relative"
        ref={dropdownRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveDropdown(null);
        }}
      >
        <motion.nav
          animate={controls}
          initial={{
            backgroundColor: '#111111',
          }}
          className="text-white rounded-full px-6 p-3 w-[90%] max-w-7xl flex items-center justify-between shadow-md border border-[#222222] backdrop-blur-md transition-all duration-300"
        >
          {/* ✅ Logo + Title (Title hides on scroll) */}
          <div
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image src="/trangla_triangle.png" alt="Logo" width={28} height={28} />
            <motion.span
              className="text-base font-medium whitespace-nowrap"
              animate={{
                opacity: isScrolled && !isHovered ? 0 : 1,
                x: isScrolled && !isHovered ? -10 : 0,
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
            >
              Trangla Innovations
            </motion.span>
          </div>

          {/* ✅ Center Navigation */}
          <motion.ul
            className="hidden lg:flex items-center text-gray-400 text-sm font-medium flex-1 justify-center relative"
            animate={{
              opacity: isScrolled && !isHovered ? 0 : 1,
              y: isScrolled && !isHovered ? -10 : 0,
              pointerEvents: isScrolled && !isHovered ? 'none' : 'auto',
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
          >
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.name}
                className="relative select-none group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className={`relative px-4 py-4 cursor-pointer transition-colors ${
                    activeDropdown === idx ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[50%] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                      activeDropdown === idx ? 'scale-x-100' : ''
                    }`}
                  />
                </div>

                {/* ✅ Dropdown */}
                <div
                  className={`fixed left-1/2 top-[80px] -translate-x-1/2 w-[800px] bg-[#111111] rounded-2xl shadow-lg border border-[#222222] p-6 transition-all duration-300 z-50 ${
                    activeDropdown === idx
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {splitIntoColumns(item.dropdown, 3).map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-2">
                        {column.map((drop, i) => (
                          <Link
                            key={i}
                            href={drop.href}
                            className="group flex flex-col px-3 py-2 rounded-md hover:bg-[#1a1a1a] transition-all"
                          >
                            <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                              {drop.label}
                            </span>
                            <span className="text-xs text-gray-500 mt-1">
                              Learn more about {drop.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>

          {/* ✅ Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              animate={{
                opacity: isScrolled && !isHovered ? 0 : 1,
                y: isScrolled && !isHovered ? -10 : 0,
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
            >
              <Link
                href="/JoinUs"
                className="px-5 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Join Us
              </Link>
            </motion.div>
            <Link
              href="/partner"
              className="px-5 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <div className="flex lg:hidden flex-1 justify-end">
            <button
              className="p-2 rounded hover:bg-gray-800"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-300"></span>
            </button>
          </div>
        </motion.nav>

        {/* ✅ Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-start justify-end">
            <div className="w-3/4 max-w-xs bg-[#111111] h-full shadow-lg flex flex-col p-6 font-inter text-white">
              <button
                className="self-end mb-6 p-2 rounded hover:bg-gray-800"
                aria-label="Close mobile menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-1.5"></span>
                <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5 -mt-1"></span>
              </button>

              <ul className="flex flex-col gap-4 text-lg font-medium text-gray-300">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-2 hover:text-white hover:bg-gray-800 rounded-md transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

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
      </div>
    </header>
  );
}
