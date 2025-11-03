'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation presets
const fadeIn = (direction: 'left' | 'right' = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: { opacity: 1, x: 0 },
});

const leadershipTeam = [
  {
    name: 'Syed Suhel',
    role: 'Founder & CEO',
    image: '',
    bio: 'With a passion for innovation and precision, Suhel leads the company with a vision to create transformative digital experiences through technology and design.',
    linkedin: 'https://www.linkedin.com/in/zakeer579/',
  },
  {
    name: 'Harish',
    role: 'CTO',
    image: '',
    bio: 'Harish oversees all technical operations, ensuring each product is scalable, secure, and future-ready with cutting-edge technologies and development practices.',
    linkedin: 'https://www.linkedin.com/in/suhel-syed-32a461305/',
  },
  {
    name: 'Nagendra',
    role: 'Creative Director',
    image: '',
    bio: 'Nagendra brings creativity to life by shaping user experiences that balance design aesthetics, business goals, and user needs seamlessly.',
    linkedin: 'https://www.linkedin.com/in/mdyasirarafath/',
  },
];

export default function LeadershipPage() {
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
          Meet Our Leadership Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg"
        >
          Visionaries guiding our mission to deliver innovation, integrity, and excellence in every
          project we undertake.
        </motion.p>
      </section>

      {/* ================= LEADERSHIP SECTIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-24">
        {leadershipTeam.map((leader, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={leader.name}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(isEven ? 'left' : 'right')}
              transition={{ duration: 0.7 }}
            >
              {/* Leader Image */}
              <div className="relative w-full md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Leader Info */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{leader.bio}</p>
                <div className="flex gap-4">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                      View on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ================= LEADERSHIP PHILOSOPHY ================= */}
      <section className="bg-gray-50 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Our Leadership Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg"
        >
          We believe true leadership is about empowerment — inspiring creativity, driving
          innovation, and fostering collaboration across every level of the organization.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 px-6">
          {[
            {
              title: 'Vision & Innovation',
              desc: 'Shaping the future with forward-thinking strategies.',
            },
            {
              title: 'Integrity & Transparency',
              desc: 'Building trust through honesty and openness.',
            },
            {
              title: 'Collaboration & Growth',
              desc: 'Empowering teams to achieve extraordinary results together.',
            },
            {
              title: 'Customer-Centric Mindset',
              desc: 'Delivering excellence through empathy and understanding.',
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-8"
            >
              <h4 className="text-xl font-semibold mb-3 text-blue-600">{pillar.title}</h4>
              <p className="text-gray-600 text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOUNDER MESSAGE ================= */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Message from Our Founder
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          “At our core, we believe innovation thrives when passion meets purpose. Our team leads
          with empathy, vision, and an unyielding commitment to excellence.”
        </motion.p>
        <p className="font-semibold text-blue-700 text-lg">— Syed Zakeer Hussain, Founder & CEO</p>
      </section>
    </main>
  );
}
