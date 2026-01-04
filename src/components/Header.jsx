// // src/components/Header.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import logo from '../assets/logo.png';

// const Header = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const navVariants = {
//         hidden: { opacity: 0, y: -20 },
//         visible: (i) => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
//         })
//     };

//     return (
//         <div id="header" style={{ position: 'relative', overflow: 'hidden' }}>
            
//             {/* Minimalist Background Animation */}
//             <motion.div 
//                 className="bg-glow"
//                 animate={{
//                     scale: [1, 1.2, 1],
//                     x: [0, 30, 0],
//                     y: [0, -20, 0],
//                 }}
//                 transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                 }}
//                 style={{
//                     position: 'absolute',
//                     top: '10%',
//                     right: '10%',
//                     width: '300px',
//                     height: '300px',
//                     background: 'radial-gradient(circle, rgba(44, 201, 144, 0.15) 0%, rgba(44, 201, 144, 0) 70%)',
//                     filter: 'blur(60px)',
//                     zIndex: 0
//                 }}
//             />

//             <div className="container" style={{ position: 'relative', zIndex: 1 }}>
//                 <nav>
//                     <motion.img 
//                         src={logo} height="65px" width="120px" className="logo" alt="logo"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
                    
//                     <ul id="sidemenu" style={{ right: isMenuOpen ? '0' : '-200px' }}>
//                         {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item, i) => (
//                             <motion.li 
//                                 key={item}
//                                 custom={i}
//                                 initial="hidden"
//                                 animate="visible"
//                                 variants={navVariants}
//                             >
//                                 <a href={`#${item.toLowerCase() === 'home' ? 'header' : item.toLowerCase()}`}>
//                                     {item}
//                                 </a>
//                             </motion.li>
//                         ))}
//                         <i className="fa-solid fa-circle-xmark" onClick={() => setMenuOpen(false)}></i>
//                     </ul>
//                     <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
//                 </nav>

//                 <div className="header-text">
//                     <motion.p
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                     >
//                         Web Developer
//                     </motion.p>
                    
//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4 }}
//                     >
//                         Hi, I'm <span>Nikshay</span><br />From India
//                     </motion.h1>
//                 </div>

//                 {/* Creative Minimalist Scroll Indicator */}
//                 <motion.div 
//                     className="scroll-indicator"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.5, duration: 1 }}
//                     style={{
//                         position: 'absolute',
//                         bottom: '30px',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         gap: '8px'
//                     }}
//                 >
//                     <span style={{ fontSize: '12px', letterSpacing: '2px', color: '#2cc990', fontWeight: '300' }}>SCROLL</span>
//                     <div style={{
//                         width: '2px',
//                         height: '50px',
//                         background: 'rgba(44, 201, 144, 0.2)',
//                         position: 'relative',
//                         overflow: 'hidden'
//                     }}>
//                         <motion.div 
//                             animate={{ y: [0, 50] }}
//                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//                             style={{
//                                 width: '100%',
//                                 height: '20px',
//                                 background: '#2cc990',
//                                 position: 'absolute',
//                                 top: '-20px'
//                             }}
//                         />
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default Header;







// src/components/Header.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Sidebar Slide Animation
    const sidebarVariants = {
        closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
        opened: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    };

    // Link Stagger Animation
    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        opened: i => ({
            opacity: 1, 
            x: 0, 
            transition: { delay: 0.2 + (i * 0.1) } 
        })
    };

    const navLinks = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'];

    return (
        <div id="header" style={{ position: 'relative', overflow: 'hidden' }}>
            
            {/* Background Glow */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                    position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px',
                    background: 'radial-gradient(circle, rgba(44, 201, 144, 0.2) 0%, transparent 70%)',
                    filter: 'blur(60px)', zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <nav>
                    <motion.img 
                        src={logo} height="65px" width="120px" className="logo" alt="logo"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    />
                    
                    {/* Desktop Menu - Hidden on Mobile via CSS */}
                    <ul className="desktop-menu">
                        {navLinks.map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase() === 'home' ? 'header' : item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Icon - Hidden on Desktop */}
                    <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>

                <div className="header-text">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        Web Developer
                    </motion.p>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
                        Hi, I'm <span>Nikshay</span><br />From India
                    </motion.h1>
                </div>

                {/* --- MOBILE SIDEBAR --- */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Dark Overlay */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                                    background: 'rgba(0,0,0,0.7)', zIndex: 10
                                }}
                            />

                            {/* Animated Sidebar */}
                            <motion.div 
                                variants={sidebarVariants}
                                initial="closed"
                                animate="opened"
                                exit="closed"
                                style={{
                                    position: 'fixed', top: 0, right: 0, width: '250px', height: '100vh',
                                    background: '#121212', borderLeft: '2px solid #2cc990',
                                    padding: '50px 30px', zIndex: 11, display: 'flex', flexDirection: 'column'
                                }}
                            >
                                <i 
                                    className="fa-solid fa-xmark" 
                                    style={{ color: '#2cc990', fontSize: '25px', alignSelf: 'flex-end', cursor: 'pointer', marginBottom: '30px' }}
                                    onClick={() => setMenuOpen(false)}
                                ></i>

                                {navLinks.map((item, i) => (
                                    <motion.a 
                                        key={item}
                                        custom={i}
                                        variants={linkVariants}
                                        href={`#${item.toLowerCase() === 'home' ? 'header' : item.toLowerCase()}`}
                                        onClick={() => setMenuOpen(false)}
                                        style={{
                                            color: '#fff', textDecoration: 'none', fontSize: '20px',
                                            margin: '15px 0', fontWeight: '500', display: 'block'
                                        }}
                                        whileHover={{ x: 10, color: '#2cc990' }}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <motion.div animate={{ y: [0, 50] }} transition={{ duration: 1.5, repeat: Infinity }} className="scroll-line" />
                </div>
            </div>
        </div>
    );
}

export default Header;