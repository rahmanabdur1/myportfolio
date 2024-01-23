import React from 'react';
import './Hero.css';
import img from '../../assets/developer-img.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  return (
    <div className='hero-container'>
      <div className='hero'>
        <div className='hero-content'>
          <span>👋, MY NAME IS ABDUR RAHMAN</span>
          <span>
            <TypeAnimation
              sequence={[
                'I\'m a Developer',
                1000,
                'I\'m a Designer',
                1000,
                'I\'m a Programmer',
                1000,

              ]}
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block',     fontFamily: 'Jost, sans-serif' }}
              repeat={Infinity}
            />
          </span>
          <span>Based in Dhaka, Bangladesh.</span>         
          <div className='contact-btn'>
            <a href="#contact">
              LET'S START
            </a>
          </div>
        </div>
        <div className='hero-img'>
          <img src={img} alt='/' />
        </div>
      </div>
      <div className='path'></div>
    </div>
  );
};

export default Hero;
