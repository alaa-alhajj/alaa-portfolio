import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const InternalHeader = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="internal-header-fancy">
            <div className="internal-header-wrapper">

                <div className="logo"> <img src={`${process.env.PUBLIC_URL}/images/alaa-logo.png`} alt="Alaa Logo" /></div>
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <nav className={`internal-nav-fancy ${menuOpen ? 'open' : ''}`}>
                    <Link to="/#home" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default InternalHeader;
