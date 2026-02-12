import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        title: 'E-Commerce Moda',
        category: 'Desarrollo Web',
        image: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
    },
    {
        title: 'Dashboard Financiero',
        category: 'Web App',
        image: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
    },
    {
        title: 'Agente IA',
        category: 'Automatización',
        image: 'linear-gradient(135deg, #111 0%, #333 100%)'
    }
];

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Portafolio</h2>
                    <p className="section-subtitle">Una selección de nuestros trabajos más recientes y destacados.</p>
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="portfolio-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="portfolio-image" style={{ background: project.image }}>
                                <div className="portfolio-overlay">
                                    <button className="portfolio-btn">
                                        Ver Proyecto <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <span className="portfolio-category">{project.category}</span>
                                <h3 className="portfolio-title">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
