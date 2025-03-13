import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Contact <span className="highlight">Hashcode</span></h2>
          <div className="section-divider">
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
          </div>
          <p className="section-subtitle">
            Get in touch with us for collaboration and inquiries
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon location-icon"></div>
              <div className="info-text">
                <h4>Our Office</h4>
                <p>Block C, C8, C Block, Sector 63, Noida, Uttar Pradesh 201301, India</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon email-icon"></div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>info@hashcode.in</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon phone-icon"></div>
              <div className="info-text">
                <h4>Call Us</h4>
                <p>+91 9026663052</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="form-title">Send Us a Message</h3>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn primary-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
