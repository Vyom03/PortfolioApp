import React from "react";
import Typical from "react-typical";
import MagneticButton from "../../components/MagneticButton";
import './Profile.css';

function Profile() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="profile-container">
      <div className="profile-parent">

        {/* Photo column */}
        <div className="profile-photo-col">
          <div className="profile-photo-wrapper">
            <img src="/Vyom.jpg" alt="Vyom Trivedi" className="profile-photo" />
          </div>
        </div>

        {/* Text column */}
        <div className="profile-text-col">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/vyomtrivedi/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/Vyom03" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.facebook.com/vyom.trivedi.71/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/vyomtrivedi_/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Vyom Trivedi</span>
            </span>
          </div>

          <div className="profile-details-role">
            <h3 className="profile-role-title">
              <Typical
                loop={Infinity}
                steps={[
                  "Software Developer",     3000,
                  "Full-Stack Developer",   3000,
                  "API Integration Specialist", 3000,
                  "Backend Developer",      3000,
                ]}
              /><span className="typing-cursor">|</span>
            </h3>
            <span className="profile-role-tagline">
              Dynamic Software Developer excelling in API integration and full-stack development. I enhance system performance through rigorous testing methodologies and optimized SQL processes.
            </span>
          </div>

          <div className="profile-options">
            <MagneticButton
              className="btn primary-btn"
              onClick={() => scrollToSection('contact')}
              distance={15}
            >
              Hire Me
            </MagneticButton>
            <a href="Vyom_Resume.pdf" download="Vyom_Resume.pdf">
              <MagneticButton className="btn highlighted-btn" distance={15}>
                Get Resume
              </MagneticButton>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
