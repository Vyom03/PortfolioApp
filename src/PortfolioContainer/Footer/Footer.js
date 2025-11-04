import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Vyom Trivedi. All rights reserved.
        </p>
        <div className="footer-links">
          <a 
            href="https://github.com/Vyom03" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <i className="fa fa-github"></i>
          </a>
          <a 
            href="mailto:vyomtriv@gmail.com" 
            className="footer-link"
            aria-label="Email"
          >
            <i className="fa fa-envelope"></i>
          </a>
          <a 
            href="tel:+16138691355" 
            className="footer-link"
            aria-label="Phone"
          >
            <i className="fa fa-phone"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

