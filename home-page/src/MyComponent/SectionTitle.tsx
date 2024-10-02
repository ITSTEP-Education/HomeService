// src/MyComponent/SectionTitle.tsx
import React from 'react';
import './styles/SectionTitle.css'; // Создадим стили для заголовка

interface SectionTitleProps {
    text: string; // Текст заголовка
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return <h3 className="section-title">{text}</h3>;
};

export default SectionTitle;
