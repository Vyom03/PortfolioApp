import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const SECTIONS = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Scroll progress + scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      {menuOpen && <div className="menu-backdrop" onClick={toggleMenu} />}
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
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'nav-active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={`fa ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            <span>Change Mode</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
