import React, { useState } from 'react'; 
import './TopSection.css';

const TopSectionWithoutBtn: React.FC = () => {
    const [animate, setAnimate] = useState(false); 

    const logo1 = '/assets/logo/logo1.jpg';
    const logo2 = '/assets/logo/logo2.jpg';
    const logo3 = '/assets/logo/logo3.png';
    const logo4 = '/assets/logo/logo4.png';


    return (
        <div className="top-section-container">
            <div className="logos">
                <img src={logo1} alt="Logo 1" className="logo" />
                <img src={logo2} alt="Logo 2" className="logo" />
              
            </div>
            <div className="text-section">
                <h1>
                    Освітня<br />
                    екосистема для<br />
                    розвитку кар'єри в IT
                </h1>
               
            </div>
        </div>
    );
};

export default TopSectionWithoutBtn;