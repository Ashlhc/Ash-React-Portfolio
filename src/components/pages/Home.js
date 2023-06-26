import React from 'react';
import '../../styles/Home.css';
import '../../styles/App.css';
import Cloud from '../../assets/images/Cloud.png';
import Moon from '../../assets/images/Moon.png';
import Mountain from '../../assets/images/Mountain.png';
import Footer from '../Footer';



export default function Home() {


  return (
    <div>
      <h2 id='my-portfolio'>Welcome to Ashleigh's Portfolio!</h2>
      <img className='Moon'src={Moon} alt='moon'/>
      <img className='Mountain' src={Mountain} alt='mountain'/>
        <img className='Cloud'src={Cloud} alt='cloud'/>
        <Footer />
    </div>

  )
}