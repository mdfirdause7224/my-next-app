'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const NAV_ITEMS = [
    { name: 'Home', href: '/dashboard' },
    { name: 'About us', href: '/About' },
    { name: 'Services', href: '/Services' },
    { name: 'Success Stories', href: '/Success' },
    { name: 'Industries', href: '/Industries' },
  ];

  const DROPDOWN = (
    <div className="grid grid-cols-3 gap-6">
      {NAV_ITEMS.map((item) => (
        <div key={item.name}>
          <h4 className="text-white font-semibold mb-2">{item.name}</h4>
          <ul className="text-gray-300 space-y-1">
            <li>
              <Link href={item.href} className="hover:text-white transition">
                Go to {item.name}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-center bg-[#0f0f0f] z-50">
        <div className="flex justify-center py-3 w-full md:w-[75vw]">
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

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-gray-400 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.name}
                  onMouseEnter={() => setActiveMenu(item.name)}
                  className="relative cursor-pointer whitespace-nowrap"
                >
                  <span
                    className={`relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:h-[2px] after:w-0 after:bg-sky-500 after:transition-[width] after:duration-200 hover:after:w-[70%] ${
                      activeMenu === item.name ? 'text-white after:w-[70%]' : 'hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/JoinUs"
                className="px-5 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Join Us
              </Link>
              <Link
                href="/partner"
                className="px-5 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-sm hover:from-sky-600 hover:to-blue-700 transition"
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

            {/* Mega Dropdown */}
            {activeMenu && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[85%] bg-[#111111] rounded-xl border border-[#222222] shadow-lg p-6 transition"
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="grid grid-cols-3 gap-6">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.name}>
                      <h4 className="text-white font-semibold mb-2">{item.name}</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>
                          <Link href={item.href} className="hover:text-white transition">
                            Go to {item.name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </nav>
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
                className="px-5 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-sm hover:from-sky-600 hover:to-blue-700 transition text-center"
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
