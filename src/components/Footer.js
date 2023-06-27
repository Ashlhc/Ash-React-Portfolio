import React from 'react';
import footer from '../assets/images/Footer.png';
import '../styles/Home.css';
import '../styles/About.css';
import '../styles/Contact.css';
import '../styles/Resume.css'; 

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={footer} alt='footer' className='footer-image'/>
        </footer>
    )
}