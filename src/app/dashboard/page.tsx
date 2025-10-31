'use client';

import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-28 p-8">
      <div className="relative bg-transparent rounded-2xl p-4 w-[800px] h-[400px] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-[90%] h-[2px] bg-sky-400 rounded-tr-full"></div>
        <div className="absolute top-0 right-0 h-[80%] w-[2px] bg-sky-400 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-[90%] h-[2px] bg-sky-400 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 h-[80%] w-[2px] bg-sky-400 rounded-tl-full"></div>
        <Image
          src="/trangla-logo.png"
          alt="Logo"
          width={600}
          height={300}
          className="object-contain rounded-xl z-10"
        />
      </div>
    </div>
  );
}
