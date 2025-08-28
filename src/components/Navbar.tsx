'use client';

import { useRouter } from 'next/dist/client/components/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

  const router = useRouter();

  return (
    <>
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-center bg-[#0f0f0f] z-50">
        <div className="flex justify-center py-3 w-full md:w-[75vw]">
          <nav className="bg-[#111111] text-white rounded-full px-6 py-3 w-[90%] max-w-7xl flex items-center justify-between shadow-md border border-[#222222] font-inter">
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
              <Link href="/dashboard">
                <li className="cursor-pointer hover:text-white transition">Home</li>
              </Link>
              <Link href="/About">
                <li className="cursor-pointer hover:text-white transition">About us</li>
              </Link>
              <Link href="/Services">
                <li className="cursor-pointer hover:text-white transition">Services</li>
              </Link>
              <Link href="/Success">
                <li className="cursor-pointer hover:text-white transition">Success Stories</li>
              </Link>
              <Link href="/Industries">
                <li className="cursor-pointer hover:text-white transition">Industries</li>
              </Link>
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
                className="px-5 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition"
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
              <li>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Success"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/Industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition"
                >
                  Industries
                </Link>
              </li>
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
                className="px-5 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition text-center"
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
