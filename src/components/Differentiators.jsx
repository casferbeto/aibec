import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './Differentiators.css';

const Differentiators = () => {
    return (
        <section className="differentiators-wrapper">
            <div className="section-container">
                <motion.div
                    className="about-section differentiators-section"
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
            </div>
        </section>
    );
};

export default Differentiators;
