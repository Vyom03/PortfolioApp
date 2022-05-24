import React from "react";
import Typical from "react-typical";

import './Profile.css';
function Profile() {
  return (
    <div className="profile-container">
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
            <a href="https://www.instagram.com/vyom_3vedi_/">
              <i className="fa fa-instagram"></i>
            </a>

              </div>
          </div>

          <div className="profile-details-name">
            <span className="priary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"> Vyom Trivedi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="priary-text">
              {" "}
              <h3>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev🔴",
                    3000,
                    "Frontend Developer🖥️",
                    3000,
                    "FreeLancer🍀",
                    3000,
                    "React/React Native Dev🌟",
                    3000,
                  ]}
                />
              </h3>
            </span>
            <span classname="profile-role-tagline">
              I like to learn and implement things.
            </span>
          </div>
          <div classsName="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a
              href="Vyom Trivedi Resume.pdf"
              download="Vyom Trivedi Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
