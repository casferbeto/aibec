import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './ImageCarousel.css';

import img1 from '../assets/images/servicios/conexion global.png';
import img2 from '../assets/images/servicios/automatiza y avanza.png';
import img3 from '../assets/images/servicios/de local a global.png';
import img4 from '../assets/images/servicios/talento sin fronteras.png';
import img5 from '../assets/images/servicios/crecimiento inteligente.png';
import img6 from '../assets/images/servicios/talento digitalizado.png';

const carouselImages = [
    { src: img1, alt: 'Conexión Global. Alcance Ilimitado.' },
    { src: img2, alt: 'Automatiza y Avanza. Procesos Eficientes.' },
    { src: img3, alt: 'De Local a Global. Expande tus Horizontes.' },
    { src: img4, alt: 'Tu Talento Sin Fronteras.' },
    { src: img5, alt: 'Crecimiento Inteligente.' },
    { src: img6, alt: 'Talento Digitalizado.' },
];

const ImageCarousel = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    // Duplicar imágenes para lograr el loop infinito sin cortes
    const duplicatedImages = [...carouselImages, ...carouselImages];

    return (
        <div className="image-carousel-section">
            <div className="carousel-container">
                <div className="carousel-track">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={index}
                            className="carousel-slide"
                            onClick={() => setZoomedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="carousel-image"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de Zoom */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        className="carousel-zoom-overlay"
                        onClick={() => setZoomedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="carousel-zoom-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                className="carousel-zoom-close"
                                onClick={() => setZoomedImage(null)}
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={zoomedImage.src}
                                alt={zoomedImage.alt}
                                className="carousel-zoom-image"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;
