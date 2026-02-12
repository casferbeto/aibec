import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, TrendingUp, Users, Database } from 'lucide-react';
import './About.css';
import ecosystemImg from '../assets/images/ecosystem.png';
import profileImg from '../assets/images/aibecsinfondologo.png'; // Updated to official logo as requested

const About = () => {
    return (
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

                {/* Differentiators */}
                <motion.div
                    className="about-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="section-subtitle text-center">💡 ¿Qué hacemos diferente?</h3>
                    <div className="differentiators-grid">
                        {[
                            "Diseño y desarrollo web con enfoque en conversión",
                            "Tiendas e-commerce optimizadas para ventas reales",
                            "Automatización de procesos con IA (n8n, APIs)",
                            "Integración de bases de datos y dashboards",
                            "Flujos automatizados para operaciones",
                            "Asistentes inteligentes conectados a tus datos"
                        ].map((item, i) => (
                            <div key={i} className="diff-card">
                                <CheckCircle className="diff-icon" size={24} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center highlight-text">
                        Nuestra especialidad es convertir procesos manuales complejos en sistemas automatizados, eficientes y medibles.
                    </p>
                </motion.div>

                {/* Strategic Approach */}
                <motion.div
                    className="about-section strategy-section"
                    style={{ backgroundImage: `url(${ecosystemImg})` }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="strategy-overlay"></div>
                    <div className="strategy-content">
                        <h3 className="section-subtitle text-center">🔥 Enfoque Estratégico</h3>
                        <p className="text-center strategy-desc">
                            Trabajamos desde la arquitectura: Primero entendemos el modelo de negocio, luego diseñamos la estructura tecnológica correcta y finalmente implementamos automatización e inteligencia.
                        </p>

                        <div className="impact-grid">
                            {[
                                { icon: <Zap />, text: "Información en tiempo real" },
                                { icon: <CheckCircle />, text: "Reducción de errores operativos" },
                                { icon: <TrendingUp />, text: "Ahorro de tiempo y costos" },
                                { icon: <Database />, text: "Escalabilidad real" }
                            ].map((impact, i) => (
                                <div key={i} className="impact-item">
                                    <div className="impact-icon-wrapper">{impact.icon}</div>
                                    <span>{impact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Ideal Client */}
                <motion.div
                    className="about-section ideal-client"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="section-subtitle text-center">🎯 Perfil Ideal de Cliente</h3>
                    <div className="client-grid">
                        <div className="client-card">
                            <Users size={40} className="client-icon" />
                            <h4>Empresas que buscan escalar</h4>
                            <ul>
                                <li>Profesionalizar su presencia digital</li>
                                <li>Automatizar procesos internos</li>
                                <li>Integrar IA en sus operaciones</li>
                                <li>Tomar decisiones basadas en datos</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
