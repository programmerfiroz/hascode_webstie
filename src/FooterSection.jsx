import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">
            Let's Build Something <span className="highlight">Great Together</span>
          </h2>
          <p className="footer-description">
            We are committed to providing top-notch digital solutions. Get in touch with us today!
          </p>
          <div className="footer-buttons">
            <button className="btn primary-btn">Contact Us</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Cloud Solutions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HashCode Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
