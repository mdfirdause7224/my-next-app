'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Reusable animation section with smooth in-view transitions
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

export default function MadPage() {
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
            Mobile Application Development
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            Crafting seamless, high-performance mobile experiences powered by{' '}
            <span className="text-blue-600 font-semibold">React Native</span>,{' '}
            <span className="text-blue-600 font-semibold">Flutter</span>,{' '}
            <span className="text-blue-600 font-semibold">Swift</span>, and{' '}
            <span className="text-blue-600 font-semibold">Kotlin</span>. We build apps that connect
            brands with their audiences—fast, reliable, and scalable.
          </motion.p>
        </section>
      </FadeInSection>

      {/* Overview */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our <span className="font-semibold">Mobile Application Development</span> service
            delivers tailor-made mobile solutions that help businesses thrive in the digital space.
            From intuitive UI/UX design to backend integration and post-launch support, we focus on
            delivering smooth, scalable, and high-performing apps for both iOS and Android
            platforms.
          </p>
        </section>
      </FadeInSection>

      {/* Key Services */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">What We Deliver</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Native App Development',
                desc: 'High-performance Android and iOS apps built with Swift, Kotlin, and platform-native tools.',
              },
              {
                title: 'Cross-Platform Development',
                desc: 'Code once, deploy everywhere with frameworks like React Native and Flutter.',
              },
              {
                title: 'Custom UI/UX Design',
                desc: 'User-first interfaces designed to engage and retain your audience.',
              },
              {
                title: 'Backend & API Integration',
                desc: 'Seamless connections to APIs, databases, and real-time cloud services.',
              },
              {
                title: 'Maintenance & Support',
                desc: 'Post-launch updates, performance monitoring, and feature enhancements.',
              },
              {
                title: 'App Store Optimization (ASO)',
                desc: 'Boost visibility and downloads with optimized app store strategies.',
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

      {/* Technology Stack */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              ['Cross-Platform', 'React Native, Flutter'],
              ['Native', 'Swift (iOS), Kotlin (Android)'],
              ['Backend', 'Node.js, Django, Firebase, GraphQL, REST APIs'],
              ['Cloud', 'AWS, Google Cloud, Azure, Firebase Hosting'],
              ['Database', 'MongoDB, PostgreSQL, Firestore, SQLite'],
              ['DevOps & Tools', 'GitHub, Docker, Fastlane, CI/CD pipelines'],
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
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Development Process</h2>
          <ol className="space-y-4 text-gray-700 leading-relaxed list-decimal list-inside text-lg">
            {[
              ['Research & Planning', 'Understanding your users, competitors, and business goals.'],
              ['UI/UX Design', 'Creating intuitive user interfaces and experiences.'],
              ['Development', 'Coding scalable and efficient apps using the right tech stack.'],
              ['Testing', 'Ensuring stability, performance, and cross-device compatibility.'],
              ['Deployment', 'Publishing on App Store and Google Play for global reach.'],
              ['Maintenance', 'Continuous monitoring, updates, and feature improvements.'],
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
              'Expert mobile developers with deep native and cross-platform experience.',
              'Performance-first approach ensuring speed and reliability.',
              'Pixel-perfect UI and responsive app design.',
              'Agile development with transparent communication.',
              'Integration with APIs, AI, and real-time databases.',
              'End-to-end support from idea to post-launch updates.',
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
