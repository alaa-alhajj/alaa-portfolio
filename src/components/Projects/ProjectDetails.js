import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InnerHero from '../Commen/InnerHero';
import Footer from '../Commen/Footer';
import InternalHeader from "../Commen/InternalHeader"
import './Projects.css';

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

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
            <p className="project-description" style={{ fontSize: '1.2rem' }}>{state.innerDescription}</p>
            <p style={{ marginTop: '10px', color: '#ccc' }}><i>{state.details}</i></p>
          </div>
        </motion.div >
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;