import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, UserCheck } from 'lucide-react';
import './TargetProfiles.css';

const TargetProfiles = () => {
    const profiles = [
        {
            icon: <Building2 size={40} />,
            title: 'Empresas',
            description: 'Optimizamos grandes operaciones mediante automatización avanzada, integración de sistemas complejos y soluciones de IA escalables que impulsan la eficiencia corporativa.'
        },
        {
            icon: <Store size={40} />,
            title: 'Pequeños Negocios (PyMEs)',
            description: 'Diseñamos una presencia digital sólida y profesional que permite a los negocios locales competir en el mercado global, automatizando ventas y atención al cliente.'
        },
        {
            icon: <UserCheck size={40} />,
            title: 'Profesionistas y Servicios',
            description: 'Ayudamos a expertos y prestadores de servicios a proyectar una imagen confiable y eficiente, implementando herramientas que captan más clientes de forma automática.'
        }
    ];

    return (
        <section className="target-profiles">
            <div className="target-container">
                <motion.div
                    className="target-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">A quiénes ayudamos a escalar</h2>
                    <p className="section-subtitle">Soluciones adaptadas a cada etapa de crecimiento digital.</p>
                </motion.div>

                <div className="profiles-grid">
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            className="profile-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="profile-icon">
                                {profile.icon}
                            </div>
                            <h3 className="profile-title">{profile.title}</h3>
                            <p className="profile-description">{profile.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetProfiles;
