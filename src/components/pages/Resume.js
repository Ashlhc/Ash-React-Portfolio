import React from 'react';
import resume from '../../assets/files/Resume.docx';
import '../../styles/Resume.css';
import '../../styles/App.css';

export default function Resume() {
    return (
        <main>
                <h2>Resume</h2>
                <div className='d-flex align-items-center justify-content-center'>
                <a href={resume} download>
                        <img src={downloadIcon} style={{ height: '10em', width: 'auto' }} alt="Download Resume" />
                        <br /> Download Resume
                    </a>
                    </div>
        </main>
    )
}