'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Lightbulb, Target, HeartHandshake } from 'lucide-react';

// Animation Variants
const fadeIn = (direction: 'left' | 'right' = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: { opacity: 1, x: 0 },
});

// ---------- TEAM DATA ----------
const teamMembers = [
  {
    name: 'Shahid Afridi',
    role: 'Full Stack Developer',
    image: '/afridi.jpg',
    linkedin: 'https://www.linkedin.com/in/shahid--afridi/',
    bio: 'Shahid is a versatile full stack developer who bridges front-end finesse with back-end power, building seamless, scalable, and efficient digital solutions from concept to deployment.',
  },
  {
    name: 'Shaik Thajeem',
    role: 'UI/UX Designer',
    image: '/thajeem.png',
    linkedin: 'https://www.linkedin.com/in/thajeemshaik//',
    bio: 'Thajeem brings ideas to life through clean, intuitive, and engaging interfaces. His designs blend creativity with function to deliver seamless user journeys.',
  },
  {
    name: 'Firdause Moghal',
    role: 'Frontend Engineer',
    image: '/firdause.png',
    linkedin: 'https://www.linkedin.com/in/firdause-moghal/',
    bio: 'Firdause crafts seamless, interactive, and performant web interfaces turning creative concepts into elegant digital experiences through modern front-end engineering.',
  },
  {
    name: 'Sameer Shaik',
    role: 'Backend Developer',
    image: '/sameer.jpeg',
    linkedin: 'https://www.linkedin.com/in/sameer-basha-shaik-112965255/',
    bio: 'Sameer engineers robust, scalable backend systems building the backbone that ensures performance, security, and reliability.',
  },
  {
    name: 'Sri Lakshmi Priya',
    role: 'Frontend Developer',
    image: '/priya.jpeg',
    linkedin: 'https://www.linkedin.com/in/sai-lakshmi-priya-marturu/',
    bio: 'Priya transforms designs into dynamic, high-performance user experiences, specializing in React and modern front-end frameworks.',
  },
  {
    name: 'Ibrahim Shaik',
    role: 'Full Stack Developer',
    image: '/ibrahim.jpeg',
    linkedin: 'https://www.linkedin.com/in/shaik-ibrahim-626ba5386/',
    bio: 'Ibrahim is a versatile full stack developer who bridges front-end finesse with back-end power, building seamless, scalable, and efficient digital solutions from concept to deployment.',
  },
  {
    name: 'Shaik Lubaba',
    role: 'Frontend Developer',
    image: '/lubaba.jpg',
    linkedin: 'https://www.linkedin.com/in/shaiklubaba/',
    bio: 'Lubaba transforms designs into dynamic, high-performance user experiences, specializing in React and modern front-end frameworks.',
  },
  {
    name: 'Inthiyaz Shaik',
    role: 'Frontend Developer',
    image: '/Inthiyaz.jpeg',
    linkedin: 'https://www.linkedin.com/in/shaikinthiyaz/',
    bio: 'Inthiyaz transforms designs into dynamic, high-performance user experiences, specializing in React and modern front-end frameworks.',
  },
  {
    name: 'Harsha Vukoti',
    role: 'Full Stack Developer',
    image: '/harsha.jpg',
    linkedin: 'https://www.linkedin.com/in/praharsha-vukoti/',
    bio: 'Harsha is a versatile full stack developer who bridges front-end finesse with back-end power, building seamless, scalable, and efficient digital solutions from concept to deployment.',
  },
];

export default function OurTeamPage() {
  return (
    <main className="bg-white text-gray-800 bg-gradient-to-b from-blue-50 to-white pt-12">
      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-10 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg"
        >
          A collective of innovators, developers, designers, and strategists all driven by a shared
          passion to craft world-class digital experiences.
        </motion.p>
      </section>

      {/* ================= TEAM MEMBERS (2 PER ROW CARDS) ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-6 border border-gray-200 hover:border-blue-300"
            >
              {/* Image */}
              <div className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden shadow-md border bg-white shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>

                {/* LinkedIn Button */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-3 text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M19 3A2.994 2.994 0 0 1 22 6v12a2.994 2.994 0 0 1-3 3H5a2.994 2.994 0 0 1-3-3V6a2.994 2.994 0 0 1 3-3h14zm-8 7h-2v8h2v-8zm-1-4a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 10 6zM18 13.5c0-2.142-1.358-3.5-3.25-3.5A3.3 3.3 0 0 0 12 11.012V10h-2v8h2v-4.25c0-1.242.758-1.75 1.75-1.75s1.75.667 1.75 1.75V18h2v-4.5z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
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
          The foundation of our success lies in our culture collaboration, creativity, and
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
