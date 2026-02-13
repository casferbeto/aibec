import React from 'react';
import { Github, Facebook, Instagram, Mail } from 'lucide-react';
import './Footer.css';

import logoImg from '../assets/brand/aibecsinfondologo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logoImg} alt="Aibec Logo" className="footer-logo-img" />
                </div>
                <div className="footer-links">
                    <a href="#" className="social-link"><Github size={20} /></a>
                    <a href="https://www.facebook.com/profile.php?id=61588237284667" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
                    <a href="https://www.instagram.com/aibec_oficial/" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
                    <a href="mailto:atencion@aibec.com.mx" className="social-link"><Mail size={20} /></a>
                </div>
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Aibec. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
