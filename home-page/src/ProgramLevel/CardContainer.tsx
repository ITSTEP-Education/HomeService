import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle'; 
import './styles/CardContainer.css';

const CardContainer: React.FC = () => {
    const cardsData = [
        {
            imageSrc: '/logo/logo1.jfif',
            buttons: ['Scratch','HTML','CSS','Pytone'], 
        },
        {
            imageSrc: '/logo/logo2.jfif',
            buttons: ['C++', 'JS', 'C#','Pytone'], 
        },
        {
            imageSrc: '/logo/logo3.jfif',
            buttons: ['Дизайн', 'JS', 'C++', 'C#', 'SQL'], 
        },
    ];

    const titles = [
        "Для дітей до 8 років",
        "Для підлітків до 20 років",
        "Для дорослих"
    ];

    return (
        <div className="card-container">
            
            {cardsData.map((card, index) => (
                <div key={index} className="card-section">
                    <SectionTitle text={titles[index]} /> {}
                    <Card imageSrc={card.imageSrc}  buttons={card.buttons} />
                </div>
            ))}
        </div>
    );
};

export default CardContainer;
