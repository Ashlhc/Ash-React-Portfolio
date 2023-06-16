import React from 'react';
// import Me from '../../assets/images/';
import DnDGroup from '../../assets/images/DnD-group.png';
import '../../styles/About.css';

export default function About() {
    return (
        <main>
            <div className='about'>
                <img src={DnDGroup} alt='my dnd group' style={{width: 'auto', justifyContent: 'center'}}/>
                <h2>About Me</h2>
                <div className='aboutMe w-75 row d-flex justify-content-center'>
                    <p className='col-lg-8'>Paragraph about me</p>
                    <div className='pic col-lg-3'>
                        {/* <img src={Me} alt='picture of me' style={{width: 'auto', height: '8em'}}/> */}
                    </div>
                </div>
            </div>
        </main>
    )
}