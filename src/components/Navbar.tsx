'use client';

import { useRouter } from 'next/dist/client/components/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = React.useState(false);

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
      <nav className="bg-white shadow-sm py-3 w-full overflow-x-auto font-inter">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-12 gap-y-2">
          {/* Logo */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Image
              src="/trangla-logo.png"
              alt="Trangla Logo"
              width={180}
              height={48}
              priority
              className="h-12 w-auto max-w-full"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-base md:text-lg font-medium text-gray-500 flex-wrap whitespace-nowrap font-inter">
            <Link href="/dashboard">
              <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
                About us
              </li>
            </Link>
            <Link href="/Services">
              <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
                Services
              </li>
            </Link>
            <Link href="/Success">
              <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
                Success Stories
              </li>
            </Link>
            <Link href="/Industries">
              <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
                Industries
              </li>
            </Link>
            <Link href="/JoinUs">
              <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
                Join us
              </li>
            </Link>
          </ul>

          {/* Desktop CTA */}
          <button
            className="ml-auto lg:ml-0 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold px-6 md:px-8 py-2 rounded-md shadow hover:from-sky-500 hover:to-blue-600 transition-all whitespace-nowrap text-sm md:text-base hidden lg:inline-block font-geist-sans-serif"
            onClick={() => {
              setPartnerModalOpen(true);
              router.push('/partner');
            }}
          >
            Partner with Us
          </button>

          {/* Mobile menu button */}
          <div className="flex lg:hidden flex-1 justify-end">
            <button
              className="p-2 rounded hover:bg-gray-100 focus:outline-none"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg flex flex-col p-6 animate-slide-in-right font-geist-mono">
            {/* Close Button */}
            <button
              className="self-end mb-6 p-2 rounded hover:bg-gray-100 focus:outline-none"
              aria-label="Close mobile menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-gray-700 rotate-45 translate-y-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-y-1.5 -mt-1"></span>
            </button>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700 font-inter">
              <li>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Success"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/Industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/JoinUs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors"
                >
                  Join us
                </Link>
              </li>
            </ul>

            {/* Mobile CTA */}
            <button
              className="mt-8 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow hover:from-sky-500 hover:to-blue-600 transition-all whitespace-nowrap text-base font-geist-sans-serif"
              onClick={() => {
                setMobileMenuOpen(false);
                setPartnerModalOpen(true);
                router.push('/partner');
              }}
            >
              Partner with Us
            </button>
          </div>
        </div>
      )}
    </>
  );
}
