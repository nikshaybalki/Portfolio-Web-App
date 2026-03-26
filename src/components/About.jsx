// // src/components/About.jsx

// import React, { useState } from 'react';
// import profileImage from '../assets/profile.jpeg'; // Make sure you have this image

// const About = () => {
//     const [activeTab, setActiveTab] = useState('skills');

//     const opentab = (tabname) => {
//         setActiveTab(tabname);
//     };

//     return (
//         <div id="about">
//             <div className="container">
//                 <div className="row">
//                     <div className="about-col-1">
//                         <img id="image" src={profileImage} alt="profile" />
//                     </div>
//                     <div className="about-col-2">
//                         <h1 className="sub-title">About Me</h1>
//                         <p>
//                             My name is Nikshay Avinash Balki. I build user-friendly digital experiences.
//                             Skilled in HTML, CSS, and JavaScript. Experienced with React.js and GSAP animations.
//                             I style with Tailwind CSS for a clean design. Currently pursuing B.Tech in Electrical Engineering.
//                             Studying at Walchand College of Engineering, Sangli. Passionate about frontend development.
//                         </p>
//                         <div className="tab-titles">
//                             <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
//                             <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
//                             <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
//                         </div>
//                         <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
//                             <ul>
//                                 <li><span>Web development</span><br />Skilled in modern frontend development using React (Vite), Tailwind CSS, GSAP animations and integrating AI tools to build visually rich, responsive web applications.</li>
//                                 <li><span>Electrical Engineering</span><br />Developing skills in MATLAB Simulink, Arduino basics, and exploring IoT applications in Electrical Engineering.</li>
//                             </ul>
//                         </div>
//                         <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
//                             <ul>
//                                 <li><span>5-6 (month)</span><br />Web Development</li>
//                                 <li><span>Hands-on Learning</span><br />MATLAB Simulink | Arduino Basics | IoT Applications</li>
//                             </ul>
//                         </div>
//                         <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
//                             <ul>
//                                 <li><span>2024-2028</span><br />pursuing B.Tech in Electrical Engineering, Studying at Walchand College of Engineering.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;








// src/components/About.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';

const About = () => {
    const [activeTab, setActiveTab] = useState('technical arsenal');

    // Variants for the tab content container
    const tabContentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1 // Makes list items appear one by one
            }
        },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };

    // Variants for individual list items
    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="about" style={{ overflow: 'hidden', padding: '80px 0' }}>
            <div className="container">
                <div className="row">



{/* --- Image Section --- */}
<motion.div 
    className="about-col-1"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    style={{ 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '50px', // Space for the background effects
    }}
>
    {/* Clean Profile Image */}
    <motion.div
        style={{
            position: 'relative',
            zIndex: 2,
            borderRadius: '20px',
            border: '2px solid rgba(44, 201, 144, 0.4)',
            overflow: 'hidden',
            backgroundColor: '#080808',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        }}
    >
        <img 
            id="image" 
            src={profileImage} 
            alt="profile" 
            style={{ 
                width: '100%', 
                display: 'block',
                filter: 'contrast(1.05) brightness(1)',
            }}
        />
    </motion.div>
</motion.div>
                    {/* --- Content Section --- */}
                    <div className="about-col-2">
                        <motion.h1 
                            className="sub-title"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.h1>
                        
                        <motion.div 
                            className="description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{ color: '#ababab', lineHeight: '1.6', margin: '20px 0' }}
                        >
                            <p style={{ marginBottom: '15px', fontWeight: '500', color: '#fff' }}>
                                Frontend Developer | WCE Sangli
                            </p>
                            <p>
                                Building high-performance, interactive web experiences. I bridge the gap between complex logic and intuitive UI, focusing on speed, scalability, and cinematic design.
                            </p>
                        </motion.div>

                        {/* --- Tabs Selection --- */}
                        <div className="tab-titles" style={{ display: 'flex', margin: '20px 0 40px', flexWrap: 'wrap', gap: '20px' }}>
                            {['technical arsenal', 'core projects', 'education'].map((tab) => (
                                <div 
                                    key={tab}
                                    className={`tab-links ${activeTab === tab ? 'active-link' : ''}`} 
                                    onClick={() => setActiveTab(tab)}
                                    style={{ cursor: 'pointer', position: 'relative', textTransform: 'capitalize' }}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div 
                                            layoutId="activeTabUnderline"
                                            style={{
                                                position: 'absolute', bottom: '-8px', left: 0,
                                                width: '100%', height: '3px', background: '#2cc990'
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* --- Animated Tab Content --- */}
                        <div className="tab-container" style={{ minHeight: '300px' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {activeTab === 'technical arsenal' && (
                                        <ul style={{ listStyle: 'none' }}>
                                            <motion.li variants={listItemVariants}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Core:</span> React.js, JavaScript (ES6+), Vite, Node.js.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Styling:</span> Tailwind CSS, Responsive Design.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Motion:</span> GSAP (GreenSock), ScrollTrigger, Framer Motion.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Workflow:</span> Git, GitHub, Vercel Deployment.
                                            </motion.li>
                                        </ul>
                                    )}

                                    {activeTab === 'core projects' && (
                                        <ul style={{ listStyle: 'none' }}>
                                            <motion.li variants={listItemVariants}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>EESA:</span> Official student association portal; high-traffic resource hub.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Snapcut:</span> Background removal utility; seamless API integration.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Aura Creative:</span> Agency showcase; advanced GSAP animations and premium UX.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>NB Notes Hub:</span> Resource marketplace; structured information architecture.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>NexGen Series:</span> High-conversion business templates and landing pages.
                                            </motion.li>
                                        </ul>
                                    )}

                                    {activeTab === 'education' && (
                                        <ul style={{ listStyle: 'none' }}>
                                            <motion.li variants={listItemVariants}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>B.Tech | Walchand College of Engineering, Sangli</span><br />
                                                (2024–2028)
                                            </motion.li>
                                        </ul>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;