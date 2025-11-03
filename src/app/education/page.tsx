'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaLaptopCode, FaUsers, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { MdCastForEducation, MdOutlineDashboard } from 'react-icons/md';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function EducationCaseStudy() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20 bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Digital Evolution in Education & E-Learning
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Transforming traditional learning into immersive, data-driven, and accessible digital experiences.
          </p>
        </div>
      </FadeInSection>

      {/* ===== CLIENT OVERVIEW ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Client Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our client — a national education group — wanted to transition from in-person training
            to a fully digital learning ecosystem. Their goal was to create a modern platform
            that supports interactive learning, personalized progress tracking, and virtual classroom collaboration
            for thousands of students across regions.
          </p>
        </section>
      </FadeInSection>

      {/* ===== CHALLENGES ===== */}
      <FadeInSection>
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              'Outdated manual processes for course delivery and grading.',
              'Limited accessibility for remote learners and educators.',
              'No centralized tracking of student performance.',
              'Low engagement due to static learning materials.',
              'Difficulty in scaling to multiple institutions and devices.',
              'Lack of real-time communication between teachers and students.',
            ].map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-blue-50 rounded-2xl border border-blue-100"
              >
                <p className="text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* ===== SOLUTION ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We built a next-generation <strong>Education & E-Learning platform</strong> designed to deliver
            personalized, interactive, and scalable digital learning. By integrating powerful features like
            AI-based assessments, real-time collaboration tools, and student analytics dashboards,
            we enabled a seamless virtual learning experience.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <MdCastForEducation className="text-blue-600 text-4xl" />,
                title: 'Learning Management System (LMS)',
                desc: 'A unified platform for course creation, management, and progress tracking.',
              },
              {
                icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
                title: 'Virtual Classrooms',
                desc: 'Interactive live sessions with real-time video, chat, and screen sharing.',
              },
              {
                icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
                title: 'Online Courses & Certifications',
                desc: 'Self-paced learning with automated assessments and certificates.',
              },
              {
                icon: <MdOutlineDashboard className="text-blue-600 text-4xl" />,
                title: 'Student Analytics Dashboard',
                desc: 'AI-driven insights for educators to monitor performance and engagement.',
              },
              {
                icon: <FaUsers className="text-blue-600 text-4xl" />,
                title: 'Community & Collaboration Tools',
                desc: 'Built-in discussion boards and peer-to-peer knowledge sharing.',
              },
              {
                icon: <FaGraduationCap className="text-blue-600 text-4xl" />,
                title: 'Gamification & Engagement',
                desc: 'Quizzes, badges, and leaderboards to boost learner motivation.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* ===== IMPACT ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-5xl mx-auto bg-blue-50 p-10 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Impact & Results</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
            <li>85% increase in student engagement through gamified learning.</li>
            <li>50% faster course completion rate using personalized modules.</li>
            <li>Seamless scalability for 10,000+ concurrent users.</li>
            <li>30% improvement in instructor efficiency with automated grading.</li>
            <li>Fully cloud-based and accessible across devices.</li>
            <li>Enhanced communication between students, teachers, and administrators.</li>
          </ul>
        </section>
      </FadeInSection>

      {/* ===== TESTIMONIAL ===== */}
      <FadeInSection>
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-lg">
            “This platform transformed our online education delivery. Student participation soared,
            and our instructors finally have the tools they need for modern teaching.”
          </blockquote>
          <p className="mt-4 font-semibold text-blue-700">— Academic Director, Education Group</p>
        </section>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection>
        <section className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Learning Experience?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Partner with us to build cutting-edge digital learning platforms that inspire engagement
            and make education accessible to all.
          </p>
          <Link href="/partner">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition">
              Let’s Connect
            </button>
          </Link>
        </section>
      </FadeInSection>
    </div>
  );
}
