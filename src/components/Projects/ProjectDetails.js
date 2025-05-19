import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import InnerHero from '../Commen/InnerHero';
import Footer from '../Commen/Footer';
import InternalHeader from "../Commen/InternalHeader"
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectDetails = () => {
  const { state } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!state) return <div className="projects-container">No project data available.</div>;

  return (
    <>
      <InternalHeader />
      <InnerHero showBackBtn={true} />

      <div className="projects-container">
        <motion.div
          className="project-details-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >

          <div className="project-image">
            <img src={`${state.hmoeImage}`} alt={state.title} />
          </div>
          <div className='project-info'>
            <h2 className="projects-title">{state.title}</h2>


            <div className="project-description">
              <p> {state.innerDescription}</p>

              {state.link && (
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ExternalLink color="#00ffd5" size={20} />
                  <a
                    href={state.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#00ffd5',
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00c2a8'}
                    onMouseLeave={(e) => e.target.style.color = '#00ffd5'}
                  >
                    Live Project
                  </a>
                </div>
              )}

              {state.github && (
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Github color="#00ffd5" size={20} />
                  <a
                    href={state.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#00ffd5',
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00c2a8'}
                    onMouseLeave={(e) => e.target.style.color = '#00ffd5'}
                  >
                    GitHub Repository
                  </a>
                </div>
              )}
            </div>
            <p style={{ marginTop: '10px', color: '#ccc' }}>
              {
                state.features ?
                  <>
                    <strong>Features:</strong>
                    <ul style={{ paddingLeft: '10px', marginTop: '10px' }}>
                      {
                        state.features?.map((feature, index) => {
                          return <li key={index}>{feature}</li>
                        })
                      }
                    </ul>
                  </>
                  : ""
              }

              {state.technologies && (
                <div style={{ marginTop: '20px' }}>
                  <strong>🛠 Technologies Used:</strong>
                  <motion.div
                    className="technologies-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {state.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              )}

            </p>
          </div>
        </motion.div >
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;