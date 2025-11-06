'use client';

import { useRouter, usePathname } from 'next/navigation';
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
  const pathname = usePathname(); // ✅ Added
  const dropdownRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const NAV_ITEMS = [
    {
      name: 'About Us',
      href: '/About',
      dropdown: [
        { label: 'About Us', href: '/About' },
        { label: 'Our Team', href: '/team' },
        { label: 'Leadership', href: '/leader' },
        { label: 'Careers', href: '/career' },
      ],
    },
    {
      name: 'Services',
      href: '/Services',
      dropdown: [
        { label: 'Software developer hearing', href: '/Services/software-development' },
        { label: 'Web development', href: '/Services/web-development' },
        { label: 'Mobile application development', href: '/Services/mobile-app-development' },
        { label: 'Custom site development', href: '/Services/custom-site-development' },
      ],
    },
    {
      name: 'Success Stories',
      href: '/Success',
      dropdown: [
        { label: 'ePassport User Verification System', href: '/Success/epassport' },
        { label: 'Zaggle – Hotel Booking System', href: '/Success/zaggle' },
        { label: 'Truck Management System', href: '/Success/truck' },
        { label: 'PlayAt – Sports Ground Booking App', href: '/Success/playAt' },
      ],
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { label: 'Healthcare & eHealth', href: '/Industries/healthcare' },
        { label: 'Education & E-Learning', href: '/Industries/education' },
        { label: 'Finance & FinTech', href: '/Industries/finance' },
        { label: 'Retail & E-Commerce', href: '/Industries/retail' },
        { label: 'Real Estate & PropTech', href: '/Industries/real-estate' },
        { label: 'Travel & Hospitality', href: '/Industries/travel' },
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
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const targetWidth = isScrolled && !isHovered ? '15%' : '70%';
      const targetBg = isScrolled ? 'rgba(17,17,17,0.95)' : '#111111';
      controls.start({
        width: targetWidth,
        backgroundColor: targetBg,
        transition: { duration: 0.35, ease: 'easeInOut' },
      });
    } else {
      controls.start({
        width: '70%',
        backgroundColor: '#111111',
      });
    }
  }, [isScrolled, isHovered, controls]);

  // ✅ Close dropdown & mobile menu when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 font-inter">
      <div
        className="flex justify-center py-3 w-full relative"
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
            width: '70%',
          }}
          className="text-white rounded-full px-6 p-3 w-[90%] max-w-7xl flex items-center justify-between shadow-md border border-[#222222] backdrop-blur-md transition-all duration-300"
        >
          {/* Logo + Title */}
          <div
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image src="/trangla_triangle.png" alt="Logo" width={28} height={28} />
            <motion.span
              className="text-base font-medium whitespace-nowrap overflow-hidden"
              animate={{
                opacity: isScrolled && !isHovered ? 0 : 1,
                x: isScrolled && !isHovered ? -8 : 0,
                width: isScrolled && !isHovered ? 0 : 'auto',
                transition: { duration: 1.75, ease: 'easeInOut' },
              }}
            >
              Trangla Innovations
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden lg:flex items-center text-gray-400 text-sm font-medium flex-1 justify-center gap-4 flex-nowrap overflow-hidden relative"
            animate={{
              opacity: isScrolled && !isHovered ? 0 : 1,
              y: isScrolled && !isHovered ? -8 : 0,
              pointerEvents: isScrolled && !isHovered ? 'none' : 'auto',
              transition: { duration: 1.75, ease: 'easeInOut' },
            }}
          >
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.name}
                className="relative select-none group flex-shrink-0"
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

                {/* Dropdown */}
                <div
                  className={`fixed left-1/2 top-[80px] -translate-x-1/2 w-[850px] bg-[#111111] rounded-2xl shadow-lg border border-[#222222] p-6 transition-all duration-300 z-50 ${
                    activeDropdown === idx
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                    {splitIntoColumns(item.dropdown, 2).map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-3">
                        {column.map((drop, i) => (
                          <Link
                            key={i}
                            href={drop.href}
                            className="group flex flex-col px-4 py-2.5 rounded-xl hover:bg-[#1a1a1a] transition-all whitespace-nowrap"
                          >
                            <span className="text-gray-200 group-hover:text-white text-base font-semibold tracking-wide whitespace-nowrap">
                              {drop.label}
                            </span>
                            <span className="text-sm text-gray-500 group-hover:text-gray-400 mt-1 whitespace-nowrap">
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/JoinUs"
              className="border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition overflow-hidden"
              style={{
                opacity: isScrolled && !isHovered ? 0 : 1,
                width: isScrolled && !isHovered ? 0 : 'auto',
                padding: isScrolled && !isHovered ? '0px' : '0.5rem 1.25rem',
                transform: isScrolled && !isHovered ? 'translateY(-8px)' : 'translateY(0)',
                pointerEvents: isScrolled && !isHovered ? 'none' : 'auto',
                transition: 'all 0.25s ease-in-out',
              }}
            >
              Join Us
            </Link>

            <Link
              href="/partner"
              className="px-5 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition flex-shrink-0"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-start justify-end">
            <div className="w-3/4 max-w-xs bg-[#111111] h-full shadow-lg flex flex-col p-6 font-inter text-white relative overflow-hidden">
              <button
                className="self-end mb-6 p-2 rounded hover:bg-gray-800"
                aria-label="Close mobile menu"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-1.5"></span>
                <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5 -mt-1"></span>
              </button>

              {/* Main Menu */}
              <motion.ul
                className={`flex flex-col gap-4 text-lg font-medium text-gray-300 transition-transform duration-300 ${
                  activeDropdown === null ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                {NAV_ITEMS.map((item, idx) => (
                  <li key={item.name}>
                    {['About Us', 'Services', 'Success Stories', 'Industries'].includes(
                      item.name
                    ) ? (
                      <button
                        onClick={() => setActiveDropdown(idx)}
                        className="block w-full text-left px-2 py-2 hover:text-white hover:bg-gray-800 rounded-md transition"
                      >
                        {item.name} →
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-2 hover:text-white hover:bg-gray-800 rounded-md transition"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </motion.ul>

              {/* Submenu (Services / Success Stories) */}
              {activeDropdown !== null && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-[#111111] p-6 flex flex-col"
                >
                  <button
                    onClick={() => setActiveDropdown(null)}
                    className="text-sm text-gray-400 hover:text-white mb-4 flex items-center gap-1"
                  >
                    ← Back
                  </button>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {NAV_ITEMS[activeDropdown].name}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {NAV_ITEMS[activeDropdown].dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        href={drop.href}
                        onClick={() => setMobileMenuOpen(false)}
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
                </motion.div>
              )}

              {/* Bottom CTA Buttons */}
              <div className="mt-auto flex flex-col gap-3 pt-6">
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
