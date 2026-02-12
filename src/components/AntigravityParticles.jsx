import React, { useRef, useEffect } from 'react';

const AntigravityParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 400;
        const colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#8E44AD', '#22D3EE'];

        const mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            targetX: window.innerWidth / 2,
            targetY: window.innerHeight / 2
        };

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                // Posición inicial aleatoria en un círculo grande
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.max(window.innerWidth, window.innerHeight) * (0.5 + Math.random() * 0.5);

                this.x = Math.cos(angle) * radius;
                this.y = Math.sin(angle) * radius;
                this.z = Math.random() * 1000; // Profundidad virtual

                this.prevX = this.x;
                this.prevY = this.y;

                this.velocity = 0.005 + Math.random() * 0.01;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = 1 + Math.random() * 2;
                this.angle = angle;
                this.radius = radius;
                this.orbitSpeed = (Math.random() - 0.5) * 0.01;
            }

            update() {
                // Movimiento de vórtice suave
                this.angle += this.orbitSpeed;
                this.radius -= this.velocity * 50; // Se acercan al centro

                if (this.radius < 10) {
                    this.init();
                }

                // Aplicar movimiento basado en coordenadas polares
                const targetX = Math.cos(this.angle) * this.radius;
                const targetY = Math.sin(this.angle) * this.radius;

                // Suavizado de posición actual hacia el objetivo
                this.x += (targetX - this.x) * 0.1;
                this.y += (targetY - this.y) * 0.1;

                // Interacción con el mouse (paralaje)
                const mouseOffsetX = (mouse.x - window.innerWidth / 2) * (this.z / 1000);
                const mouseOffsetY = (mouse.y - window.innerHeight / 2) * (this.z / 1000);

                this.renderX = this.x + window.innerWidth / 2 + mouseOffsetX;
                this.renderY = this.y + window.innerHeight / 2 + mouseOffsetY;
            }

            draw() {
                // Dibujar como un punto (círculo) en lugar de un dash
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.renderX, this.renderY, this.size, 0, Math.PI * 2);
                ctx.fill();

                this.prevX = this.renderX;
                this.prevY = this.renderY;
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const handleMouseMove = (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        const animate = () => {
            // Limpiar con un ligero rastro para efecto estela (opcional, Google tiene rastro nítido)
            // Para ser exactos a Google, usaremos clearRect, pero con una opacidad muy alta si queremos trails.
            // Google Antigravity es muy limpio, así que usaremos clearRect.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Suavizar movimiento del mouse
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                opacity: 0.8
            }}
        />
    );
};

export default AntigravityParticles;
