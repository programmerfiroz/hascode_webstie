import React from 'react';
import './PortfolioSection.css';

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
          <div className="portfolio-item">
            <img src="https://im.haberturk.com/l/2023/11/27/ver1701082044/3640476/jpg/1200x628" alt="E-commerce Platform" className="portfolio-image" />
            <div className="portfolio-overlay">
              <h3>E-commerce Platform</h3>
              <p>Online store with seamless user experience and payment integration</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://imageio.forbes.com/specials-images/imageserve/60d787f52b2b7f840237cb3d/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds" alt="CRM System" className="portfolio-image" />
            <div className="portfolio-overlay">
              <h3>CRM System</h3>
              <p>Manage customer relationships with data-driven insights</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://www.datocms-assets.com/40521/1614850600-hrms-6.png" alt="HRM Solution" className="portfolio-image" />
            <div className="portfolio-overlay">
              <h3>HRM Solution</h3>
              <p>Streamline human resource management for businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;