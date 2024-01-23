import React from 'react';
import './Myexperience.css'
import img from '../../assets/developer-img.jpg';
const Myexperience = () => {

    return (
        <div className='experience-container'>
            <div className='experience'>
                <div className='experience-img'>
                    <img src={img} alt='/me' />
                </div>
                <div className='experience-content' >
                    <h2>I'm a Freelancer Front-end Developer with over 1+ years of practical experience.</h2>
                    <p>I'm a Freelancer Front-end Developer with over 1+ years of practical experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                    <div className='additional-info'>
                        <div className='additional-text'>
                            <div className='text'>
                                <span>28+</span>
                                <span>Projet Completed</span>
                            </div>
                            <div className='text'>
                                <span>00+</span>
                                <span>Happy Clients</span>
                            </div>
                        </div>
                        <div className='additional-btn'>
                            <a href="#contact">
                                CONTACT ME
                            </a>
                            <a href="#contact">
                                DOWNLOAD CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myexperience;