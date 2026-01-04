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
    const [activeTab, setActiveTab] = useState('skills');

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



{/* --- Image Section: Stable Plasma Backdrop --- */}
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
    {/* 1. The Electrical Background Layer */}
    <div style={{ position: 'absolute', width: '130%', height: '130%', zIndex: 0 }}>
        
        {/* Jagged Rotating Flux Lines */}
        {[...Array(3)].map((_, i) => (
            <motion.svg
                key={i}
                viewBox="0 0 200 200"
                style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    opacity: 0.4,
                    filter: 'blur(1px) drop-shadow(0 0 5px #2cc990)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
            >
                <motion.path
                    // A jagged, circular electrical path
                    d="M100,20 L110,40 L130,35 L140,60 L170,70 L160,100 L180,130 L150,140 L140,170 L100,160 L70,180 L60,150 L30,140 L40,110 L20,80 L50,70 L60,40 L90,30 Z"
                    fill="transparent"
                    stroke="#2cc990"
                    strokeWidth="0.5"
                    strokeDasharray="10, 5"
                    animate={{ strokeDashoffset: [0, -50] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </motion.svg>
        ))}

        {/* Static Ambient Glow */}
        <motion.div
            style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%', height: '70%',
                background: 'radial-gradient(circle, rgba(44, 201, 144, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1
            }}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
    </div>

    {/* 2. The Clean, Undisturbed Profile Image */}
    <motion.div
        style={{
            position: 'relative',
            zIndex: 2, // Keeps image on top of the lightning
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
                // Keeping image colors natural and clear
                filter: 'contrast(1.05) brightness(1)',
            }}
        />
    </motion.div>

    {/* 3. Small Fixed Terminal Nodes (Background Detail) */}
    {[0, 90, 180, 270].map((angle, i) => (
        <motion.div
            key={i}
            style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                backgroundColor: '#2cc990',
                borderRadius: '50%',
                zIndex: 1,
                // Position nodes in a circle around the image
                transform: `rotate(${angle}deg) translate(140px)`,
                boxShadow: '0 0 10px #2cc990'
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
    ))}
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
                                Electrical Engineering Student @ WCE Sangli | IoT & Embedded Systems | Building the Bridge Between Hardware and the Cloud
                            </p>
                            <p>
                                I am a 2nd-year Electrical Engineering student at Walchand College of Engineering, Sangli, driven by a single mission: mastering the end-to-end pipeline of "Smart Systems." While my foundation is in electrical circuits and power, my passion lies in making those systems intelligent and connected.
                            </p>
                        </motion.div>

                        {/* --- Tabs Selection --- */}
                        <div className="tab-titles" style={{ display: 'flex', margin: '20px 0 40px' }}>
                            {['skills', 'experience', 'education'].map((tab) => (
                                <p 
                                    key={tab}
                                    className={`tab-links ${activeTab === tab ? 'active-link' : ''}`} 
                                    onClick={() => setActiveTab(tab)}
                                    style={{ cursor: 'pointer', marginRight: '50px', position: 'relative', textTransform: 'capitalize' }}
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
                                </p>
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
                                    {activeTab === 'skills' && (
                                        <ul style={{ listStyle: 'none' }}>
                                            <motion.li variants={listItemVariants}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Electrical Engineering | The Core</span><br />
                                                "Engineering the physical foundation." ⚡ I specialize in circuit design and embedded logic. Using C++, MATLAB, and simulation tools like Proteus and PSpice, I develop firmwares for Arduino and ESP32.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>IoT & Connectivity | The Bridge</span><br />
                                                "Bringing hardware into the digital ecosystem." ☁️ I bridge the gap between "things" and the cloud leveraging MQTT protocols (Adafruit IO) and ESP32 wireless features.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Data Analytics | The Insight</span><br />
                                                "Turning raw signals into intelligence." 📊 I use Python (NumPy, Pandas) and Matplotlib to process data and visualize trends for better engineering decisions.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Web Development | The Interface</span><br />
                                                "Building the command center." 🌐 I use React, GSAP, and Tailwind CSS to create dashboards to monitor and control hardware projects remotely.
                                            </motion.li>
                                        </ul>
                                    )}

                                    {activeTab === 'experience' && (
                                        <ul style={{ listStyle: 'none' }}>
                                            <motion.li variants={listItemVariants}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Hardware Tools:</span> MATLAB, Arduino IDE, ESP32, Proteus, PSpice, C++.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>IoT Stack:</span> Architecture Design, Prototyping, MQTT (Adafruit IO), Embedded Coding.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Data Science:</span> Python, Pandas, NumPy, Matplotlib, Microsoft Excel.
                                            </motion.li>
                                            <motion.li variants={listItemVariants} style={{ marginTop: '15px' }}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>Web Tech:</span> React, JavaScript, Vite, GSAP, Tailwind CSS, Node.js.
                                            </motion.li>
                                        </ul>
                                    )}

                                    {activeTab === 'education' && (
                                        <ul style={{ listStyle: 'none' }}>
                                            <motion.li variants={listItemVariants}>
                                                <span style={{ color: '#2cc990', fontWeight: '600' }}>2024 - 2028 (Pursuing)</span><br />
                                                B.Tech in Electrical Engineering<br />
                                                Walchand College of Engineering, Sangli.
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