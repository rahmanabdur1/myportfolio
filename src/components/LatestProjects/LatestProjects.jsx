import React from 'react';
import equidefi from '../../assets/myskills/images.jpg';
import sensa from '../../assets/myskills/sensa.png';
import './LatestProjects.css'

const LatestProjects = () => {
    return (
        <div className='projects-container' id='latestProjects'>
            <div className='projects'>
                <h2 className='heading'>LATEST PROJECTS</h2>
                <div className='project-content equidefi'>
                    <div className='project-img'>
                    <img src={equidefi} alt='' />                   
                    </div>
                    <div className='project-text'>
                        <span>WEB DEVELOPMENT</span>
                        <h2>Website Development for Investing Portal </h2>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a href=''>VIEW PROJECT</a>
                    </div>
                </div>
                <div className='project-content sensa '>
                    <div className='project-text'>
                    <span>WEB DEVELOPMENT</span>
                        <h2>Website Development for Your Calm Mnd Assistant </h2>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a href=''>VIEW PROJECT</a>
                    </div>
                    <div className='project-img'>
                    <img src={equidefi} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProjects;