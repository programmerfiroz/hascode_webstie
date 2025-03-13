import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About <span className="highlight">Hashcode</span></h2>
          <div className="section-divider">
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
          </div>
          <p className="section-subtitle">
            Your trusted technology partner since 2023
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-background"></div>
            <img src="https://tngwebsolutions.ca/wp-content/uploads/2023/05/Software-Development-Services-For-Your-Company.png" alt="Hashcode team" className="main-image" />
            <div className="experience-badge">
              <span className="exp-number">5+</span>
              <span className="exp-text">Years of<br />Excellence</span>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-tagline">We build digital solutions that transform businesses</h3>
            <p className="about-description">
              Hashcode.in is a premier technology company specializing in cutting-edge web development, 
              mobile application design, and cloud hosting solutions. Our team of passionate developers 
              and designers work collaboratively to deliver exceptional digital experiences that help 
              businesses thrive in the digital landscape.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon expertise-icon"></div>
                <div className="feature-info">
                  <h4>Technical Expertise</h4>
                  <p>Our developers are skilled in the latest technologies and frameworks</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon approach-icon"></div>
                <div className="feature-info">
                  <h4>Client-Focused Approach</h4>
                  <p>We prioritize your business goals and user experience in every project</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon support-icon"></div>
                <div className="feature-info">
                  <h4>Ongoing Support</h4>
                  <p>We provide continuous maintenance and updates for all our solutions</p>
                </div>
              </div>
            </div>
            <div className="cta-wrapper">
              <a href="#services" className="about-cta btn primary-btn">Explore Our Services</a>
              <a href="#contact" className="about-cta btn secondary-btn">Get In Touch ok</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;