import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Added phone field
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Enviando...' });

        try {
            const response = await fetch('https://n8n.srv1208074.hstgr.cloud/webhook/bb4425b4-f540-4f6f-9520-b5a17bb10ffc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ type: 'error', message: 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.' });
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-content text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Empecemos un Proyecto</h2>
                    <p className="section-subtitle">¿Tienes una idea en mente? Hablemos y hagámosla realidad.</p>
                </motion.div>

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Celular</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Tu número de celular"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Cuéntame sobre tu proyecto..."
                            rows="5"
                            maxLength="500"
                        ></textarea>
                        <div className="char-count">
                            {formData.message.length} / 500
                        </div>
                    </div>

                    {status.message && (
                        <div className={`form-status ${status.type}`}>
                            {status.message}
                        </div>
                    )}

                    <div className="form-submit">
                        <Button variant="primary" type="submit" disabled={status.type === 'loading'}>
                            {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
