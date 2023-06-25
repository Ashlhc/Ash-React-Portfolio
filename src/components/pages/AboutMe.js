import React from 'react';
import DnDGroup from '../../assets/images/DnD-group.png';
import '../../styles/About.css';
import '../../styles/App.css';

export default function About() {
    return (
        <main>
            <div className='about'>
                <img className='dnd-group'src={DnDGroup} alt='my dnd group'/>
                <h2>About Me</h2>
                <div className='aboutMe w-75 row d-flex justify-content-center'>
                    <p className='about-me'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </main>
    )
}