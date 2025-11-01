'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-6 md:px-16 py-20 overflow-hidden">
      <div className="max-w-5xl text-center space-y-8">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-light leading-snug"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We are a team of experts specializing in,
          <br />
          <span className="font-semibold">
            Graphic Design, Branding,
            <br />
            Web & Mobile Development.
          </span>
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-base md:text-lg font-light text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to Trangla – We are a team of expert designers and developers.
          We work on platforms like <strong>iOS, Android, React JS, React Native, Vue JS, NodeJS, MongoDB, MySQL, AWS, AngularJS, Angular Native, Cordova, Phonegap, Ionic</strong> etc. We build top-notch websites and web applications and also work on
          <strong> logo design, corporate branding, web design, web development, graphic design</strong> and <strong>digital marketing services.</strong>
        </motion.p>

        {/* Animated Secondary Text */}
        <motion.p
          className="text-base md:text-lg font-light text-white/90"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A well-regarded Branding & Development agency, Trangla has years of experience
          working with companies across various industries. This enables us to empower you
          with the best digital practices that ensure what we deliver drives your business effectively.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          className="pt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="tel:+919494820022"
            className="inline-block bg-white text-blue-600 font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
          >
            +91 9494820022
          </a>
        </motion.div>
      </div>

      {/* Decorative Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-indigo-600/20 blur-3xl -z-10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    </section>
  );
}
