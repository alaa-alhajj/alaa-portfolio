import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';


const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <HeroSection />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
