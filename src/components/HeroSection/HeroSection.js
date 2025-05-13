import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container" id="home"
      style={{
        backgroundImage: `url('./images/hero-section3.jpg')`
      }}
    ><div className='hero-content'>
        <motion.img
          src="./images/alaa-alhaj.jpeg"
          alt="Profile Dummy"
          className="profile-img"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hello, I'm Alaa
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          A Front-End Developer passionate about creating interactive UIs.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;