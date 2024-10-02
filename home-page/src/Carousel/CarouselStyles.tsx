import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  background: #002A41;
  padding: 3.5em;
`;

export const ControlIcon = styled.span<{isNext?: boolean}>`
  font-size: 6.5em;
  color: #F24822;
  font-weight: 300;
  padding: ${({ isNext }) => (isNext ? '0' : '0 10px')}; 
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const IndicatorDot = styled.div<{isActive: boolean}>`
  width: 12px;
  height: 12px;
  background-color: ${({ isActive }) => (isActive ? '#50D0F2' : '#E6E6E6')};
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
`;

export const CarouselCaption = styled(Carousel.Caption)`
  h3 {
    color: #fff;
  }
`;
