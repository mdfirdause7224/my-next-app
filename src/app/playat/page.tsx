'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiFigma } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: 'easeOut' },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls} className="w-full">
      {children}
    </motion.div>
  );
}

export default function SuccessStoryPlayAt() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 py-24 px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.12),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <FadeInSection>
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">PlayAt</span> – Sports Ground Booking App
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A seamless sports booking platform designed for athletes and enthusiasts to discover,
              book, and engage with sports facilities across Hyderabad built for speed, simplicity,
              and community.
            </p>
          </div>
        </FadeInSection>

        {/* Overview */}
        <FadeInSection delay={0.2}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 p-10 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              PlayAt is a modern sports ground and court booking application developed to empower
              sports lovers to find nearby venues, check availability, and instantly reserve time
              slots. With event notifications and smooth user flows, PlayAt aims to make sports more
              accessible and enjoyable for everyone.
            </p>
          </div>
        </FadeInSection>

        {/* Challenge & Approach */}
        <FadeInSection delay={0.4}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-10 hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Challenge</h3>
              <p className="text-gray-700 leading-relaxed">
                The challenge was to build a visually engaging, responsive, and high-performing
                sports booking interface that integrates seamlessly with backend APIs and provides
                real-time ground availability while maintaining a fun, user-first design.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-md border border-blue-100 p-10 hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We developed the PlayAt web UI using ReactJS with reusable, modular components for
                scalability. Collaborating closely with backend and design teams, we ensured
                seamless API integration, consistent UI/UX, and pixel-perfect visuals derived from
                Figma mockups. Additionally, we worked with WordPress developers for landing pages
                and promotional sites using Elementor and Beaver Builder.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Highlights */}
        <FadeInSection delay={0.6}>
          <div className="bg-white/90 rounded-3xl shadow-lg border border-blue-100 p-10 md:p-14">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Key Highlights</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Developed and integrated the PlayAt web UI using ReactJS.</li>
              <li>
                Built reusable components in HTML, CSS, and JavaScript for consistency and
                performance.
              </li>
              <li>Collaborated with backend developers to ensure flawless API integration.</li>
              <li>
                Worked with design teams to create responsive promotional banners and marketing
                visuals.
              </li>
              <li>
                Assisted WordPress teams in building client websites using Elementor and Beaver
                Builder.
              </li>
              <li>Ensured responsive layouts and optimized rendering for all screen sizes.</li>
            </ul>
          </div>
        </FadeInSection>

        {/* Outcome */}
        <FadeInSection delay={0.8}>
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-10 md:p-14">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,white,transparent_40%)]"></div>
            <h3 className="text-2xl font-semibold mb-4 relative z-10">Outcome</h3>
            <p className="leading-relaxed text-blue-50 relative z-10">
              PlayAt successfully launched as a go-to platform for sports enthusiasts in Hyderabad,
              improving accessibility to sports venues and boosting engagement among users. The app
              achieved smooth performance, responsive UI, and positive feedback for its simplicity
              and intuitive design strengthening PlayAt’s community-driven vision.
            </p>
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={1}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-10 text-4xl text-blue-600">
              {[
                { icon: <FaReact />, label: 'ReactJS' },
                { icon: <SiHtml5 />, label: 'HTML5' },
                { icon: <SiCss3 />, label: 'CSS3' },
                { icon: <SiJavascript />, label: 'JavaScript' },
                { icon: <FaWordpress />, label: 'WordPress' },
                { icon: <TbBrandReactNative />, label: 'React Native' },
                { icon: <SiFigma />, label: 'Figma' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col items-center transition-transform"
                >
                  {item.icon}
                  <span className="text-sm text-gray-600 mt-2">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
