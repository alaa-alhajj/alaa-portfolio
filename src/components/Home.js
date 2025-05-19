import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Loader from './Commen/Loader';

const Home = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!loading && location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [loading, location]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <HeroSection />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </>
            )}
        </>
    );
};

export default Home;
