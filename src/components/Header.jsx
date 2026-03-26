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
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

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
        <div id="header" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            
            {/* Interactive Background Glow following mouse */}
            <motion.div 
                animate={{ 
                    x: mousePosition.x - 250, 
                    y: mousePosition.y - 250,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{
                    position: 'absolute', width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(44, 201, 144, 0.15) 0%, transparent 60%)',
                    filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
                    borderRadius: '50%'
                }}
            />

            {/* Floating Orbs for extra attractiveness */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 5 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i
                    }}
                    style={{
                        position: 'absolute',
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                        width: `${30 + i * 10}px`,
                        height: `${30 + i * 10}px`,
                        background: 'radial-gradient(circle, rgba(44, 201, 144, 0.4) 0%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(5px)',
                        zIndex: 0
                    }}
                />
            ))}

            {/* Grid Pattern overlay */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, opacity: 0.05,
                backgroundImage: 'linear-gradient(#2cc990 1px, transparent 1px), linear-gradient(90deg, #2cc990 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <nav style={{ paddingTop: '20px' }}>
                    <motion.img 
                        src={logo} height="65px" width="120px" className="logo" alt="logo"
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    
                    {/* Desktop Menu */}
                    <ul className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        {navLinks.map((item, index) => (
                            <motion.li key={item} 
                                initial={{ opacity: 0, y: -20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <a href={`#${item.toLowerCase() === 'home' ? 'header' : item.toLowerCase()}`}
                                   style={{ position: 'relative', display: 'inline-block', padding: '5px 0' }}
                                   className="nav-link-hover"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Icon */}
                    <motion.div 
                        className="menu-icon" 
                        onClick={() => setMenuOpen(true)}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        style={{ cursor: 'pointer', fontSize: '24px', color: '#fff', zIndex: 20 }}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </motion.div>
                </nav>

                <div className="header-text" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '-10%' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ display: 'inline-block', marginBottom: '20px' }}
                    >
                        <span style={{ 
                            padding: '8px 16px', border: '1px solid rgba(44,201,144,0.3)', 
                            borderRadius: '20px', fontSize: '14px', color: '#2cc990',
                            letterSpacing: '1px', backgroundColor: 'rgba(44,201,144,0.05)'
                        }}>
                            WEB DEVELOPER & ENGINEER
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: '700', lineHeight: '1.1' }}
                    >
                        Hi, I'm <br/>
                        <span style={{ 
                            color: 'transparent', WebkitTextStroke: '1px #2cc990',
                            backgroundImage: 'linear-gradient(45deg, #2cc990, #177a56)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            display: 'inline-block',
                            paddingRight: '10px'
                        }}>Nikshay</span><br />
                        <motion.span 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                            style={{ fontSize: 'clamp(30px, 5vw, 60px)', color: '#fff' }}
                        >
                            From India.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{ maxWidth: '500px', marginTop: '20px', color: '#ababab', fontSize: '16px', lineHeight: '1.6' }}
                    >
                        I build intelligent, responsive, and highly interactive digital experiences bridging the gap between hardware and the web.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        style={{ marginTop: '40px', display: 'flex', gap: '20px' }}
                    >
                        <a href="#portfolio" style={{
                            padding: '12px 30px', background: '#2cc990', color: '#080808', 
                            borderRadius: '30px', textDecoration: 'none', fontWeight: '600',
                            boxShadow: '0 0 15px rgba(44,201,144,0.4)', transition: 'all 0.3s'
                        }} className="btn-primary">View Work</a>
                        
                        <a href="#contact" style={{
                            padding: '12px 30px', background: 'transparent', color: '#fff', 
                            border: '1px solid #2cc990', borderRadius: '30px', textDecoration: 'none', 
                            fontWeight: '600', transition: 'all 0.3s'
                        }} className="btn-secondary">Contact Me</a>
                    </motion.div>
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
                                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', zIndex: 99
                                }}
                            />

                            {/* Animated Sidebar */}
                            <motion.div 
                                variants={sidebarVariants}
                                initial="closed"
                                animate="opened"
                                exit="closed"
                                style={{
                                    position: 'fixed', top: 0, right: 0, width: '280px', height: '100vh',
                                    background: '#111', borderLeft: '1px solid rgba(44,201,144,0.2)',
                                    padding: '50px 30px', zIndex: 100, display: 'flex', flexDirection: 'column',
                                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                                }}
                            >
                                <i 
                                    className="fa-solid fa-xmark" 
                                    style={{ color: '#2cc990', fontSize: '28px', alignSelf: 'flex-end', cursor: 'pointer', marginBottom: '40px' }}
                                    onClick={() => setMenuOpen(false)}
                                ></i>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    {navLinks.map((item, i) => (
                                        <motion.a 
                                            key={item}
                                            custom={i}
                                            variants={linkVariants}
                                            href={`#${item.toLowerCase() === 'home' ? 'header' : item.toLowerCase()}`}
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                color: '#fff', textDecoration: 'none', fontSize: '22px',
                                                fontWeight: '500', display: 'block', borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                paddingBottom: '10px'
                                            }}
                                            whileHover={{ x: 10, color: '#2cc990' }}
                                        >
                                            {item}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Creative Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
                    }}
                >
                    <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#2cc990', fontWeight: '400' }}>SCROLL</span>
                    <div style={{
                        width: '1px', height: '60px', background: 'rgba(44,201,144,0.2)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <motion.div 
                            animate={{ y: [-20, 60] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            style={{
                                width: '100%', height: '20px', background: 'linear-gradient(to bottom, transparent, #2cc990)',
                                position: 'absolute', top: 0
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Header;