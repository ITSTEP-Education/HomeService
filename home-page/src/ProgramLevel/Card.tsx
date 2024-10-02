import React from 'react';
import './styles/Card.css';

interface CardProps {
    imageSrc: string; 
    
    buttons: string[];
}

const Card: React.FC<CardProps> = ({ imageSrc, buttons }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt="Card" className="card-image" />
            
            <div className="card-buttons">
                {buttons.map((button, index) => (
                    <button key={index} className="card-button">{button}</button> 
                ))}
            </div>
        </div>
    );
};

export default Card;
