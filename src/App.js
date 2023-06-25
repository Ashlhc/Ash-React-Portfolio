import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navbar.js';
import Footer from './components/Footer.js';
import Portfolio from './components/pages/Portfolio.js';
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact.js';
import AboutMe from './components/pages/AboutMe.js';
import Resume from './components/pages/Resume.js';
import './styles/App.css';
import './styles/Portfolio.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Contact.css';
import './styles/Resume.css';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {location.pathname !== '/portfolio' && <Footer />}
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;