// src/components/About.jsx

import React, { useState } from 'react';
import profileImage from '../assets/profile.jpeg'; // Make sure you have this image

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabname) => {
        setActiveTab(tabname);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img id="image" src={profileImage} alt="profile" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            My name is Nikshay Avinash Balki. I build user-friendly digital experiences.
                            Skilled in HTML, CSS, and JavaScript. Experienced with React.js and GSAP animations.
                            I style with Tailwind CSS for a clean design. Currently pursuing B.Tech in Electrical Engineering.
                            Studying at Walchand College of Engineering, Sangli. Passionate about frontend development.
                        </p>
                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>Web development</span><br />Skilled in modern frontend development using React (Vite), Tailwind CSS, GSAP animations and integrating AI tools to build visually rich, responsive web applications.</li>
                                <li><span>Electrical Engineering</span><br />Developing skills in MATLAB Simulink, Arduino basics, and exploring IoT applications in Electrical Engineering.</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>5-6 (month)</span><br />Web Development</li>
                                <li><span>Hands-on Learning</span><br />MATLAB Simulink | Arduino Basics | IoT Applications</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2024-2028</span><br />pursuing B.Tech in Electrical Engineering, Studying at Walchand College of Engineering.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;