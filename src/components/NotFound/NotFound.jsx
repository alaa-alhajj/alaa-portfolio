// components/NotFound.jsx
import React from 'react';
import './NotFound.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.3 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6 }}
      >
        <Link to="/" className="back-home">← Go Back Home</Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
