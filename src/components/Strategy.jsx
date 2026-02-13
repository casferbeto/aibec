import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, TrendingUp, Database } from 'lucide-react';
import './Strategy.css';
import ecosystemImg from '../assets/images/ecosystem.png';

const Strategy = () => {
    return (
        <section className="strategy-wrapper">
            <div className="section-container">
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
            </div>
        </section>
    );
};

export default Strategy;
