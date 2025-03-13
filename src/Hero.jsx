import React from 'react';
import './Header.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming Ideas into <span className="highlight">Digital Reality</span>
          </h1>
          <p className="hero-description">
            We deliver cutting-edge technology solutions to help businesses grow, 
            innovate, and succeed in the digital landscape.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Our Services</button>
          </div>
          
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon web-icon"></div>
              <h3>Web Development</h3>
              <p>Custom websites that convert visitors into customers</p>
            </div>
            <div className="service-card">
              <div className="service-icon app-icon"></div>
              <h3>App Development</h3>
              <p>Native & cross-platform mobile applications</p>
            </div>
            <div className="service-card">
              <div className="service-icon ui-icon"></div>
              <h3>UI/UX Design</h3>
              <p>Beautiful interfaces with seamless user experiences</p>
            </div>
            <div className="service-card">
              <div className="service-icon cloud-icon"></div>
              <h3>Cloud Solutions</h3>
              <p>Scalable infrastructure for growing businesses</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            {/* This would be replaced with actual images in production */}
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3"></div>
            <div className="main-illustration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;