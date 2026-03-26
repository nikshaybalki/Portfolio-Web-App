// // src/components/Footer.jsx

// import React from 'react';

// const Footer = () => {
//     return (
//         <div className="copyright">
//             <p>copyright <i className="fa-solid fa-copyright"></i> WEB DEVELOPER -- Nikshay . A . Balki</p>
//         </div>
//     );
// }

// export default Footer;













// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    // Function to handle smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ 
                background: '#080808', 
                padding: '40px 0', 
                textAlign: 'center', 
                position: 'relative' 
            }}
        >
            {/* --- 1. GLOWING SEPARATOR (Circuit Trace) --- */}
            <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '10%',
                    width: '80%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #2cc990, transparent)',
                    boxShadow: '0 0 10px rgba(44, 201, 144, 0.5)'
                }}
            />

            <div className="container" style={{ position: 'relative' }}>
                
                {/* --- 2. BACK TO TOP BUTTON (Circuit Node) --- */}
                <motion.div 
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.2, boxShadow: '0 0 20px #2cc990' }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        border: '2px solid #2cc990',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 30px',
                        cursor: 'pointer',
                        color: '#2cc990',
                        background: 'transparent'
                    }}
                >
                    <i className="fa-solid fa-chevron-up"></i>
                </motion.div>

                {/* --- 3. INTERACTIVE COPYRIGHT --- */}
                <p style={{ color: '#ababab', fontSize: '14px', letterSpacing: '1px' }}>
                    Copyright <i className="fa-regular fa-copyright" style={{ margin: '0 5px' }}></i> 
                    {new Date().getFullYear()} WEB DEVELOPER — 
                    <motion.span 
                        whileHover={{ color: '#2cc990', textShadow: '0 0 8px #2cc990' }}
                        style={{ 
                            color: '#fff', 
                            fontWeight: '600', 
                            cursor: 'pointer', 
                            marginLeft: '5px',
                            transition: 'color 0.3s'
                        }}
                    >
                        NIKSHAY . A . BALKI
                    </motion.span>
                </p>

                {/* Subtle Brand Tagline */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    style={{ 
                        marginTop: '15px', 
                        fontSize: '10px', 
                        color: '#2cc990', 
                        fontFamily: 'monospace',
                        textTransform: 'uppercase'
                    }}
                >
                    System Status: Optimized
                </motion.p>
            </div>
        </motion.footer>
    );
}

export default Footer;