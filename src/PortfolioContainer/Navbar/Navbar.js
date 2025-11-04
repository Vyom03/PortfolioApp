import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">VT</span>
          </div>
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

