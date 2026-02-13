import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Button from "./Button";
import "./Hero.css";

import AntigravityParticles from "./AntigravityParticles";
import brainLogo from "../assets/images/aibecsinfondologo.png";

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) / (rect.width / 2));
        y.set((e.clientY - centerY) / (rect.height / 2));

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const rotateX = useTransform(y, [-1, 1], [10, -10]);
    const rotateY = useTransform(x, [-1, 1], [-10, 10]);

    return (
        <section
            className="hero"
            onMouseMove={handleMouseMove}
        >
            {/* Animación Estilo Google Antigravity */}
            <AntigravityParticles />

            {/* Contenido central */}
            <div className="hero-content">
                <motion.div
                    className="brain-container"
                    style={{ rotateX, rotateY }}
                >
                    <motion.img
                        src={brainLogo}
                        alt="Aibec Neural Brain"
                        className="brain-logo"
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2 }}
                    />
                </motion.div>

                <motion.div
                    className="hero-text-content"
                >
                    <h1 className="hero-title">
                        {"DISEÑO INTELIGENTE".split("").map((char, index) => {
                            // Direcciones aleatorias para cada letra
                            const directions = [
                                { x: 0, y: -50 }, // Arriba
                                { x: 0, y: 50 },  // Abajo
                                { x: -50, y: 0 }, // Izquierda
                                { x: 50, y: 0 }   // Derecha
                            ];
                            const dir = directions[Math.floor(Math.random() * directions.length)];

                            return (
                                <motion.span
                                    key={index}
                                    style={{ display: char === " " ? "inline" : "inline-block" }}
                                    initial={{ opacity: 0, x: dir.x, y: dir.y }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.2 + index * 0.05,
                                        ease: "easeOut"
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            );
                        })}
                    </h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 2.2 }}
                    >
                        {"diseñamos plataformas completas orientadas a resultados, donde la tecnología, los datos y la automatización trabajan juntos para escalar negocios.".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.01,
                                    delay: 2.3 + index * 0.03
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 6.5 }} // Retrasado hasta que termine el typewriter
                >
                    <Button variant="primary" to="/services">
                        Explorar Servicios
                    </Button>
                    <Button variant="secondary" to="/portfolio">
                        Ver Portafolio
                    </Button>
                </motion.div>
            </div>

            <div className="noise-overlay" />
        </section>
    );
};

export default Hero;
