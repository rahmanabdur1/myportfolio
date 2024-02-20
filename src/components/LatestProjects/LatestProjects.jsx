import React from 'react';
import equidefi from '../../assets/myskills/images.jpg';
import sensa from '../../assets/myskills/download.jpg';
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
                        <a href='https://github.com/rahmanabdur1/equidefi'  target='_blank'>VIEW PROJECT</a>
                        <a href='https://equidefi.com/'  target='_blank'>VIEW CODE</a>
                    </div>
                </div>
                <div className='project-content sensa '>
                    <div className='project-text'>
                    <span>WEB DEVELOPMENT</span>
                        <h2>Website Development for Your MIND Health </h2>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a href='https://github.com/rahmanabdur1/sensa-health'  target='_blank'>VIEW PROJECT</a>
                        <a href='https://sensa.health/'  target='_blank'>VIEW  CODE</a>
                    </div>
                    <div className='project-img'>
                    <img src={sensa} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProjects;