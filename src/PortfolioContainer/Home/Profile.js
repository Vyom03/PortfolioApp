import React from "react";
import Typical from "react-typical";

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
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon" >
            <a href="https://www.linkedin.com/in/vyomtrivedi/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Vyom03">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.facebook.com/vyom.trivedi.71/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/vyomtrivedi_/">
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
                  "Software Developer",
                  3000,
                  "Full-Stack Developer",
                  3000,
                  "API Integration Specialist",
                  3000,
                  "Backend Developer",
                  3000,
                ]}
              />
            </h3>
            <span className="profile-role-tagline">
              Dynamic Software Developer excelling in API integration and full-stack development. I enhance system performance through rigorous testing methodologies and optimized SQL processes.
            </span>
          </div>
          <div className="profile-options">
            <button 
              className="btn primary-btn"
              onClick={() => scrollToSection('contact')}
            >
              {""}
              Hire Me{" "}
            </button>
            <a
              href="VyomResume.pdf"
              download="VyomResume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
