import React from 'react';
import './ServiceSection.css';

const serviceIcons = {
  'Web Development': 'mobile.png',
  'App Development': 'android.png',
  'UI/UX Design': 'ux.png',
  'SEO Optimization': 'seo.png',
  'Digital Marketing': 'digitalmarketing.png',
  'E-commerce': 'shopping.png',
};


const services = [
  { title: 'Web Development', description: 'Building responsive and modern websites' },
  { title: 'App Development', description: 'Creating seamless mobile applications' },
  { title: 'UI/UX Design', description: 'Designing user-friendly interfaces' },
  { title: 'SEO Optimization', description: 'Boosting website visibility on search engines' },
  { title: 'Digital Marketing', description: 'Strategic online marketing solutions' },
  { title: 'E-commerce', description: 'Developing online shopping platforms' }
];

const ServiceSection = () => {
  return (
    <section className="service-section" id="services">
      <div className="service-container">
        <div className="service-header">
          <h2 className="section-title">My <span className="highlight">Services</span></h2>
          <div className="section-divider">
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
          </div>
          <p className="section-subtitle">
            Offering a variety of services to meet your needs
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img
                src={serviceIcons[service.title]}
                alt={service.title}
                className="service-image"
              />
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
