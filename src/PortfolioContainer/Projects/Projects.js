import React, { useState, useMemo, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [projectsWithTech, setProjectsWithTech] = useState([]);

  const baseProjects = useMemo(() => [
    {
      title: 'School Management System',
      description: 'A full-featured school management system built with Blade templating for efficient school administration. Comprehensive system with user authentication, student management, course scheduling, and administrative features.',
      technologies: ['Laravel', 'Blade', 'PHP', 'MySQL'],
      github: 'https://github.com/Vyom03/school-management-system',
      featured: true
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive student management system built with Laravel. Features complete CRUD operations, database management, user authentication, and efficient data handling for educational institutions.',
      technologies: ['Laravel', 'PHP', 'MySQL'],
      github: 'https://github.com/Vyom03/laravelProject',
      featured: true
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive learning management system designed for educational institutions. Features course management, student enrollment, progress tracking, and interactive learning modules for effective online education.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js'],
      github: 'https://github.com/Vyom03/learning-management-system'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React showcasing my work and skills. Features smooth scrolling navigation, multiple sections, interactive animations, and modern UI design.',
      technologies: ['React', 'CSS', 'JavaScript', 'EmailJS'],
      github: 'https://github.com/Vyom03/PortfolioApp'
    },
    {
      title: 'Memory Card Game',
      description: 'A C++ final project implementing a memory card matching game with interactive gameplay and score tracking.',
      technologies: ['C++', 'OOP'],
      github: 'https://github.com/Vyom03/MemoryCardGame'
    },
    {
      title: 'Todo List App',
      description: 'A task management application built with Vue.js. Features add, edit, delete functionality with a clean and intuitive user interface.',
      technologies: ['Vue.js', 'JavaScript', 'CSS'],
      github: 'https://github.com/Vyom03/Todo-List-vue'
    }
  ], []);

  // Technology mapping from GitHub language names to display names (moved outside to avoid dependency issues)
  const techMapping = useMemo(() => ({
    'JavaScript': 'JavaScript',
    'TypeScript': 'TypeScript',
    'HTML': 'HTML',
    'CSS': 'CSS',
    'PHP': 'PHP',
    'Python': 'Python',
    'Java': 'Java',
    'C++': 'C++',
    'C': 'C',
    'C#': 'C#',
    'Ruby': 'Ruby',
    'Go': 'Go',
    'Rust': 'Rust',
    'Swift': 'Swift',
    'Kotlin': 'Kotlin',
    'Dart': 'Dart',
    'Shell': 'Shell',
    'PowerShell': 'PowerShell',
    'Vue': 'Vue.js',
    'Vue.js': 'Vue.js',
    'SCSS': 'SCSS',
    'SASS': 'SASS',
    'Less': 'Less',
    'TSX': 'TypeScript',
    'JSX': 'JavaScript',
    'Dockerfile': 'Docker',
    'Makefile': 'Make',
    'YAML': 'YAML',
    'JSON': 'JSON',
    'XML': 'XML',
    'Markdown': 'Markdown'
  }), []);

  // Extract repository name from GitHub URL
  const getRepoName = (githubUrl) => {
    const match = githubUrl.match(/github\.com\/Vyom03\/([^/]+)/);
    return match ? match[1] : null;
  };

  // Fetch languages from GitHub API
  useEffect(() => {
    const fetchLanguages = async () => {
      const projectsWithLanguages = await Promise.all(
        baseProjects.map(async (project) => {
          const repoName = getRepoName(project.github);
          if (!repoName) {
            return { ...project, technologies: project.technologies || [] };
          }

          try {
            const response = await fetch(`https://api.github.com/repos/Vyom03/${repoName}/languages`);
            if (response.ok) {
              const languages = await response.json();
              const githubTechs = Object.keys(languages)
                .map(lang => techMapping[lang] || lang)
                .filter(lang => lang && lang !== 'Markdown' && lang !== 'JSON' && lang !== 'YAML'); // Filter out common non-tech languages
              
              // Merge: GitHub languages + manually specified technologies (remove duplicates)
              const allTechs = [...new Set([...githubTechs, ...(project.technologies || [])])];
              
              return { ...project, technologies: allTechs };
            }
          } catch (error) {
            console.error(`Error fetching languages for ${repoName}:`, error);
          }
          
          // Fallback to original technologies if API call fails
          return { ...project, technologies: project.technologies || [] };
        })
      );

      setProjectsWithTech(projectsWithLanguages);
    };

    fetchLanguages();
  }, [baseProjects, techMapping]);

  // Use projectsWithTech if available, otherwise fallback to baseProjects
  const projects = projectsWithTech.length > 0 ? projectsWithTech : baseProjects;

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, [projects]);

  // Filter projects based on selected filter and search term
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = selectedFilter === 'All' || 
        project.technologies.some(tech => tech === selectedFilter);
      
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      return matchesFilter && matchesSearch;
    });
  }, [projects, selectedFilter, searchTerm]);

  const handleFilterClick = (tech) => {
    setSelectedFilter(tech);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Reset filter when searching
    if (e.target.value !== '' && selectedFilter !== 'All') {
      setSelectedFilter('All');
    }
  };

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

        {/* Search and Filter Controls */}
        <div className="projects-controls">
          <div className="projects-search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <i className="fa fa-times"></i>
              </button>
            )}
          </div>
          <div className="projects-filters">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                className={`filter-btn ${selectedFilter === tech ? 'active' : ''}`}
                onClick={() => handleFilterClick(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        {filteredProjects.length > 0 && (
          <div className="projects-count">
            Showing {filteredProjects.length} of {projects.length} project{projects.length !== 1 ? 's' : ''}
          </div>
        )}

        <div className="projects-body">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
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
          ))
          ) : (
            <div className="no-projects">
              <i className="fa fa-search"></i>
              <p>No projects found matching your criteria.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setSelectedFilter('All');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

