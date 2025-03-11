import React, { useState, useEffect } from 'react';
import './Header.css'; // We'll define this CSS below

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener to create scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <h1>Hash<span>Code</span></h1>
          {/* <img  src="hashcodelogo.png" alt="Hashcode team" className="main-image" /> */}
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="cta-button">
          <a href="#signup" className="btn">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;