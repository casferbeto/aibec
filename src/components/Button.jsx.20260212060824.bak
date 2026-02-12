import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', className = '', to }) => {
    const buttonContent = (
        <>
            <span className="btn-content">{children}</span>
            <div className="btn-glow"></div>
        </>
    );

    const commonProps = {
        className: `btn btn-${variant} ${className}`,
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };

    if (to) {
        return (
            <motion.div {...commonProps} style={{ display: 'inline-block' }}>
                <Link to={to} className="btn-link-hitbox">
                    {buttonContent}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            {...commonProps}
            onClick={onClick}
        >
            {buttonContent}
        </motion.button>
    );
};

export default Button;
