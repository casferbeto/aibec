import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, ShoppingCart, Cpu, ArrowRight, X, Check } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Code size={40} />,
        title: 'Desarrollo Web Premium',
        description: 'Sitios web ultra-rápidos, responsivos y con animaciones fluidas que cautivan a tus visitantes desde el primer segundo.',
        tags: ['React', 'Next.js', 'WebGL'],
        details: [
            'Diseño de páginas web corporativas y landing pages de alto impacto.',
            'Incluye Dominio y Hosting premium por el primer año.',
            'Servicio de mantenimiento y actualizaciones de seguridad incluido.',
            'Optimización total para móviles y SEO (posicionamiento en Google).',
            'Integración con herramientas de análisis y formularios de contacto.'
        ]
    },
    {
        icon: <ShoppingCart size={40} />,
        title: 'E-Commerce Avanzado',
        description: 'Tiendas online diseñadas para convertir. Experiencias de compra intuitivas, seguras y visualmente impactantes.',
        tags: ['Shopify', 'Woocommerce', 'Custom'],
        details: [
            'Tiendas online completas con pasarelas de pago seguras.',
            'Incluye Dominio y Hosting de alto rendimiento.',
            'Mantenimiento técnico y actualizaciones de la plataforma.',
            'Gestión intuitiva de inventario, pedidos y clientes.',
            'Diseño optimizado para maximizar la conversión de ventas.'
        ]
    },
    {
        icon: <Cpu size={40} />,
        title: 'Automatización con IA',
        description: 'Implementación de agentes inteligentes y flujos de trabajo automatizados para optimizar tu negocio.',
        tags: ['n8n', 'OpenAI', 'Python'],
        details: [
            'Implementación de Agentes de IA para atención al cliente 24/7.',
            'Automatización de flujos de trabajo repetitivos (ahorro de tiempo).',
            'Integración inteligente entre tus aplicaciones favoritas.',
            'Reducción significativa de errores humanos y costos operativos.',
            'Soluciones personalizadas para escalar tu productividad.'
        ]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

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
                            onClick={() => setSelectedService(service)}
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

            <AnimatePresence>
                {selectedService && (
                    <div className="modal-overlay" onClick={() => setSelectedService(null)}>
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button className="modal-close" onClick={() => setSelectedService(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-header">
                                <div className="modal-icon">{selectedService.icon}</div>
                                <h3 className="modal-title">{selectedService.title}</h3>
                            </div>

                            <p className="modal-description">{selectedService.description}</p>

                            <div className="modal-details">
                                <h4 className="details-title">Qué incluye:</h4>
                                <ul className="details-list">
                                    {selectedService.details.map((detail, idx) => (
                                        <li key={idx} className="detail-item">
                                            <Check size={18} className="detail-check" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="modal-crm-btn" onClick={() => {
                                setSelectedService(null);
                                navigate('/contact');
                                window.scrollTo(0, 0);
                            }}>
                                Cotizar este servicio
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
