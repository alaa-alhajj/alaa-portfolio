import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Todo-List App',
    description: 'A modern, interactive To-Do List web application built with React and Vite.',
    innerDescription: 'A modern, interactive To-Do List web application built with React and Vite. This app allows users to efficiently manage their tasks with intuitive features and a responsive design. Whether for personal use or team collaboration, the application provides a seamless experience for adding, editing, deleting, and categorizing tasks.',
    image: './images/no-image-icon.png',
    details: 'Built using ReactJs with Vite.',
  },
  {
    title: 'Medical Dashboard',
    description: 'A comprehensive medical web application designed to provide users with personalized health and wellness information.',
    innerDescription: "A comprehensive medical web application designed to provide users with personalized health and wellness information. The app allows users to track their symptoms, manage medical appointments, and store essential health data in one place. With an intuitive interface and secure data handling, this app aims to help users stay on top of their health and medical needs.",
    image: './images/no-image-icon.png',
    details: 'Built using Next.js with TailwindCSS.',
  },
  {
    title: 'Weather App',
    description: 'A sleek, real-time weather forecast web application built with React and integrated with a weather API.',
    innerDescription: "A sleek, real-time weather forecast web application built with React and integrated with a weather API. The app provides users with up-to-date weather information, including temperature, humidity, wind speed, and more, for any city around the world. It offers a user-friendly interface with an intuitive search bar, allowing users to easily get current and forecasted weather data.",
    image: './images/no-image-icon.png',
    details: 'Built using Next.js with TailwindCSS.',
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}
              <br />
              <i>{project.details}</i>
            </p>
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
