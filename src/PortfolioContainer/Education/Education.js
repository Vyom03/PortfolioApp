import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import './Education.css';

function Education() {
  const education = [
    {
      institution: 'Algonquin College',
      degree: 'Advanced Diploma: Computer Engineering Technology',
      location: 'Ottawa, ON',
      period: 'September 2019 - April 2022',
      achievements: [
        'Co-op Endorsed',
        "Dean's Honors List for 5 semesters",
        'Cumulative GPA: 3.71/4.0'
      ]
    }
  ];

  return (
    <section id="education" className="education-container">
      <div className="education-parent">
        <AnimatedSection animationType="slide-up" delay={0}>
          <div className="education-header">
            <span className="primary-text">
              <span className="highlighted-text">Education</span>
            </span>
            <span className="education-subtitle">
              My academic background and educational achievements.
            </span>
          </div>
        </AnimatedSection>
        <div className="education-body">
          {education.map((edu, index) => (
            <AnimatedSection key={index} animationType="scale" delay={50}>
              <div className="education-card">
                <div className="education-card-header">
                  <div className="education-institution-info">
                    <h3 className="education-institution">{edu.institution}</h3>
                    <span className="education-degree">{edu.degree}</span>
                  </div>
                  <div className="education-meta">
                    <span className="education-location">
                      <i className="fa fa-map-marker"></i> {edu.location}
                    </span>
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>
                <div className="education-card-body">
                  <ul className="education-achievements">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                </ul>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

