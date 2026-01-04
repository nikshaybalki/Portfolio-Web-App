// // src/components/Portfolio.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import eesaImg from '../assets/eesa.jpeg';
// import noteshubImg from '../assets/NotesHub.jpeg';
// import todoImg from '../assets/todo.png';

// const Portfolio = () => {
//     const projects = [
//         {
//             title: "EESA CLUB WEB APPLICATION",
//             desc: "A responsive platform for the EESA Club using React and Tailwind CSS, featuring high-end UI animations.",
//             img: eesaImg,
//             link: "https://wceeesa.vercel.app"
//         },
//         {
//             title: "NotesHub MARKETPLACE",
//             desc: "A full-stack student marketplace for sharing notes. Features AI-accelerated development planning.",
//             img: noteshubImg,
//             link: "https://nbnoteshub.vercel.app"
//         },
//         {
//             title: "To-Do List Application",
//             desc: "A minimalist task management tool featuring persistent storage and a clean design philosophy.",
//             img: todoImg,
//             link: "https://to-do-list-nb.vercel.app"
//         }
//     ];

//     return (
//         <div id="portfolio" style={{ padding: '80px 0', background: '#080808' }}>
//             <div className="container">
//                 <motion.h1 
//                     className="sub-title"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     My Projects
//                 </motion.h1>

//                 <div className="work-list" style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//                     gridGap: '40px',
//                     marginTop: '50px'
//                 }}>
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={index}
//                             initial="initial"
//                             whileHover="hover"
//                             style={{
//                                 position: 'relative',
//                                 borderRadius: '15px',
//                                 overflow: 'hidden',
//                                 background: '#111',
//                                 border: '1px solid rgba(44, 201, 144, 0.1)',
//                                 aspectRatio: '16/10',
//                                 cursor: 'pointer'
//                             }}
//                         >
//                             {/* 1. BACKGROUND DIGITAL GRID (Visible through transparent image) */}
//                             <div style={{
//                                 position: 'absolute',
//                                 inset: 0,
//                                 backgroundImage: `radial-gradient(rgba(44, 201, 144, 0.15) 1px, transparent 1px)`,
//                                 backgroundSize: '20px 20px',
//                                 zIndex: 0
//                             }} />

//                             {/* 2. PROJECT IMAGE (High Transparency) */}
//                             <motion.img 
//                                 src={project.img} 
//                                 alt={project.title}
//                                 variants={{
//                                     initial: { opacity: 0.4, scale: 1 },
//                                     hover: { opacity: 0.7, scale: 1.1 }
//                                 }}
//                                 transition={{ duration: 0.4 }}
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                     zIndex: 1
//                                 }}
//                             />

//                             {/* 3. MOVING SCANLINE EFFECT */}
//                             <motion.div 
//                                 animate={{ top: ['-10%', '110%'] }}
//                                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                                 style={{
//                                     position: 'absolute',
//                                     left: 0, width: '100%', height: '2px',
//                                     background: 'linear-gradient(90deg, transparent, #2cc990, transparent)',
//                                     boxShadow: '0 0 10px #2cc990',
//                                     zIndex: 2,
//                                     pointerEvents: 'none'
//                                 }}
//                             />

//                             {/* 4. OVERLAY CONTENT */}
//                             <motion.div 
//                                 variants={{
//                                     initial: { background: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)' },
//                                     hover: { background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }
//                                 }}
//                                 style={{
//                                     position: 'absolute',
//                                     inset: 0,
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     textAlign: 'center',
//                                     padding: '0 30px',
//                                     zIndex: 3
//                                 }}
//                             >
//                                 <motion.h3 
//                                     variants={{
//                                         initial: { opacity: 0, y: 20 },
//                                         hover: { opacity: 1, y: 0 }
//                                     }}
//                                     style={{ color: '#2cc990', fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}
//                                 >
//                                     {project.title}
//                                 </motion.h3>
                                
//                                 <motion.p 
//                                     variants={{
//                                         initial: { opacity: 0, y: 20 },
//                                         hover: { opacity: 1, y: 0 }
//                                     }}
//                                     transition={{ delay: 0.1 }}
//                                     style={{ color: '#fff', fontSize: '13px', lineHeight: '1.4', marginBottom: '20px' }}
//                                 >
//                                     {project.desc}
//                                 </motion.p>

//                                 <motion.a 
//                                     href={project.link} 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     variants={{
//                                         initial: { opacity: 0, scale: 0.5 },
//                                         hover: { opacity: 1, scale: 1 }
//                                     }}
//                                     whileHover={{ scale: 1.2, backgroundColor: '#2cc990', color: '#fff' }}
//                                     style={{
//                                         width: '45px',
//                                         height: '45px',
//                                         background: '#fff',
//                                         color: '#080808',
//                                         borderRadius: '50%',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         textDecoration: 'none',
//                                         fontSize: '18px'
//                                     }}
//                                 >
//                                     <i className="fa-solid fa-link"></i>
//                                 </motion.a>
//                             </motion.div>

//                             {/* 5. SVG BORDER DRAWING (Hover Effect) */}
//                             <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 4, pointerEvents: 'none' }}>
//                                 <motion.rect
//                                     width="100%" height="100%"
//                                     rx="15" fill="none"
//                                     stroke="#2cc990" strokeWidth="4"
//                                     variants={{
//                                         initial: { pathLength: 0, opacity: 0 },
//                                         hover: { pathLength: 1, opacity: 1 }
//                                     }}
//                                     transition={{ duration: 0.8 }}
//                                 />
//                             </svg>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Portfolio;



















// src/components/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import eesaImg from '../assets/eesa.jpeg';
import noteshubImg from '../assets/NotesHub.jpeg';
import todoImg from '../assets/todo.png';

const Portfolio = () => {
    const projects = [
        {
            title: "EESA CLUB WEB APPLICATION",
            desc: "Built a modern, responsive platform for the WCE EESA Club using React, Tailwind, and Framer Motion for high-end UI.",
            img: eesaImg,
            link: "https://wceeesa.vercel.app"
        },
        {
            title: "NotesHub MARKETPLACE",
            desc: "A full-stack student marketplace for sharing notes. Frontend is complete with high-performance search and filter logic.",
            img: noteshubImg,
            link: "https://nbnoteshub.vercel.app"
        },
        {
            title: "To-Do List Application",
            desc: "Minimalist task management tool with local storage persistence and a clean 'stable current' design philosophy.",
            img: todoImg,
            link: "https://to-do-list-nb.vercel.app"
        }
       
    ];

    return (
        <section id="portfolio" style={{ padding: '80px 0', background: '#080808', color: '#fff' }}>
            <div className="container">
                <motion.h1 
                    className="sub-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '50px', fontSize: 'clamp(32px, 5vw, 60px)' }}
                >
                    My Projects
                </motion.h1>

                <div className="work-list" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover="hover"
                            style={{
                                position: 'relative',
                                borderRadius: '15px',
                                background: '#111',
                                border: '1px solid #222',
                                overflow: 'hidden',
                                aspectRatio: '4/3', // Forces identical size across all devices
                                cursor: 'pointer'
                            }}
                        >
                            {/* --- Project Image --- */}
                            <motion.img 
                                src={project.img} 
                                alt={project.title}
                                variants={{ hover: { scale: 1.1 } }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.8)'
                                }}
                            />

                            {/* --- High-Contrast Text Layer --- */}
                            <motion.div 
                                variants={{
                                    initial: { opacity: 0, y: 20 },
                                    hover: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.4) 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '30px',
                                    zIndex: 2
                                }}
                            >
                                <h3 style={{ color: '#2cc990', fontSize: '20px', marginBottom: '10px' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: '#ddd', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>
                                    {project.desc}
                                </p>
                                <motion.a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, backgroundColor: '#2cc990' }}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        background: '#fff',
                                        color: '#080808',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <i className="fa-solid fa-link"></i>
                                </motion.a>
                            </motion.div>

                            {/* --- Constant Electrical Scanning Line --- */}
                            <motion.div 
                                animate={{ top: ['0%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    left: 0, width: '100%', height: '2px',
                                    background: 'rgba(44, 201, 144, 0.4)',
                                    boxShadow: '0 0 10px #2cc990',
                                    zIndex: 1,
                                    pointerEvents: 'none'
                                }}
                            />

                            {/* --- Corner HUD Brackets --- */}
                            <div style={{
                                position: 'absolute',
                                top: '15px', left: '15px',
                                width: '25px', height: '25px',
                                borderTop: '2px solid #2cc990',
                                borderLeft: '2px solid #2cc990',
                                zIndex: 3
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '15px', right: '15px',
                                width: '25px', height: '25px',
                                borderBottom: '2px solid #2cc990',
                                borderRight: '2px solid #2cc990',
                                zIndex: 3
                            }} />
                        </motion.div>
                    ))}
                </div>

                <motion.a 
                    // href="#" 
                    className="btn"
                    whileHover={{ scale: 1.05, background: '#2cc990' }}
                    style={{
                        display: 'block',
                        margin: '60px auto',
                        width: 'fit-content',
                        border: '1px solid #2cc990',
                        padding: '14px 50px',
                        borderRadius: '6px',
                        color: '#fff',
                        textDecoration: 'none'
                    }}
                >
                    View All Projects
                </motion.a>
            </div>
        </section>
    );
}

export default Portfolio;