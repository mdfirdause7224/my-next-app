'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function JoinUsPage() {
  return (
    <div className="pt-28 bg-white text-gray-800 font-geist-sans-serif">
      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 px-8 md:px-20 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Join Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Great ideas come to life when passionate people collaborate. At{' '}
          <span className="font-semibold text-blue-600">Trangla Innovations</span>, we’re building
          the future — one idea at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"
        />
      </section>

      <div className="p-8 md:px-20">
        {/* ====== LIFE AT TRANGLA ====== */}
        <FadeInSection delay={0.2}>
          <section className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 text-center">
              Life at Trangla
            </h2>
            <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              We foster an environment where creativity, collaboration, and continuous learning
              thrive. Every idea is valued, every opinion matters, and every team member contributes
              to our shared mission — delivering world-class digital solutions that inspire
              progress.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Innovation First',
                  desc: 'We embrace experimentation, creativity, and bold ideas to craft meaningful solutions.',
                },
                {
                  title: 'Collaboration Always',
                  desc: 'We succeed as one — working together across disciplines and teams.',
                },
                {
                  title: 'Continuous Learning',
                  desc: 'We grow through curiosity, mentorship, and the exploration of modern technologies.',
                },
                {
                  title: 'Impact Driven',
                  desc: 'Every project is an opportunity to create meaningful change for our clients and users.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl p-6 bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all"
                >
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* ====== OUR TEAM ====== */}
        <FadeInSection delay={0.3}>
          <section className="max-w-5xl mx-auto mb-20 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our people are the heart of everything we do. With a team of skilled engineers,
              designers, and strategists, we turn complex challenges into seamless digital
              experiences. At Trangla, you&apos;ll find a culture that values excellence, respects
              individuality, and celebrates success together.
            </p>
          </section>
        </FadeInSection>

        {/* ====== STAY CONNECTED ====== */}
        <FadeInSection delay={0.4}>
          <section className="max-w-5xl mx-auto mb-20 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Stay Connected</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re not currently hiring — but we&apos;re always excited to connect with
              passionate professionals who want to make a difference. If you&apos;d like to be
              considered for future opportunities or collaborations, feel free to reach out or share
              your portfolio with us.
            </p>

            <a
              href="mailto:suhel.syed@trangla.com"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-gray-100 transition"
            >
              Send Your Resume
            </a>
          </section>
        </FadeInSection>

        {/* ====== FINAL SECTION ====== */}
        <FadeInSection delay={0.5}>
          <section className="max-w-4xl mx-auto text-center mt-10 mb-20">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Let’s Build the Future, Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trangla Innovations isn&apos;t just a workplace — it&apos;s a community of thinkers,
              builders, and innovators working toward a shared goal: to craft digital solutions that
              redefine possibilities.
            </p>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
