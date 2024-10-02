import React from 'react';
import './styles/SectionTitle.css'; 

interface SectionTitleProps {
    text: string; 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return <h3 className="section-title">{text}</h3>;
};

export default SectionTitle;
