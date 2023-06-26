import React from 'react';
import resume from '../../assets/files/Resume.docx';
import '../../styles/Resume.css';
import '../../styles/App.css';
import downloadIcon from '../../assets/images/download.png';

export default function Resume() {
    return (
            <div className='resume-page'>
                <h2 className='resume'>My Resume</h2>
                <a className='download'href={resume} download>
                        <img className='download-icon'src={downloadIcon}  alt="Download Resume" />
                        <br /> Download Resume
                    </a>
                    </div>

    )
}