import React from 'react';
import { motion } from 'framer-motion';
import './ValueProposition.css';

const ValueProposition = () => {
    return (
        <section className="value-proposition">
            <div className="vp-container">
                <motion.h2
                    className="vp-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Arquitectos Digitales & Especialistas en Automatización con IA
                </motion.h2>
                <motion.p
                    className="vp-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Somos un equipo profesional enfocado en el diseño y desarrollo de ecosistemas digitales inteligentes que integran páginas web estratégicas, e-commerce de alto rendimiento y automatización avanzada con Inteligencia Artificial.
                </motion.p>
            </div>
        </section>
    );
};

export default ValueProposition;
