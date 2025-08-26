import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white px-10 py-20">
      <div className="max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-3 gap-28 flex flex-col md:flex-row justify-between">
        {/* Left: Logo Section */}
        <div className="md:col-span-1 flex items-start">
          <Image
            src="/trangla-logo.png"
            alt="Trangla Innovations"
            width={460}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-10 md:gap-16  min-w-[80%] md:min-w-[50%] md:flex-row ">
          {/* Location Section */}
          <div className="space-y-3 text-xl font-semibold tracking-wider min-w-64 leading-relaxed font-inter">
            <p>3rd Floor, KNR Square,</p>
            <p>opp. The Platina,</p>
            <p>Gachibowli,</p>
            <p>Kondapur,</p>
            <p>Hyderabad</p>
            <p className="font-roboto-mono">+91 94948 20022</p>
          </div>

          {/* Menu + Social Wrapper (always side by side) */}
          <div className="flex w-full justify-between col-span-2 gap-10">
            {/* Menu Section */}
            <div className="text-lg whitespace-nowrap font-geist-sans-serif">
              <h3 className="font-semibold mb-5">MENU</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/dashboard">Home</Link>
                </li>
                <li>
                  <Link href="/About">About Us</Link>
                </li>
                <li>
                  <Link href="/Services">Services</Link>
                </li>
                <li>
                  <Link href="/Success">Success Stories</Link>
                </li>
                <li>
                  <Link href="/Industries">Industries</Link>
                </li>
                <li>
                  <Link href="/JoinUs">Join Us</Link>
                </li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="text-lg font-geist-mono">
              <h3 className="font-semibold mb-5">SOCIAL</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
