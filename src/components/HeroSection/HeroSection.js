import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        color: 0xfff5,
        backgroundColor: 0x181818,
        points: 15,
        maxDistance: 27,
        spacing: 20,
        showDots: true,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
      });

      return () => {
        if (effect && effect.destroy) effect.destroy();
      };
    }
  }, []);

  return (
    <div ref={vantaRef} className="hero-container" id="home">
      <div className="hero-content">
        <motion.img
          src="./images/alaa-alhaj.jpeg"
          alt="Profile"
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
