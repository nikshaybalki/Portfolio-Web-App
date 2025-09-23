// src/components/Contact.jsx

import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        setMessage('Message sent successfully!');
        
        // Clear the message after 5 seconds
        setTimeout(() => {
            setMessage('');
        }, 5000);

        // Reset the form fields
        e.target.reset();
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-solid fa-share-from-square"></i> in LinkedIn</p>
                        <p><i className="fa-solid fa-phone"></i> LinkedIn</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/nikshay-balki-7b2909321" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="10" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg">{message}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;