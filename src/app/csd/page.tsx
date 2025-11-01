'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Reusable animation wrapper with delayed activation for smoother page load
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: false });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inView) controls.start('visible');
      else controls.start('hidden');
    }, 150); // Delay fixes initial page “jump” effect
    return () => clearTimeout(timeout);
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function CsdPage() {
  return (
    <motion.main
      initial={false}
      className="pt-28 px-6 lg:px-20 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-x-hidden"
    >
      {/* Header */}
      <FadeInSection>
        <section className="text-center max-w-5xl mx-auto mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Custom Site Development
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            Transform your ideas into exceptional digital experiences through custom website design and development made just for your brand.
          </motion.p>
        </section>
      </FadeInSection>

      {/* Overview */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our <span className="font-semibold">Custom Site Development</span>{' '}
            approach is focused on building distinctive, scalable, and
            high-performing websites that reflect your brand identity. We don’t
            use pre-made templates — every pixel, line of code, and animation is
            purposefully created to deliver an experience that is both
            functional and visually captivating across all devices.
          </p>
        </section>
      </FadeInSection>

      {/* Key Features */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            What We Deliver
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Design & Layout',
                desc: 'Pixel-perfect layouts and brand-specific aesthetics designed to impress your target audience.',
              },
              {
                title: 'Optimized Performance',
                desc: 'Fast, SEO-friendly, and performance-tuned sites that deliver exceptional loading speed.',
              },
              {
                title: 'Responsive Experiences',
                desc: 'Seamless interaction and visuals across desktop, tablet, and mobile devices.',
              },
              {
                title: 'Scalable Architecture',
                desc: 'Modular and future-ready code that grows as your business expands.',
              },
              {
                title: 'CMS Integration',
                desc: 'Headless CMS solutions like Strapi, Sanity, or WordPress for easy content control.',
              },
              {
                title: 'Custom Functionality',
                desc: 'From booking tools to dashboards — we bring your specific needs to life.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Tech Stack */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              ['Frontend', 'Next.js, React.js, TypeScript, Tailwind CSS'],
              ['Backend', 'Node.js, Express.js, REST APIs, GraphQL'],
              ['Database', 'MongoDB, PostgreSQL, Firebase, MySQL'],
              ['Deployment', 'Vercel, AWS, Google Cloud, Netlify'],
              ['CMS & Integrations', 'Strapi, Sanity, WordPress, Headless CMS'],
              ['Tools', 'GitHub, Figma, Docker, Cloudflare'],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow p-5 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-blue-600 mb-2">{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Process */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Development Process
          </h2>
          <ol className="space-y-4 text-gray-700 leading-relaxed list-decimal list-inside text-lg">
            {[
              ['Requirement Analysis', 'Understanding your goals, brand, and target audience.'],
              ['Wireframe & Design', 'Creating user-centered UI/UX prototypes and design flows.'],
              ['Development', 'Building with Next.js, TypeScript, and Tailwind CSS for performance and flexibility.'],
              ['Testing', 'Ensuring speed, security, and cross-browser compatibility.'],
              ['Launch', 'Deploying seamlessly on reliable and secure infrastructure.'],
              ['Maintenance', 'Ongoing updates and optimization for long-term success.'],
            ].map(([title, desc], i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="font-semibold">{title}:</span> {desc}
              </motion.li>
            ))}
          </ol>
        </section>
      </FadeInSection>

      {/* Why Choose Us */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {[
              'Fully custom-coded websites — no templates or themes.',
              'Built with cutting-edge frameworks: Next.js, TypeScript, Tailwind CSS.',
              'Performance-first, SEO-friendly, and scalable by design.',
              'Collaborative process with transparent communication.',
              'End-to-end delivery with post-launch support.',
            ].map((point, i) => (
              <motion.li
                key={point}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-start"
              >
                <span className="text-blue-600 font-bold mr-2">✓</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </section>
      </FadeInSection>
    </motion.main>
  );
}
