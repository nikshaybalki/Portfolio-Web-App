// src/components/Portfolio.jsx

import React from 'react';
import eesaImg from '../assets/eesa.jpeg';
import noteshubImg from '../assets/NotesHub.jpeg';
import todoImg from '../assets/todo.png';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Projects</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={eesaImg} alt="EESA Project" />
                        <div className="layer">
                            <h3>EESA CLUB WEB APPLICATION</h3>
                            <p>As the developer for the EESA Club Website, I built a modern, responsive platform using React, Tailwind CSS, and Framer Motion. This project showcases my skills in frontend development, debugging, and UI animation.</p>
                            <a href="https://wceeesa.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={noteshubImg} alt="NotesHub Project" />
                        <div className="layer">
                            <h3>NotesHub WEB APPLICATION</h3>
                            <p>I am currently building a full-stack marketplace for student notes (frontend is complete). The development process is accelerated by leveraging AI tools for project planning and code generation.</p>
                            <a href="https://nbnoteshub.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={todoImg} alt="To-Do List Project" />
                        <div className="layer">
                            <h3>To Do List application</h3>
                            <p>A simple and clean to-do list application to manage tasks, featuring a completion checkbox and a minimalist design.</p>
                            <a href="https://to-do-list-nb.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;