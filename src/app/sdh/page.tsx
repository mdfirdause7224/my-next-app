'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiJavascript,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithub,
} from 'react-icons/si';

// ✅ Reusable fade-in section with no layout shift
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
      style={{ willChange: 'opacity, transform', position: 'relative' }}
      variants={{
        hidden: { opacity: 0, transform: 'translateY(20px)' }, // subtle upward fade-in
        visible: { opacity: 1, transform: 'translateY(0px)' },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function SdhPage() {
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
            initial={{ opacity: 0, transform: 'translateY(15px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 1 }}
          >
            Software Development & Design Solutions
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, transform: 'translateY(10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            At <span className="text-blue-600 font-semibold">Trangla</span>, we turn ideas into
            impactful digital experiences crafted through innovative design, modern technology,
            and result-driven strategy.
          </motion.p>
        </section>
      </FadeInSection>

      {/* Overview */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our team of designers and developers collaborate to bring your ideas to life through
            thoughtful, client-oriented design and software development. From websites and mobile
            apps to enterprise systems, branding, UI/UX, and marketing we deliver end-to-end
            digital solutions to help your business thrive in the modern digital world.
          </p>
        </section>
      </FadeInSection>

      {/* Our Expertise */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web & Mobile Development',
                desc: 'Scalable, high-performance applications built using React, Next.js, Node.js, and cloud platforms.',
              },
              {
                title: 'Brand Identity & Graphic Design',
                desc: 'Creating distinct logos, visuals, and brand assets that communicate your identity effectively.',
              },
              {
                title: 'SEO & SMO Services',
                desc: 'Boosting visibility and reach through strategic optimization and digital marketing.',
              },
              {
                title: 'Web Application Development',
                desc: 'Responsive, feature-rich, and secure web apps tailored to meet your exact goals.',
              },
              {
                title: 'Mobile App Solutions',
                desc: 'Powerful iOS and Android apps built with React Native and Flutter for seamless performance.',
              },
              {
                title: 'Maintenance & Support',
                desc: 'Continuous optimization, updates, and 24/7 support to ensure smooth long-term success.',
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

      {/* Development Process */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Development Process</h2>
          <ol className="space-y-4 text-gray-700 leading-relaxed list-decimal list-inside text-lg">
            {[
              ['Requirement Analysis', 'Understanding your goals and business needs.'],
              ['Planning & Design', 'Crafting architecture, UI/UX designs, and user flows.'],
              ['Development', 'Building scalable, efficient, and maintainable applications.'],
              ['Testing & QA', 'Ensuring flawless performance, security, and responsiveness.'],
              ['Deployment', 'Launching on secure and optimized infrastructure.'],
              ['Maintenance & Scaling', 'Offering continuous support and future scalability.'],
            ].map(([title, desc], i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, transform: 'translateX(-20px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0px)' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="font-semibold">{title}:</span> {desc}
              </motion.li>
            ))}
          </ol>
        </section>
      </FadeInSection>

      {/* Technologies */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Technologies We Use</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                title: 'Frontend',
                items: [
                  { icon: SiReact, name: 'React.js' },
                  { icon: SiNextdotjs, name: 'Next.js' },
                  { icon: SiVuedotjs, name: 'Vue.js' },
                  { icon: SiAngular, name: 'Angular' },
                ],
              },
              {
                title: 'Backend',
                items: [
                  { icon: SiNodedotjs, name: 'Node.js' },
                  { icon: SiExpress, name: 'Express.js' },
                  { icon: SiPython, name: 'Python' },
                  { icon: SiDjango, name: 'Django' },
                  { icon: SiJavascript, name: 'JavaScript' },
                ],
              },
              {
                title: 'Mobile',
                items: [
                  { icon: SiReact, name: 'React Native' },
                  { icon: SiFlutter, name: 'Flutter' },
                  { icon: SiSwift, name: 'Swift' },
                  { icon: SiKotlin, name: 'Kotlin' },
                ],
              },
              {
                title: 'Database',
                items: [
                  { icon: SiMongodb, name: 'MongoDB' },
                  { icon: SiMysql, name: 'MySQL' },
                  { icon: SiPostgresql, name: 'PostgreSQL' },
                  { icon: SiFirebase, name: 'Firebase' },
                ],
              },
              {
                title: 'Cloud',
                items: [
                  { icon: SiAmazon, name: 'AWS' },
                  { icon: SiGooglecloud, name: 'Google Cloud' },
                ],
              },
              {
                title: 'DevOps',
                items: [
                  { icon: SiDocker, name: 'Docker' },
                  { icon: SiKubernetes, name: 'Kubernetes' },
                  { icon: SiGithub, name: 'GitHub Actions' },
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
                      <Icon className="text-xl" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Why Choose Trangla */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose Trangla</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {[
              'Experienced and multidisciplinary development team.',
              'Client-oriented process with clear communication.',
              'Performance-driven, scalable, and future-proof solutions.',
              'End-to-end service from design to deployment and beyond.',
              'Proven track record of on-time, high-quality project delivery.',
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
