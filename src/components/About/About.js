import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Hi, I'm Alaa,a passionate front-end developer with over 5 years of experience in creating interactive websites and applications. I specialize in React.js, JavaScript, and modern web technologies.
          I specialize in React.js, JavaScript, and modern web technologies.
        </p>
        <p>
          My goal is to create seamless, engaging user experiences that are both functional and visually appealing. I love tackling challenges and always strive to learn new things and improve my skills.
        </p>
        <p>
          When I’m not coding, you can find me exploring new design trends or collaborating with fellow developers. I’m always open to new opportunities and look forward to contributing to exciting projects.
        </p>
      </motion.div>
    </div>
  );
};

export default About;