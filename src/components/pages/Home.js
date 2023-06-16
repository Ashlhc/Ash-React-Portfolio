import React from 'react';
import '../../styles/Home.css';
import Cloud from '../../assets/images/Cloud.png';
import Moon from '../../assets/images/Moon.png';
import Mountain from '../../assets/images/Mountain.png';
import About from '../../assets/images/AboutMe.png';
import Portfolio from '../../assets/images/Portfolio.png';
import Resume from '../../assets/images/Resume.png';
import Contact from '../../assets/images/ContactMe.png';

export default function Home() {
  return (
    <main>
      <div className='homePage'>
        <img src={Cloud} alt='cloud' style={{width: 'auto'}}/>
        <img src={Moon} alt='moon' style={{width: 'auto'}}/>
        <img src={Mountain} alt='mountain' style={{width: 'auto'}}/>
        <img src={About} alt='about' style={{width: 'auto'}}/>
        <img src={Portfolio} alt='portfolio' style={{width: 'auto'}}/>
        <img src={Resume} alt='resume' style={{width: 'auto'}}/>
        <img src={Contact} alt='contact' style={{width: 'auto'}}/>
        <h3>Welcome to Ashleigh's Portfolio!</h3>
      </div>
    </main>
  )
}