import React from 'react';

const services = [
  {
    title: 'Software Developer Hearing',
    description:
      'We understand every project starts with listening. In this step, we gather your requirements, goals, and challenges. Our team carefully analyzes your needs before suggesting the right technology and development approach.',
    benefits: ['Clear understanding', 'Reduced errors', 'Tailor-made solutions'],
    image: '/trangla-logo.png',
  },
  {
    title: 'Web Development',
    description:
      'We design and develop modern, responsive, and user-friendly websites that work seamlessly on all devices. Whether it’s a business site, portfolio, or e-commerce platform, we ensure fast performance and strong security.',
    services: [
      'Frontend & Backend Development',
      'CMS (WordPress, Shopify, etc.)',
      'SEO & Speed Optimization',
    ],
    image: '/trangla-logo.png',
  },
  {
    title: 'Mobile Application Development',
    description:
      'We build high-performance mobile apps that engage users and grow your business. Our solutions cover both native apps (iOS & Android) and cross-platform apps with smooth functionality.',
    services: [
      'iOS & Android App Development',
      'Cross-Platform Apps (Flutter, React Native)',
      'App Maintenance & Updates',
    ],
    image: '/trangla-logo.png',
  },
  {
    title: 'Custom Site Development',
    description:
      'Every business is unique, and so should be your website. We create custom websites from scratch, tailored to your brand identity, functionality needs, and future scalability.',
    services: [
      'Unique UI/UX Design',
      'Custom Features & Integrations',
      'Scalable & Secure Architecture',
    ],
    image: '/trangla-logo.png',
  },
];

const HomeServices: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-16">
        {services.map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 flex justify-center items-center">
              <img src={item.image} alt={item.title} className="w-48 h-48 object-contain" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-3 text-sky-600">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              {item.benefits && (
                <ul className="list-disc list-inside text-gray-600 mb-2">
                  {item.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {item.services && (
                <>
                  <div className="font-semibold text-gray-800 mb-1">Services include:</div>
                  <ul className="list-disc list-inside text-gray-600">
                    {item.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
