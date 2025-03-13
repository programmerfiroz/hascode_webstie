import React from 'react';
import './PortfolioSection.css';

const portfolioItems = [
  {
    title: "E-commerce",
    description: "Online store with seamless user experience and payment integration",
    image: "https://im.haberturk.com/l/2023/11/27/ver1701082044/3640476/jpg/1200x628",
  },
  {
    title: "CRM System",
    description: "Manage customer relationships with data-driven insights",
    image: "https://imageio.forbes.com/specials-images/imageserve/60d787f52b2b7f840237cb3d/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds",
  },
  {
    title: "HRM Solution",
    description: "Streamline human resource management for businesses",
    image: "https://www.datocms-assets.com/40521/1614850600-hrms-6.png",
  },
  {
    title: "Fee Management",
    description: "Complete fee tracking and payment solutions.",
    image: "fees.jpg",
  },
  {
    title: "Gym",
    description: "Personalized fitness and membership management.",
    image: "zym.jpg",
  },
  {
    title: "School Management",
    description: "Manage student records, attendance, and more.",
    image: "school.jpg",
  },
  {
    title: "Studio Management",
    description: "Photography & video studio scheduling and billing.",
    image: "studio.jpg",
  },
  {
    title: "Properties",
    description: "Real estate property listings and management.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Institute",
    description: "Complete education institute management.",
    image: "https://via.placeholder.com/300",
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <div className="section-divider">
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
          </div>
          <p className="section-subtitle">
            Showcasing some of my best work and creative projects
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
