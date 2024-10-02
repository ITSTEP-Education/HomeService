import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { CarouselContainer, ControlIcon, IndicatorDot, IndicatorWrapper } from './CarouselStyles';
import { CarouselCaption } from 'react-bootstrap';

import TestImg1 from './assets/carousel.jpg';
import TestImg2 from './assets/carousel1.jpg';
import TestImg3 from './assets/carousel2.jpg';

const CarouselComponent: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0); 

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex); 
    };

    return (
        <CarouselContainer>
            <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                prevIcon={<ControlIcon>‹‹</ControlIcon>}
                nextIcon={<ControlIcon isNext>››</ControlIcon>}
                indicators={false}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TestImg1}
                        alt="First slide"
                    />
                    <CarouselCaption>
                        <h3>HTML CSS JS</h3>
                    </CarouselCaption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TestImg2}
                        alt="Second slide"
                    />
                    <CarouselCaption>
                        <h3>CYBER SECURITY</h3>
                    </CarouselCaption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TestImg3}
                        alt="Third slide"
                    />
                    <CarouselCaption>
                        <h3>SYSTEM ADMIN</h3>   
                    </CarouselCaption>
                </Carousel.Item>
            </Carousel>

            <IndicatorWrapper>
                {[0, 1, 2].map((index) => (
                    <IndicatorDot
                        key={index}
                        isActive={activeIndex === index}
                        onClick={() => handleSelect(index)}
                    />
                ))}
            </IndicatorWrapper>
        </CarouselContainer>
    );
};

export default CarouselComponent;