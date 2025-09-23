// src/components/Services.jsx

import React from 'react';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">Skills</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i> {/* Changed icon for better representation */}
                        <h2>Web Developer</h2>
                        <p>I build modern, responsive web applications using React (Vite) and Tailwind CSS and custom design elements. I’ve developed projects like the EESA website and Student Notes Marketplace, integrating AI tools for enhanced functionality, and I’m proficient with VS Code and frontend development toolchains.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-lightbulb"></i>
                        <h2>Electrical Engineering</h2>
                        <p>I am developing skills in MATLAB Simulink, Arduino basics, and IoT applications, focusing on hands-on projects to explore smart systems and real-world Electrical Engineering applications as part of my Bachelor’s studies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;