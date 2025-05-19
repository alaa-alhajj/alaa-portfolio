import React, { useEffect, useState } from 'react';


const ParallaxEffect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-wrapper" style={{ backgroundPosition: `center ${scrollPosition * 0.5}px` }}>
      <h1 className="parallax-text">Explore My Creative Work</h1>
    </div>
  );
};

export default ParallaxEffect;
