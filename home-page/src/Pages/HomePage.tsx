import React from "react";
import TopSection from "../EducationComponents/TopSection/TopSection";
import CarouselComponent from "../Carousel/CarouselComponent";
import Footer from "../footer/FooterComponent";
import Header from "../header/HeaderComponent";
import CardContainer from "../ProgramLevel/CardContainer";
import { Container } from "react-bootstrap";
import CardsForProgrammingLangs from "../EducationComponents/CardsForProgrammingLangs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./AdminPage";

import EducationPage from "./EducationPage";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <Container>
        <TopSection />
      </Container>
      <Container>
         <CardContainer/>
        </Container>
    
      <CarouselComponent />
    </div>
  );
};

export default HomePage;
