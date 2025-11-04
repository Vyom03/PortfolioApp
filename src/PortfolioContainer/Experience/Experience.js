import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'Rogers Communications Canada',
      position: 'Software Developer',
      location: 'Ottawa, Canada',
      period: 'August 2022 - October 2025',
      achievements: [
        'Boosted system performance by 28% by implementing integrated front-end and back-end interfaces using Perl and Python',
        'Reduced software defects by 24% by identifying and resolving critical bugs',
        'Optimized data exchange efficiency by 18% by consuming RESTful APIs and leveraging JSON',
        'Improved data validation accuracy by 45% by refining SQL procedures',
        'Enhanced application performance through advanced debugging and code optimization',
        'Improved deployment efficiency by leveraging Git to minimize merge conflicts'
      ]
    },
    {
      company: 'Invest Ottawa',
      position: 'Web Developer Intern',
      location: 'Ottawa, Canada',
      period: 'August 2020 - December 2020',
      achievements: [
        'Led initiatives for website development, including creation of Shopify-based e-commerce platforms',
        'Spearheaded the planning, development, and testing of a document scraping project',
        'Improved SEO performance through precise metadata enhancement and competitive analysis',
        'Executed transition from WIX to Shopify, maintaining operational stability',
        'Collaborated with UI/UX designer to develop and test web applications'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-container">
      <div className="experience-parent">
        <div className="experience-header">
          <span className="primary-text">
            Work <span className="highlighted-text">Experience</span>
          </span>
          <span className="experience-subtitle">
            My professional journey and key contributions in software development.
          </span>
        </div>
        <div className="experience-body">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <div className="experience-company-info">
                  <h3 className="experience-company">{exp.company}</h3>
                  <span className="experience-position">{exp.position}</span>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">
                    <i className="fa fa-map-marker"></i> {exp.location}
                  </span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <div className="experience-card-body">
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

