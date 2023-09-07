import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/style.css';

function NavBar() {
  const [navbarColor, setNavbarColor] = useState('white');
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarColor('rgba(0, 0, 0, 0.7)');
        document.documentElement.style.setProperty('--nav-links-color', 'white');
        document.documentElement.style.setProperty('--nav-links-hover-color', '#ffc107');
      } else {
        setNavbarColor('white');
        document.documentElement.style.setProperty('--nav-links-color', 'black');
        document.documentElement.style.setProperty('--nav-links-hover-color', '#ffc107');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
  };

  return (
    <Navbar expand="lg" className="fixed-top" style={{ backgroundColor: navbarColor, transition: 'background-color 0.3s' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
        <Nav className="me-auto mx-auto text-align-center">
          <Nav.Link href="#home" className={activeLink === '#home' ? 'active-link' : ''} onClick={() => handleLinkClick('#home')}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" className={activeLink === '#about' ? 'active-link' : ''} onClick={() => handleLinkClick('#about')}>
            About
          </Nav.Link>
          <Nav.Link href="#projects" className={activeLink === '#projects' ? 'active-link' : ''} onClick={() => handleLinkClick('#projects')}>
            Projects
          </Nav.Link>
          <Nav.Link href="#cont" className={activeLink === '#cont' ? 'active-link' : ''} onClick={() => handleLinkClick('#cont')}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
