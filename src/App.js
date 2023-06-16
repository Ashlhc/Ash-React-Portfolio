import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css';

export default function App() {
    return (
        <div>
            <Header />
            <Navigation />
            <Footer />
        </div>
    )
};