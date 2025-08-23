import Image from 'next/image';

export default function Navbar() {
  return (
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
        <button className="ml-auto lg:ml-0 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-6 md:px-8 py-2 rounded-md shadow hover:from-orange-500 hover:to-yellow-500 transition-all whitespace-nowrap text-sm md:text-base">
          Partner with Us
        </button>
      </div>
    </nav>
  );
}
