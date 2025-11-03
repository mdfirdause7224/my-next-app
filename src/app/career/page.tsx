'use client';

import { motion } from 'framer-motion';
import { Briefcase, HeartHandshake, Rocket, Users } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const jobOpenings = [
  {
    title: 'Frontend Developer',
    type: 'Full-Time · Remote',
    description:
      'We’re looking for a React/Next.js developer passionate about clean code, animations, and creating exceptional user experiences.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-Time · On-site',
    description:
      'Design intuitive and visually appealing interfaces that connect brand, business, and user needs seamlessly.',
  },
  {
    title: 'Backend Developer',
    type: 'Full-Time · Hybrid',
    description:
      'Engineer scalable and secure APIs, databases, and backend systems that power next-gen web applications.',
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="py-24 text-center bg-gradient-to-b from-blue-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Build Your Career With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-600 text-lg"
        >
          Join a team of thinkers, creators, and innovators dedicated to building digital experiences that make a difference.
        </motion.p>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Why Work With Us
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
                title: 'Collaborative Culture',
                desc: 'We work as one team — supporting and learning from each other every day.',
              },
              {
                icon: <Rocket className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
                title: 'Growth Opportunities',
                desc: 'We believe in continuous learning and help you grow personally and professionally.',
              },
              {
                icon: <HeartHandshake className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
                title: 'Inclusive Environment',
                desc: 'We value diversity and create an environment where everyone can thrive.',
              },
              {
                icon: <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
                title: 'Meaningful Work',
                desc: 'We build products that impact real people and solve real-world problems.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                {item.icon}
                <h4 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Open Positions
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white"
            >
              <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="text-blue-600 text-sm mb-4">{job.type}</p>
              <p className="text-gray-600 mb-6">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Don’t See a Role That Fits?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg mb-10 max-w-2xl mx-auto text-blue-100"
        >
          We’re always open to meeting passionate people. Send us your resume, and we’ll reach out when the right opportunity arises.
        </motion.p>
        <a
          href="mailto:contact@trangla.com"
          className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-gray-100 transition"
        >
          Send Resume
        </a>
      </section>
    </main>
  );
}
