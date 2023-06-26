import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';
import AboutImage from '../assets/images/AboutMe.png';
import HomeImage from '../assets/images/Home.png';
import PortfolioImage from '../assets/images/Portfolio.png';
import ContactImage from '../assets/images/ContactMe.png';
import ResumeImage from '../assets/images/Resume.png';

import '../styles/App.css';

export default function Navigation() {
const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
    }
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <h1>404 Page Not Found</h1>
};

const handlePageChange = (page) => setCurrentPage(page)

return (
  <div className="navbar">
    <div className="nav-header">
      <ul className="nav-tabs">
        <li className="nav-home">
          <Link
            to="/"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            <img className="home-nav" src={HomeImage} alt="Home" style={{ width: '40%' }} />
            <span className="home-link">Home</span>
          </Link>
        </li>
        <li className="nav-about">
          <Link
            to="/aboutme"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            <img className="about-nav" src={AboutImage} alt="About" style={{ width: '40%' }} />
            <span className="about-link">About Me</span>
          </Link>
        </li>
        <li className="nav-portfolio">
          <Link
            to="/portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            <img className="portfolio-nav" src={PortfolioImage} alt="Portfolio" style={{ width: '45%' }} />
            <span className="work-link"> Work</span>
          </Link>
        </li>
        <li className="nav-contact">
          <Link
            to="/contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            <img className="contact-nav" src={ContactImage} alt="Contact" style={{ width: '40%' }} />
            <span className="contact-link">Contact</span>
          </Link>
        </li>
        <li className="nav-resume">
          <Link
            to="/resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            <img className="resume-nav" src={ResumeImage} alt="Resume" style={{ width: '40%' }} />
            <span className="resume-link">Resume</span>
          </Link>
        </li>
      </ul>
      </div>
      </div>
);
}
