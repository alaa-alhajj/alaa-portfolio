import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { projects } from "./MyProjects"

const Projects = () => {
  const navigate = useNavigate();
  const handleCardClick = (project) => {
    navigate(`/project/${project.id}`, { state: project });
  };
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => handleCardClick(project)}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            {/* Live Sticker */}
            {project.link && (
              <span className="live-badge">Live</span>
            )}

            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            {/* Technologies Badges */}
            <div className="technologies-container">
              {project.technologies.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>

        ))}
      </div>
      <Link to="/more-projects" className="more-projects-btn">
        View More Projects
      </Link>
    </div>
  );
};

export default Projects;
