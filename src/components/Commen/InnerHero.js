import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InnerHero = (props) => {
     const navigate = useNavigate();
    return (
        <div
            className="mini-hero"
        >
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >

                <h1>Explore More Projects</h1>
                <p>Here are some additional projects I’ve developed or contributed to with passion and dedication.</p>

                {

                    props.showBackBtn ?
                        <motion.button
                            className="more-projects-btn"
                            onClick={() => navigate(-1)}
                            style={{ marginTop: '40px' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ← Back to Projects

                        </motion.button> : ""
                }
            </motion.div>
        </div>

    );
};

export default InnerHero;