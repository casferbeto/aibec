import React, { useRef, useEffect } from "react";

const NeuralBrain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let nodes = [];
        let mouse = { x: 0, y: 0 };
        let flowSpeed = 0.02;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initNodes();
        };

        const initNodes = () => {
            // Silueta del cerebro idéntica al logo de Aibec (Coordenadas relativas 0-1)
            const brainPoints = [
                // Top Outline
                { x: 0.50, y: 0.28, color: 'cyan' },
                { x: 0.43, y: 0.30, color: 'blue' },
                { x: 0.57, y: 0.30, color: 'purple' },
                { x: 0.37, y: 0.36, color: 'blue' },
                { x: 0.63, y: 0.36, color: 'purple' },

                // Wide middle
                { x: 0.33, y: 0.46, color: 'blue' },
                { x: 0.67, y: 0.46, color: 'purple' },
                { x: 0.32, y: 0.55, color: 'blue' },
                { x: 0.68, y: 0.55, color: 'purple' },

                // Curved bottom
                { x: 0.38, y: 0.65, color: 'blue' },
                { x: 0.62, y: 0.65, color: 'purple' },
                { x: 0.45, y: 0.72, color: 'cyan' },
                { x: 0.55, y: 0.72, color: 'cyan' },

                // Central Stem (El tallo del logo de Aibec)
                { x: 0.50, y: 0.60, color: 'cyan' },
                { x: 0.52, y: 0.78, color: 'cyan' },
                { x: 0.54, y: 0.86, color: 'purple' },

                // Internal Nodes (Circuit style)
                { x: 0.42, y: 0.44, color: 'blue' },
                { x: 0.48, y: 0.44, color: 'cyan' },
                { x: 0.52, y: 0.44, color: 'cyan' },
                { x: 0.58, y: 0.44, color: 'purple' },
                { x: 0.45, y: 0.56, color: 'blue' },
                { x: 0.55, y: 0.56, color: 'purple' }
            ];

            nodes = brainPoints.map(p => ({
                x: p.x * canvas.width,
                y: p.y * canvas.height,
                baseX: p.x,
                baseY: p.y,
                radius: 4 + Math.random() * 3,
                pulse: Math.random() * Math.PI * 2,
                color: p.color === 'blue' ? '#2563eb' : (p.color === 'purple' ? '#a855f7' : '#22d3ee'),
                glow: p.color === 'blue' ? 'rgba(37,99,235,0.6)' : (p.color === 'purple' ? 'rgba(168,85,247,0.6)' : 'rgba(34,211,238,0.6)')
            }));
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Efecto Parallax suave
            const dxMouse = (mouse.x - canvas.width / 2) * 0.015;
            const dyMouse = (mouse.y - canvas.height / 2) * 0.015;

            // Dibujar Conexiones primero (fondo)
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                    if (dist < canvas.width * 0.15) {
                        const opacity = 1 - dist / (canvas.width * 0.15);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();

                        // Flujo de energía ocasional
                        if (Math.random() < 0.005) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                            ctx.lineWidth = 2;
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Dibujar Nodos
            nodes.forEach(node => {
                node.pulse += 0.03;
                const pulseSize = Math.sin(node.pulse) * 2;

                node.x = node.baseX * canvas.width + dxMouse;
                node.y = node.baseY * canvas.height + dyMouse;

                // Glow Exterior
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, 20 + pulseSize
                );
                gradient.addColorStop(0, node.glow);
                gradient.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = gradient;
                ctx.arc(node.x, node.y, 15 + pulseSize, 0, Math.PI * 2);
                ctx.fill();

                // Núcleo del Nodo
                ctx.beginPath();
                ctx.fillStyle = node.color;
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();

                // Brillo puntual central
                ctx.beginPath();
                ctx.fillStyle = 'rgba(255,255,255,0.8)';
                ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        resize();
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="neural-brain-canvas"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                opacity: 0.6,
                pointerEvents: "none"
            }}
        />
    );
};

export default NeuralBrain;
