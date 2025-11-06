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
          <div className="text-lg tracking-wide min-w-64 leading-relaxed font-geist-sans-serif">
            <p className="font-mono font-semibold text-xl">ADDRESS</p>
            <p>3rd Floor, KNR Square,</p>
            <p>opp. The Platina,</p>
            <p>Gachibowli, Kondapur,</p>
            <p>Hyderabad, Telangana</p>
            <p>500032</p>
            <p className="font-geist-mono">+91 94948 20022</p>
          </div>

          {/* Menu + Social Wrapper (always side by side) */}
          <div className="flex w-full justify-between col-span-2 gap-10">
            {/* Menu Section */}
            <div className="text-lg whitespace-nowrap font-geist-sans-serif">
              <h3 className="font-semibold mb-5">MENU</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/">Home</Link>
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
                  <a
                    href="https://www.linkedin.com/company/trangla/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
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
