import React, { useState } from 'react';
import Home from './pages/Home.js';
import About from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
// import Resume from './pages/Resume.js';
import '../styles/App.css';

export default function Navbar() {
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
    // if (currentPage === 'Resume') {
    //     return <Resume />;
    // }
    return <h1>404 Page Not Found</h1>
};

const handlePageChange = (page) => setCurrentPage(page)

return (
    <div>
        <ul className='nav nav-tabs'>
            <li className='nav-item p-3'>
                <a href='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li>
            <li className='nav-item p-3'>
                <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item p-3">
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Work
        </a>
      </li>
      <li className="nav-item p-3">
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
      </li>
      {/* <li className="nav-item p-3">
        <a onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >
          Resume
        </a>
      </li> */}
        </ul>
        {renderPage({currentPage})}
    </div>
);
}
