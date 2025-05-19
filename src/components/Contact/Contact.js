import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>You can reach me through the following channels:</p>

        <ul className="contact-info">
          <li><strong>Email:</strong> alaahj.92@gmail.com</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alaa-alhaj/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alaa-alhaj/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/alaa-alhajj" target="_blank" rel="noopener noreferrer">https://github.com/alaa-alhajj</a></li>
          <li><strong>Location:</strong> Damascus, Syria</li>
        </ul>
         <motion.a 
          href="https://drive.google.com/uc?export=download&id=1Zmnme-hCPzaln1dR--mEd0-bAG4GIKKF"  
          className="download-cv-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaFilePdf className="pdf-icon" />
          Download My CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;