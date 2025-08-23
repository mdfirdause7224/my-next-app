import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12">
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src="/trangla-logo.png" alt="" width={220} height={60} priority />
        </div>
        <ul className="flex items-center gap-10 text-lg font-medium text-gray-500">
          <li className="cursor-pointer hover:text-sky-400 hover:underline hover:underline-offset-8 transition-colors">
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
        <button className="bg-gradient-to-r from-sky-600 to-yellow-400 text-white font-semibold px-8 py-2 rounded-md shadow hover:from-orange-500 hover:to-yellow-500 transition-all">
          Partner with Us
        </button>
      </div>
    </nav>
  );
}
