import React, { useState } from 'react';
import './AcademicProjects.css';

function AcademicProjects() {
  // Define project data
  const projects = [
    { name: "Project 1", link: "https://example.com/project1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo sed turpis consequat consectetur." },
    { name: "Project 2", link: "https://example.com/project2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo sed turpis consequat consectetur." },
    { name: "Project 3", link: "https://example.com/project3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo sed turpis consequat consectetur." },
    // Add more projects as needed
  ];

  // State to track whether project info is displayed
  const [projectInfoVisible, setProjectInfoVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to toggle project info visibility
  const toggleProjectInfo = (index) => {
    if (selectedProject === index) {
      setProjectInfoVisible(!projectInfoVisible);
    } else {
      setProjectInfoVisible(true);
    }
    setSelectedProject(index);
  };

  return (
    <section id="academic-projects" className="py-5">
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card" onClick={() => toggleProjectInfo(index)}>
                <div className="project-info" style={{ display: projectInfoVisible && selectedProject === index ? 'block' : 'none' }}>
                  <p>{project.description}</p>
                </div>
                <div className="project-content" style={{ display: projectInfoVisible && selectedProject === index ? 'none' : 'block' }}>
                  <h4>{project.name}</h4>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicProjects;
