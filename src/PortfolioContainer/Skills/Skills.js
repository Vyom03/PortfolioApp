import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 88 },
        { name: 'React Native', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'RESTful APIs', level: 92 },
        { name: 'Python', level: 90 },
        { name: 'Perl', level: 85 },
        { name: 'PHP', level: 85 },
        { name: 'Java', level: 82 },
        { name: 'Laravel', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'C++', level: 75 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'SQL Optimization', level: 88 },
        { name: 'MariaDB', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Tools & Services',
      skills: [
        { name: 'Git / Azure DevOps', level: 88 },
        { name: 'Postman', level: 85 },
        { name: 'EmailJS', level: 85 },
        { name: 'SFTP / FTP', level: 85 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Swagger', level: 82 },
        { name: 'SSH', level: 82 },
        { name: 'turboSMTP', level: 80 },
        { name: 'Selenium Testing', level: 80 },
        { name: 'SOAP/XML', level: 80 },
        { name: 'JWT / OAuth', level: 78 },
        { name: 'Docker', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-container">
      <div className="skills-parent">
        <div className="skills-header">
          <span className="primary-text">
            Professional <span className="highlighted-text">Skills</span>
          </span>
          <span className="skills-subtitle">
            Here are some of my skills on which I have been working on for the past few years.
          </span>
        </div>
        <div className="skills-body">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category-wrapper">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-category">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

