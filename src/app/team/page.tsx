'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Lightbulb, Target, HeartHandshake } from 'lucide-react';

// Animation Variants
const fadeIn = (direction: 'left' | 'right' = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: { opacity: 1, x: 0 },
});

const teamMembers = [
  {
    name: 'Shaik Thajeem',
    role: 'UI/UX Designer',
    image: '',
    bio: 'Thajeem brings ideas to life through clean, intuitive, and engaging interfaces. His designs blend creativity with function to deliver seamless user journeys.',
  },
  {
    name: 'Firdause Moghal',
    role: 'Frontend Developer',
    image: '',
    bio: 'Firdause transforms designs into dynamic, high-performance user experiences, specializing in React and modern front-end frameworks.',
  },
  {
    name: 'Shahid Afridi',
    role: 'Project Manager',
    image: '',
    bio: 'Shahid drives projects with clarity, communication, and precision — ensuring every milestone is met with quality and purpose.',
  },
  {
    name: 'Sameer Shaik',
    role: 'Backend Developer',
    image: '',
    bio: 'Sameer engineers robust, scalable backend systems — building the backbone that ensures performance, security, and reliability.',
  },
  {
    name: 'Ibrahim Shaik',
    role: 'QA Engineer',
    image: '',
    bio: 'Ibrahim ensures perfection in every detail, rigorously testing each product to deliver flawless, reliable digital experiences.',
  },
];

export default function OurTeamPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our Team, Our Strength
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg"
        >
          A collective of innovators, developers, designers, and strategists — all driven by a
          shared passion to craft world-class digital experiences.
        </motion.p>
      </section>

      {/* ================= TEAM MEMBERS (ALTERNATING) ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-28">
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={member.name}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(isEven ? 'left' : 'right')}
              transition={{ duration: 0.7 }}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ================= TEAM VALUES ================= */}
      <section className="bg-gray-50 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Our Team Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg mb-20"
        >
          The foundation of our success lies in our culture — collaboration, creativity, and
          continuous learning.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
              title: 'Collaboration',
              desc: 'We achieve more when we work together and support one another.',
            },
            {
              icon: <Lightbulb className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
              title: 'Innovation',
              desc: 'We embrace curiosity and bold ideas to build better solutions.',
            },
            {
              icon: <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
              title: 'Excellence',
              desc: 'We strive for perfection in every detail — from design to delivery.',
            },
            {
              icon: <HeartHandshake className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
              title: 'Integrity',
              desc: 'We build trust with our clients and teammates through honesty and respect.',
            },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {value.icon}
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= JOIN TEAM CTA ================= */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Join Our Growing Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 text-lg leading-relaxed mb-10"
        >
          We&apos;re always on the lookout for passionate individuals who love challenges,
          creativity, and impact.
        </motion.p>
        <motion.a
          href="/JoinUs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
        >
          View Career Opportunities
        </motion.a>
      </section>
    </main>
  );
}
