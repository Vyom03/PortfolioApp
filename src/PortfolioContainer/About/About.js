import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="about-details-name">
            <span className="primary-text">
              About <span className="highlighted-text">Me</span>
            </span>
          </div>
          <div className="about-details-description">
            <span className="about-description-text">
              Dynamic Software Developer with a proven track record at Rogers Communications Canada, excelling in API integration 
              and full-stack development. I've enhanced system performance through rigorous testing methodologies and optimized SQL processes. 
              Adept at collaborating in Agile environments, driving impactful product development, and delivering exceptional results 
              in web applications. Currently working as a Software Developer while continuously expanding my expertise in modern technologies.
            </span>
          </div>
          <div className="about-details-highlights">
            <div className="highlight-heading">
              <span>Key Areas of Expertise:</span>
            </div>
            <div className="highlights">
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full-Stack Development: Python, Perl, Java, PHP, JavaScript, React, Angular</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>API Integration: RESTful APIs, JSON, SOAP/XML, Postman, Swagger</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>SQL Expert: Advanced querying & optimization in MySQL, PostgreSQL, MariaDB</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Agile Development: Scrum-based workflows and iterative improvements</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Testing Methodologies: Automated testing via Selenium, API validation</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Version Control: Git, Azure DevOps for efficient deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

