import React from 'react';
import footer from '../assets/images/Footer.png';

export default function Footer() {
    return (
        <footer className='text-center footer'>
            <img src={footer} alt='footer' style={{ width: 'auto'}}/>
        </footer>
    )
}