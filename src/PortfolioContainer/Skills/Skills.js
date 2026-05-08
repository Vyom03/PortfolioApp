import React, { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import './Skills.css';

function Skills() {
  const [openCategories, setOpenCategories] = useState(new Set([0]));

  const toggleCategory = (index) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'Vue.js', level: 82 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'RESTful APIs', level: 93 },
        { name: 'Python', level: 90 },
        { name: 'Perl', level: 85 },
        { name: 'PHP', level: 87 },
        { name: 'Laravel', level: 85 },
        { name: 'Lumen', level: 80 },
        { name: 'Microservice Architecture', level: 80 },
        { name: 'Java', level: 82 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'C++', level: 75 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'SQL Optimization', level: 88 },
        { name: 'MariaDB', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      skills: [
        { name: 'Nginx', level: 82 },
        { name: 'Apache', level: 80 },
        { name: 'Apache Kafka', level: 78 },
        { name: 'Memcached', level: 78 },
        { name: 'API Gateway', level: 78 },
        { name: 'Service Registry', level: 75 },
        { name: 'FQDN / DNS', level: 75 },
        { name: 'Docker', level: 72 },
        { name: 'SSH', level: 85 },
        { name: 'SFTP / FTP', level: 85 },
      ]
    },
    {
      title: 'Tools & Services',
      skills: [
        { name: 'Git / Azure DevOps', level: 88 },
        { name: 'JWT / OAuth 2.0', level: 85 },
        { name: 'Postman', level: 85 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Swagger', level: 82 },
        { name: 'SOAP/XML', level: 80 },
        { name: 'Selenium Testing', level: 80 },
        { name: 'turboSMTP', level: 80 },
        { name: 'EmailJS', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-container">
      <div className="skills-parent">
        <AnimatedSection animationType="slide-up" delay={0}>
          <div className="skills-header">
            <span className="primary-text">
              Professional <span className="highlighted-text">Skills</span>
            </span>
            <span className="skills-subtitle">
              Here are some of my skills on which I have been working on for the past few years.
            </span>
          </div>
        </AnimatedSection>
        <div className="skills-body">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={categoryIndex}
              animationType="fade"
              delay={categoryIndex * 50}
            >
              <div className={`skills-category-wrapper${openCategories.has(categoryIndex) ? ' open' : ''}`}>
                <h3
                  className="category-title"
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  {category.title}
                  <span className="category-chevron">&#8964;</span>
                </h3>
                <div className="skills-category-content">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-name">
                        <span>{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
