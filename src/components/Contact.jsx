// // src/components/Contact.jsx

// import React, { useState } from 'react';

// const Contact = () => {
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevents the page from refreshing
//         setMessage('Message sent successfully!');
        
//         // Clear the message after 5 seconds
//         setTimeout(() => {
//             setMessage('');
//         }, 5000);

//         // Reset the form fields
//         e.target.reset();
//     };

//     return (
//         <div id="contact">
//             <div className="container">
//                 <div className="row">
//                     <div className="contact-left">
//                         <h1 className="sub-title">Contact Me</h1>
//                         <p><i className="fa-solid fa-share-from-square"></i> in LinkedIn</p>
//                         <p><i className="fa-solid fa-phone"></i> LinkedIn</p>
//                         <div className="social-icons">
//                             <a href="https://www.linkedin.com/in/nikshay-balki-7b2909321" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-linkedin"></i>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="contact-right">
//                         <form onSubmit={handleSubmit}>
//                             <input type="text" name="Name" placeholder="Your Name" required />
//                             <input type="email" name="Email" placeholder="Your Email" required />
//                             <textarea name="Message" rows="10" placeholder="Your Message"></textarea>
//                             <button type="submit" className="btn btn2">Submit</button>
//                         </form>
//                         <span id="msg">{message}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;













// // src/components/Contact.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Contact = () => {
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setMessage('Message sent successfully');
//         setTimeout(() => setMessage(''), 5000);
//         e.target.reset();
//     };

//     return (
//         <section id="contact" style={{ padding: '100px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>
            
//             {/* --- 1. AMBIENT COLOR CORE (Background Glow) --- */}
//             <motion.div 
//                 animate={{ 
//                     scale: [1, 1.2, 1],
//                     opacity: [0.15, 0.3, 0.15] 
//                 }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 style={{
//                     position: 'absolute',
//                     top: '20%',
//                     right: '-10%',
//                     width: '500px',
//                     height: '500px',
//                     background: 'radial-gradient(circle, #2cc990 0%, transparent 70%)',
//                     filter: 'blur(80px)',
//                     zIndex: 0,
//                     pointerEvents: 'none'
//                 }}
//             />

//             <div className="container" style={{ position: 'relative', zIndex: 1 }}>
//                 <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px' }}>
                    
//                     {/* --- Left Side: Minimal Info --- */}
//                     <div className="contact-left" style={{ flex: '1', minWidth: '280px' }}>
//                         {/* Shimmering Text Effect */}
//                         <motion.h1 
//                             animate={{ color: ["#ffffff", "#2cc990", "#ffffff"] }}
//                             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                             style={{ fontSize: 'clamp(30px, 4vw, 50px)', marginBottom: '40px', fontWeight: '700' }}
//                         >
//                             Get In Touch
//                         </motion.h1>
                        
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//                             <motion.p 
//                                 whileHover={{ x: 10, color: "#2cc990" }}
//                                 style={{ color: '#ababab', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'default' }}
//                             >
//                                 <i className="fa-solid fa-paper-plane" style={{ color: '#2cc990' }}></i> 
//                                 nikshaybalki@gmail.com
//                             </motion.p>
                            
//                             <div className="social-icons" style={{ marginTop: '20px' }}>
//                                 <motion.a 
//                                     href="https://www.linkedin.com/in/nikshay-balki-7b2909321" 
//                                     target="_blank" rel="noopener noreferrer"
//                                     whileHover={{ scale: 1.1, color: '#2cc990' }}
//                                     style={{ fontSize: '35px', color: '#fff', display: 'inline-block' }}
//                                 >
//                                     <i className="fa-brands fa-linkedin"></i>
//                                 </motion.a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* --- Right Side: Minimalist Form --- */}
//                     <div className="contact-right" style={{ flex: '1.5', minWidth: '280px' }}>
//                         <form onSubmit={handleSubmit}>
//                             {['Name', 'Email'].map((field) => (
//                                 <div key={field} style={{ position: 'relative', marginBottom: '35px' }}>
//                                     <motion.input 
//                                         type={field === 'Email' ? 'email' : 'text'} 
//                                         name={field} 
//                                         placeholder={field.toUpperCase()} 
//                                         required 
//                                         whileFocus={{ backgroundColor: "rgba(44, 201, 144, 0.03)" }}
//                                         style={minimalInputStyle}
//                                     />
//                                     {/* Line animation */}
//                                     <motion.div 
//                                         style={{ position: 'absolute', bottom: 0, left: 0, height: '1.5px', background: '#2cc990', width: '0%' }}
//                                         whileFocus={{ width: '100%' }}
//                                     />
//                                 </div>
//                             ))}

//                             <div style={{ position: 'relative', marginBottom: '35px' }}>
//                                 <motion.textarea 
//                                     name="Message" rows="5" placeholder="MESSAGE"
//                                     whileFocus={{ backgroundColor: "rgba(44, 201, 144, 0.03)" }}
//                                     style={{ ...minimalInputStyle, border: '1px solid #1a1a1a', padding: '15px' }}
//                                 ></motion.textarea>
//                             </div>

//                             <motion.button 
//                                 type="submit" 
//                                 whileHover={{ 
//                                     backgroundColor: '#2cc990', 
//                                     color: '#080808',
//                                     boxShadow: '0 0 20px rgba(44, 201, 144, 0.4)' 
//                                 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 style={minimalButtonStyle}
//                             >
//                                 SEND MESSAGE
//                             </motion.button>
//                         </form>

//                         <AnimatePresence>
//                             {message && (
//                                 <motion.p 
//                                     initial={{ opacity: 0, filter: 'blur(5px)' }}
//                                     animate={{ opacity: 1, filter: 'blur(0px)' }}
//                                     exit={{ opacity: 0 }}
//                                     style={{ 
//                                         marginTop: '25px', 
//                                         color: '#2cc990', 
//                                         fontWeight: '600',
//                                         textShadow: '0 0 10px rgba(44, 201, 144, 0.5)' 
//                                     }}
//                                 >
//                                     {message}
//                                 </motion.p>
//                             )}
//                         </AnimatePresence>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// // Minimalist Styles
// const minimalInputStyle = {
//     width: '100%',
//     background: 'transparent',
//     border: 'none',
//     borderBottom: '1px solid #222',
//     padding: '12px 5px',
//     color: '#fff',
//     fontSize: '14px',
//     letterSpacing: '1px',
//     outline: 'none',
//     transition: 'all 0.4s ease'
// };

// const minimalButtonStyle = {
//     background: 'transparent',
//     border: '1px solid #2cc990',
//     color: '#2cc990',
//     padding: '14px 50px',
//     fontSize: '13px',
//     fontWeight: '700',
//     letterSpacing: '2px',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     transition: 'all 0.3s ease'
// };

// export default Contact;



















                     /////////////////////// for google sheet code 



                     // src/components/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Replace this with your actual Google Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxinyO2a5p_vv4dAvn2qYH5CDor-BTfnFVzHoABIIYiLUuw_ofW6QQDIGhUruusfBjtww/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('Sending message...');

        // Use FormData to capture all input values
        const formData = new FormData(e.target);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                setIsSubmitting(false);
                setMessage('Message sent successfully!');
                
                // Clear success message after 5 seconds
                setTimeout(() => setMessage(''), 5000);
                
                // Reset the form
                e.target.reset();
            })
            .catch(error => {
                setIsSubmitting(false);
                setMessage('Error! Please try again.');
                console.error('Error!', error.message);
            });
    };

    return (
        <section id="contact" style={{ padding: '100px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background Glow */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px',
                    background: 'radial-gradient(circle, #2cc990 0%, transparent 70%)',
                    filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px' }}>
                    
                    {/* Left Side */}
                    <div className="contact-left" style={{ flex: '1', minWidth: '280px' }}>
                        <motion.h1 
                            animate={{ color: ["#ffffff", "#2cc990", "#ffffff"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ fontSize: 'clamp(30px, 4vw, 50px)', marginBottom: '40px', fontWeight: '700' }}
                        >
                            Get In Touch
                        </motion.h1>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <motion.p whileHover={{ x: 10, color: "#2cc990" }} style={{ color: '#ababab', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'default' }}>
                                <i className="fa-solid fa-paper-plane" style={{ color: '#2cc990' }}></i> 
                                nikshaybalki@gmail.com
                            </motion.p>
                            <div className="social-icons" style={{ marginTop: '20px' }}>
                                <motion.a href="https://www.linkedin.com/in/nikshay-balki-7b2909321" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#2cc990' }} style={{ fontSize: '35px', color: '#fff', display: 'inline-block' }}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form linked to Google Sheets */}
                    <div className="contact-right" style={{ flex: '1.5', minWidth: '280px' }}>
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <div style={{ position: 'relative', marginBottom: '35px' }}>
                                <motion.input 
                                    type="text" 
                                    name="Name" 
                                    placeholder="YOUR NAME" 
                                    required 
                                    whileFocus={{ backgroundColor: "rgba(44, 201, 144, 0.03)" }}
                                    style={minimalInputStyle}
                                />
                                <motion.div style={{ position: 'absolute', bottom: 0, left: 0, height: '1.5px', background: '#2cc990', width: '0%' }} whileFocus={{ width: '100%' }} />
                            </div>

                            <div style={{ position: 'relative', marginBottom: '35px' }}>
                                <motion.input 
                                    type="email" 
                                    name="Email" 
                                    placeholder="YOUR EMAIL" 
                                    required 
                                    whileFocus={{ backgroundColor: "rgba(44, 201, 144, 0.03)" }}
                                    style={minimalInputStyle}
                                />
                                <motion.div style={{ position: 'absolute', bottom: 0, left: 0, height: '1.5px', background: '#2cc990', width: '0%' }} whileFocus={{ width: '100%' }} />
                            </div>

                            <div style={{ position: 'relative', marginBottom: '35px' }}>
                                <motion.textarea 
                                    name="Message" 
                                    rows="5" 
                                    placeholder="MESSAGE" 
                                    required
                                    whileFocus={{ backgroundColor: "rgba(44, 201, 144, 0.03)" }}
                                    style={{ ...minimalInputStyle, border: '1px solid #1a1a1a', padding: '15px' }}
                                ></motion.textarea>
                            </div>

                            <motion.button 
                                type="submit" 
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { backgroundColor: '#2cc990', color: '#080808', boxShadow: '0 0 20px rgba(44, 201, 144, 0.4)' } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                style={{
                                    ...minimalButtonStyle,
                                    opacity: isSubmitting ? 0.5 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </motion.button>
                        </form>

                        <AnimatePresence>
                            {message && (
                                <motion.p 
                                    initial={{ opacity: 0, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0 }}
                                    style={{ 
                                        marginTop: '25px', color: '#2cc990', fontWeight: '600',
                                        textShadow: '0 0 10px rgba(44, 201, 144, 0.5)' 
                                    }}
                                >
                                    {message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

const minimalInputStyle = {
    width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #222',
    padding: '12px 5px', color: '#fff', fontSize: '14px', letterSpacing: '1px', outline: 'none', transition: 'all 0.4s ease'
};

const minimalButtonStyle = {
    background: 'transparent', border: '1px solid #2cc990', color: '#2cc990',
    padding: '14px 50px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', borderRadius: '4px', transition: 'all 0.3s ease'
};

export default Contact;