import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles = [];
        let animationFrameId;
        let mouse = { x: null, y: null };

        // Configuration
        const particleCount = 150;
        const connectionDistance = 100;
        const mouseSafetyRadius = 200;

        // Resize handling
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        // Mouse handling
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow random movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
                this.baseSize = this.size;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleDir = 1;
            }

            update() {
                // Twinkle effect
                if (this.opacity > 0.8 || this.opacity < 0.1) {
                    this.twinkleDir *= -1;
                }
                this.opacity += this.twinkleSpeed * this.twinkleDir;

                // Movement
                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction (Repulsion/Attraction flow)
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Subtle attraction to mouse to simulate "following"
                    if (distance < mouseSafetyRadius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseSafetyRadius - distance) / mouseSafetyRadius;
                        const directionMultiplier = 0.05; // Strength of attraction

                        this.vx += forceDirectionX * force * directionMultiplier;
                        this.vy += forceDirectionY * force * directionMultiplier;
                    }
                }

                // Friction to stabilize speed
                this.vx *= 0.99;
                this.vy *= 0.99;

                // Wrap around screen
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        canvas.width = width;
        canvas.height = height;
        initParticles();
        animate();

        // Listeners
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
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
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default Starfield;
