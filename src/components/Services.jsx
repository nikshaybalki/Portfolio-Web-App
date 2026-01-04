// // src/components/Services.jsx

// import React from 'react';

// const Services = () => {
//     return (
//         <div id="services">
//             <div className="container">
//                 <h1 className="sub-title">Skills</h1>
//                 <div className="services-list">
//                     <div>
//                         <i className="fa-solid fa-code"></i> {/* Changed icon for better representation */}
//                         <h2>Electrical Engineering</h2>
//                         <p>
//                             <ul>
//                                 <li>MATLAB</li>
//                                 <li>Arduino Programming</li>
//                                 <li>ESP32 (Wi-Fi/Bluetooth)</li>
//                                 <li>Proteus</li>
//                                 <li>PSpice</li>
//                                 <li>C++</li>
//                             </ul>
//                         </p>

//                     </div>
//                     <div>
//                         <i className="fa-solid fa-code"></i> {/* Changed icon for better representation */}
//                         <h2>IoT (Internet of Things)</h2>
//                         <p>
//                             <ul>
//                                 <li>IoT Architecture</li>
//                                 <li>Hardware Prototyping</li>
//                                 <li>Cloud Integration</li>
//                                 <li>MQTT Protocols (Adafruit IO)</li>
//                                 <li>Embedded Coding</li>
//                             </ul>
//                         </p>                    </div>
//                     <div>
//                         <i className="fa-solid fa-code"></i> {/* Changed icon for better representation */}
//                         <h2>Data Analytics</h2>
//                         <p>
//                             <ul>
//                                 <li>Python</li>
//                                 <li>Pandas</li>
//                                 <li>NumPy</li>
//                                 <li>Matplotlib</li>
//                                 <li>Microsoft Excel</li>
//                             </ul>
//                         </p>                    </div>
//                     <div>
//                         <i className="fa-solid fa-lightbulb"></i>
//                         <h2>Web Development</h2>
//                         <p>
//                             <ul>
//                                 <li>HTML</li>
//                                 <li>CSS</li>
//                                 <li>JavaScript</li>
//                                 <li>React + Vite</li>
//                                 <li>GSAP (Animations)</li>
//                                 <li>Tailwind CSS</li>
//                                 <li>Node.js</li>

//                             </ul>
//                         </p>                    </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Services;

















// // src/components/Services.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Services = () => {
//     // Data array to keep code clean and manageable
//     const servicesData = [
//         {
//             title: "Electrical Engineering",
//             icon: "fa-solid fa-bolt-lightning",
//             skills: ["MATLAB", "Arduino Programming", "ESP32 (Wi-Fi/Bluetooth)", "Proteus", "PSpice", "C++"]
//         },
//         {
//             title: "IoT (Internet of Things)",
//             icon: "fa-solid fa-microchip",
//             skills: ["IoT Architecture", "Hardware Prototyping", "Cloud Integration", "MQTT (Adafruit IO)", "Embedded Coding"]
//         },
//         {
//             title: "Data Analytics",
//             icon: "fa-solid fa-chart-line",
//             skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Microsoft Excel"]
//         },
//         {
//             title: "Web Development",
//             icon: "fa-solid fa-globe",
//             skills: ["HTML & CSS", "JavaScript", "React + Vite", "GSAP (Animations)", "Tailwind CSS", "Node.js"]
//         }
//     ];

//     // Animation Variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 }
//         }
//     };

//     const cardVariants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: { 
//             opacity: 1, 
//             y: 0, 
//             transition: { duration: 0.6, ease: "easeOut" } 
//         }
//     };

//     return (
//         <div id="services" style={{ padding: '80px 0', background: '#080808' }}>
//             <div className="container">
//                 <motion.h1 
//                     className="sub-title"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                 >
//                     Technical Skills
//                 </motion.h1>

//                 <motion.div 
//                     className="services-list"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                         gridGap: '40px',
//                         marginTop: '50px'
//                     }}
//                 >
//                     {servicesData.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             whileHover={{ 
//                                 scale: 1.05, 
//                                 rotateY: 5, 
//                                 rotateX: -5,
//                                 boxShadow: "0px 10px 30px rgba(44, 201, 144, 0.2)"
//                             }}
//                             style={{
//                                 background: '#262626',
//                                 padding: '40px',
//                                 borderRadius: '15px',
//                                 border: '1px solid rgba(44, 201, 144, 0.1)',
//                                 position: 'relative',
//                                 overflow: 'hidden',
//                                 cursor: 'default',
//                                 perspective: '1000px'
//                             }}
//                         >
//                             {/* Animated Background Glow on Hover */}
//                             <motion.div 
//                                 style={{
//                                     position: 'absolute',
//                                     top: 0, left: 0, width: '100%', height: '100%',
//                                     background: 'radial-gradient(circle at center, rgba(44, 201, 144, 0.1) 0%, transparent 70%)',
//                                     opacity: 0,
//                                     zIndex: 0
//                                 }}
//                                 whileHover={{ opacity: 1 }}
//                             />

//                             <div style={{ position: 'relative', zIndex: 1 }}>
//                                 <motion.i 
//                                     className={service.icon}
//                                     animate={{ 
//                                         color: ["#fff", "#2cc990", "#fff"],
//                                         scale: [1, 1.1, 1]
//                                     }}
//                                     transition={{ duration: 3, repeat: Infinity }}
//                                     style={{ fontSize: '50px', marginBottom: '30px', display: 'block' }}
//                                 ></motion.i>
                                
//                                 <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
//                                     {service.title}
//                                 </h2>

//                                 <ul style={{ listStyle: 'none', padding: 0 }}>
//                                     {service.skills.map((skill, i) => (
//                                         <motion.li 
//                                             key={i}
//                                             initial={{ opacity: 0.6 }}
//                                             whileHover={{ opacity: 1, x: 5, color: "#2cc990" }}
//                                             style={{ 
//                                                 fontSize: '14px', 
//                                                 marginBottom: '8px', 
//                                                 color: '#ababab',
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 gap: '10px'
//                                             }}
//                                         >
//                                             <span style={{ width: '5px', height: '5px', background: '#2cc990', borderRadius: '50%' }}></span>
//                                             {skill}
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* Decorative "Corner Solder" effect */}
//                             <div style={{
//                                 position: 'absolute',
//                                 bottom: '10px',
//                                 right: '10px',
//                                 width: '20px',
//                                 height: '20px',
//                                 borderRight: '2px solid rgba(44, 201, 144, 0.3)',
//                                 borderBottom: '2px solid rgba(44, 201, 144, 0.3)'
//                             }} />
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default Services;














// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const servicesData = [
        {
            title: "Electrical Engineering",
            icon: "fa-solid fa-bolt-lightning",
            skills: ["MATLAB", "Arduino Programming", "ESP32 (Wi-Fi/Bluetooth)", "Proteus", "PSpice", "C++"]
        },
        {
            title: "IoT (Internet of Things)",
            icon: "fa-solid fa-microchip",
            skills: ["IoT Architecture", "Hardware Prototyping", "Cloud Integration", "MQTT (Adafruit IO)", "Embedded Coding"]
        },
        {
            title: "Data Analytics",
            icon: "fa-solid fa-chart-line",
            skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Microsoft Excel"]
        },
        {
            title: "Web Development",
            icon: "fa-solid fa-globe",
            skills: ["HTML & CSS", "JavaScript", "React + Vite", "GSAP (Animations)", "Tailwind CSS", "Node.js"]
        }
    ];

    return (
        <div id="services" style={{ padding: '80px 0', background: '#080808' }}>
            <div className="container">
                <motion.h1 
                    className="sub-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ color: '#fff', marginBottom: '50px' }}
                >
                    Technical Skills
                </motion.h1>

                <div className="services-list" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gridGap: '40px',
                }}>
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // 3D Magnetic Tilt Effect
                            whileHover={{ 
                                y: -10,
                                rotateY: 7,
                                rotateX: -5,
                                transition: { duration: 0.3 }
                            }}
                            style={{
                                background: '#1a1a1a', // Darker background for better contrast
                                padding: '40px',
                                borderRadius: '15px',
                                border: '1px solid rgba(44, 201, 144, 0.2)',
                                position: 'relative',
                                perspective: '1000px',
                                cursor: 'default',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Inner Glow Effect - Fixed to stay behind text */}
                            <motion.div 
                                style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'radial-gradient(circle at 50% 0%, rgba(44, 201, 144, 0.15) 0%, transparent 70%)',
                                    zIndex: 0,
                                    opacity: 0
                                }}
                                whileHover={{ opacity: 1 }}
                            />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                {/* Icon with pulsing light effect */}
                                <motion.i 
                                    className={service.icon}
                                    style={{ 
                                        fontSize: '45px', 
                                        marginBottom: '25px', 
                                        display: 'block',
                                        color: '#2cc990' // Constant emerald color
                                    }}
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.i>
                                
                                <h2 style={{ 
                                    fontSize: '22px', 
                                    fontWeight: '600', 
                                    marginBottom: '20px', 
                                    color: '#fff' // Forced white color for visibility
                                }}>
                                    {service.title}
                                </h2>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {service.skills.map((skill, i) => (
                                        <li 
                                            key={i}
                                            style={{ 
                                                fontSize: '14px', 
                                                marginBottom: '10px', 
                                                color: '#d1d1d1', // Light grey for base visibility
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            }}
                                        >
                                            {/* Solder Point Bullet */}
                                            <span style={{ 
                                                minWidth: '6px', 
                                                height: '6px', 
                                                background: '#2cc990', 
                                                borderRadius: '50%',
                                                boxShadow: '0 0 5px #2cc990'
                                            }}></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative PCB Corner */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                width: '40px',
                                height: '40px',
                                background: 'linear-gradient(135deg, transparent 50%, rgba(44, 201, 144, 0.1) 50%)',
                                borderRight: '2px solid rgba(44, 201, 144, 0.3)',
                                borderBottom: '2px solid rgba(44, 201, 144, 0.3)',
                                borderRadius: '0 0 15px 0'
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;