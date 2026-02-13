import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import ecosystemImg from '../assets/images/ecosystem.png';
import profileImg from '../assets/images/aibecsinfondologo.png'; // Updated to official logo as requested
import TargetProfiles from './TargetProfiles';
import Differentiators from './Differentiators';
import Strategy from './Strategy';

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="about-container">
                    {/* Intro Section */}
                    <div className="about-intro">
                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={profileImg}
                                alt="Aibec Logo"
                                className="about-profile-img"
                                style={{
                                    objectFit: "contain",
                                    borderRadius: "0",
                                    width: "100%",
                                    height: "auto",
                                    filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))"
                                }}
                            />
                            <div className="about-blob"></div>
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title">Quiénes Somos</h2>
                            <h3 className="about-subtitle">Arquitectos Digitales & Especialistas en Automatización con IA</h3>
                            <p className="about-text">
                                Somos un equipo profesional enfocado en el diseño y desarrollo de ecosistemas digitales inteligentes que integran páginas web estratégicas, e-commerce de alto rendimiento y automatización avanzada con Inteligencia Artificial.
                            </p>
                            <p className="about-text">
                                No solo construimos sitios web: diseñamos plataformas completas orientadas a resultados, donde la tecnología, los datos y la automatización trabajan juntos para escalar negocios.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Differentiators */}
            <Differentiators />

            {/* Strategic Approach */}
            <Strategy />
            <TargetProfiles />
        </>
    );
};

export default About;
