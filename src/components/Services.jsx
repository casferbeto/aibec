import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Cpu, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Code size={40} />,
        title: 'Desarrollo Web Premium',
        description: 'Sitios web ultra-rápidos, responsivos y con animaciones fluidas que cautivan a tus visitantes desde el primer segundo.',
        tags: ['React', 'Next.js', 'WebGL']
    },
    {
        icon: <ShoppingCart size={40} />,
        title: 'E-Commerce Avanzado',
        description: 'Tiendas online diseñadas para convertir. Experiencias de compra intuitivas, seguras y visualmente impactantes.',
        tags: ['Shopify', 'Woocommerce', 'Custom']
    },
    {
        icon: <Cpu size={40} />,
        title: 'Automatización con IA',
        description: 'Implementación de agentes inteligentes y flujos de trabajo automatizados para optimizar tu negocio.',
        tags: ['n8n', 'OpenAI', 'Python']
    }
];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <p className="section-subtitle">Soluciones digitales de vanguardia para escalar tu visión.</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-tags">
                                {service.tags.map(tag => (
                                    <span key={tag} className="service-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="service-link">
                                <span>Más detalles</span>
                                <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
