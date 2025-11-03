'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiMysql,
  SiGithub,
  SiVercel,
  SiDocker,
  SiCloudflare,
  SiJest,
  SiCypress,
  SiGooglecloud,
  SiAmazon,
  SiNetlify,
  SiPostman,
} from 'react-icons/si';

// Fade-in reusable wrapper
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: false });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inView) controls.start('visible');
      else controls.start('hidden');
    }, 150);
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

export default function WdPage() {
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
            Web Development Services
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            Empowering your business with high-performance, scalable, and visually striking web
            applications built for growth.
          </motion.p>
        </section>
      </FadeInSection>

      {/* Overview */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our <span className="font-semibold">Web Development Services</span> are dedicated to
            crafting high-performing, user-focused digital solutions that enhance brand value and
            boost conversions. We focus on clean code, modern technologies, and smooth UI/UX that
            scales effortlessly across all platforms.
          </p>
        </section>
      </FadeInSection>

      {/* What We Do */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Our Web Development Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Website Development',
                desc: 'Unique, responsive, and brand-aligned websites built for performance and scalability.',
              },
              {
                title: 'Next.js Applications',
                desc: 'High-speed, SEO-friendly apps powered by server-side rendering and static generation.',
              },
              {
                title: 'E-commerce Solutions',
                desc: 'Secure, intuitive online stores with smooth checkout and inventory management.',
              },
              {
                title: 'CMS Development',
                desc: 'Flexible content solutions using Strapi, Sanity, or WordPress with seamless integrations.',
              },
              {
                title: 'Landing Pages & Marketing Sites',
                desc: 'Conversion-optimized landing pages designed to engage and convert effectively.',
              },
              {
                title: 'Web Performance Optimization',
                desc: 'Enhancing speed, accessibility, and SEO to maximize user satisfaction and retention.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Technology Stack with Icons */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                title: 'Frontend',
                items: [
                  { icon: SiNextdotjs, name: 'Next.js' },
                  { icon: SiReact, name: 'React.js' },
                  { icon: SiTypescript, name: 'TypeScript' },
                  { icon: SiTailwindcss, name: 'Tailwind CSS' },
                ],
              },
              {
                title: 'Backend',
                items: [
                  { icon: SiNodedotjs, name: 'Node.js' },
                  { icon: SiExpress, name: 'Express.js' },
                  { icon: SiGraphql, name: 'GraphQL' },
                ],
              },
              {
                title: 'Databases',
                items: [
                  { icon: SiMongodb, name: 'MongoDB' },
                  { icon: SiPostgresql, name: 'PostgreSQL' },
                  { icon: SiFirebase, name: 'Firebase' },
                  { icon: SiMysql, name: 'MySQL' },
                ],
              },
              {
                title: 'Tools & Platforms',
                items: [
                  { icon: SiGithub, name: 'GitHub' },
                  { icon: SiVercel, name: 'Vercel' },
                  { icon: SiDocker, name: 'Docker' },
                  { icon: SiCloudflare, name: 'Cloudflare' },
                ],
              },
              {
                title: 'Testing',
                items: [
                  { icon: SiJest, name: 'Jest' },
                  { icon: SiCypress, name: 'Cypress' },
                  { icon: SiPostman, name: 'Postman' },
                ],
              },
              {
                title: 'Deployment',
                items: [
                  { icon: SiVercel, name: 'Vercel' },
                  { icon: SiAmazon, name: 'AWS' },
                  { icon: SiGooglecloud, name: 'Google Cloud' },
                  { icon: SiNetlify, name: 'Netlify' },
                ],
              },
            ].map((stack) => (
              <motion.div
                key={stack.title}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow p-5 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-blue-600 mb-3">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.items.map(({ icon: Icon, name }) => (
                    <li key={name} className="flex items-center space-x-2">
                      <Icon className="text-xl text-gray-800" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Process */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Development Process</h2>
          <ol className="space-y-4 text-gray-700 leading-relaxed list-decimal list-inside text-lg">
            {[
              ['Discovery', 'Understanding client needs, goals, and audience.'],
              ['Design', 'Creating wireframes, UI/UX mockups, and user flows.'],
              [
                'Development',
                'Building responsive and optimized websites using modern frameworks.',
              ],
              ['Testing', 'Ensuring performance, accessibility, and security across all browsers.'],
              ['Launch', 'Smooth deployment on reliable hosting environments.'],
              ['Maintenance', 'Continuous updates and technical support post-launch.'],
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
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose Us</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {[
              'Fully custom-coded — no themes or templates.',
              'Modern, scalable, and SEO-friendly architecture.',
              'Responsive, high-performance web experiences.',
              'Transparent communication throughout development.',
              'Post-launch support and performance optimization.',
            ].map((point) => (
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
