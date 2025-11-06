import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    title: 'Software Developer Hearing',
    description:
      'Every successful project begins with listening. We take the time to understand your goals, challenges, and expectations before crafting a technical approach that fits perfectly with your vision.',
    benefits: ['Clear understanding', 'Reduced errors', 'Tailor-made solutions'],
    link: '/Services/software-development',
  },
  {
    title: 'Web Development',
    description:
      'We design and develop modern, responsive, and high-performing websites. From business sites to e-commerce platforms, our websites are built with speed, security, and scalability in mind.',
    services: [
      'Frontend & Backend Development',
      'CMS (WordPress, Shopify, etc.)',
      'SEO & Performance Optimization',
    ],
    link: '/Services/web-development',
  },
  {
    title: 'Mobile Application Development',
    description:
      'We create fast, engaging, and reliable mobile apps that drive growth. Whether it’s native iOS/Android or cross-platform, our apps are crafted for performance and seamless user experience.',
    services: [
      'Native (iOS & Android)',
      'Cross-Platform (Flutter, React Native)',
      'App Maintenance & Support',
    ],
    link: '/Services/mobile-app-development',
  },
  {
    title: 'Custom Site Development',
    description:
      'We build bespoke websites from the ground up tailored to your brand, functionality, and long-term growth. Every element is crafted to align with your business goals.',
    services: [
      'Unique UI/UX Design',
      'Custom Features & Integrations',
      'Scalable & Secure Architecture',
    ],
    link: '/Services/custom-site-development',
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We provide a full range of development services to bring your ideas to life from initial
          consultation to deployment and beyond.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-2xl font-semibold text-sky-600 mb-3">{item.title}</h3>
            <p className="text-gray-700 mb-5 leading-relaxed">{item.description}</p>

            {item.benefits && (
              <div className="mb-4">
                <div className="font-medium text-gray-800 mb-1">Benefits:</div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {item.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.services && (
              <div className="mb-4">
                <div className="font-medium text-gray-800 mb-1">Services include:</div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {item.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <a
                href={item.link}
                className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700 group"
              >
                <span>View More</span>
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
