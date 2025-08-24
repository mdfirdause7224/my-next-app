'use client';

import Image from 'next/image';
import React from 'react';
import PartnerModal from './PartnerModal';

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

  return (
    <>
      <nav className="bg-white shadow-sm py-3 w-full overflow-x-auto">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-12 gap-y-2">
          <div className="flex items-center gap-1 flex-shrink-0">
            <Image
              src="/trangla-logo.png"
              alt=""
              width={180}
              height={48}
              priority
              className="h-12 w-auto max-w-full"
            />
          </div>
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-base md:text-lg font-medium text-gray-500 flex-wrap whitespace-nowrap">
            <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
              About us
            </li>
            <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
              Services
            </li>
            <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
              Success Stories
            </li>
            <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
              Industries
            </li>
            <li className="cursor-pointer hover:text-sky-600 hover:underline hover:underline-offset-8 transition-colors">
              Join us
            </li>
          </ul>
          <button
            className="ml-auto lg:ml-0 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-6 md:px-8 py-2 rounded-md shadow hover:from-orange-500 hover:to-yellow-500 transition-all whitespace-nowrap text-sm md:text-base hidden lg:inline-block"
            onClick={() => setPartnerModalOpen(true)}
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
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg flex flex-col p-6 animate-slide-in-right">
            <button
              className="self-end mb-6 p-2 rounded hover:bg-gray-100 focus:outline-none"
              aria-label="Close mobile menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-gray-700 rotate-45 translate-y-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-y-1.5 -mt-1"></span>
            </button>
            <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700">
              <li className="px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors">
                Home
              </li>
              <li className="px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors">
                About us
              </li>
              <li className="px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors">
                Services
              </li>
              <li className="px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors">
                Success Stories
              </li>
              <li className="px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors">
                Industries
              </li>
              <li className="px-2 py-2 cursor-pointer hover:text-sky-600 hover:bg-gray-50 hover:underline hover:underline-offset-8 transition-colors">
                Join us
              </li>
            </ul>
            <button
              className="mt-8 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-6 py-2 rounded-md shadow hover:from-orange-500 hover:to-yellow-500 transition-all whitespace-nowrap text-base"
              onClick={() => {
                setMobileMenuOpen(false);
                setPartnerModalOpen(true);
              }}
            >
              Partner with Us
            </button>
          </div>
        </div>
      )}
      {/* PartnerModal */}
      <PartnerModal open={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />
    </>
  );
}
