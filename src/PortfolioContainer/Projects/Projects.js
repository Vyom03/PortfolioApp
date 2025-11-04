import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'School Management System',
      description: 'A full-featured school management system built with Blade templating for efficient school administration. Comprehensive system with user authentication, student management, course scheduling, and administrative features.',
      technologies: ['Laravel', 'Blade', 'PHP', 'MySQL'],
      github: 'https://github.com/Vyom03/school-management-system',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React showcasing my work and skills. Features smooth scrolling navigation, multiple sections, and modern UI design.',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/Vyom03/PortfolioApp'
    },
    {
      title: 'Memory Card Game',
      description: 'A C++ final project implementing a memory card matching game with interactive gameplay and score tracking.',
      technologies: ['C++', 'OOP'],
      github: 'https://github.com/Vyom03/MemoryCardGame'
    },
    {
      title: 'Student Management System',
      description: 'First Laravel project - A comprehensive student management system with CRUD operations and database management.',
      technologies: ['Laravel', 'PHP', 'MySQL'],
      github: 'https://github.com/Vyom03/laravelProject'
    },
    {
      title: 'Todo List App',
      description: 'First Vue.js project for learning - A task management application with add, edit, and delete functionality built with Vue.js.',
      technologies: ['Vue.js', 'JavaScript', 'CSS'],
      github: 'https://github.com/Vyom03/Todo-List-vue'
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <div className="projects-parent">
        <div className="projects-header">
          <span className="primary-text">
            My <span className="highlighted-text">Projects</span>
          </span>
          <span className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and experience.
          </span>
        </div>
        <div className="projects-body">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured-project' : ''}`}>
              {project.featured && (
                <div className="featured-badge">
                  <i className="fa fa-star"></i> Featured Project
                </div>
              )}
              <div className="project-card-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-card-body">
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`tech-tag ${project.featured ? 'featured-tech' : ''}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-card-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={`project-link ${project.featured ? 'featured-link' : ''}`}>
                  <i className="fa fa-github"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

