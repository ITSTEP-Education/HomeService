import React from "react";
import ReactDOM from "react-dom/client"; // Необходимо импортировать createRoot из 'react-dom/client'
import "./index.css";
import TopSection from "./EducationComponents/TopSection/TopSection";
import SectionTitle from "./ProgramLevel/SectionTitle";
import { Carousel, Container } from "react-bootstrap";
import Footer from "./footer/FooterComponent";
import Header from "./header/HeaderComponent";
//import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselComponent from "./Carousel/CarouselComponent";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./Pages/AdminPage";
import EducationPage from "./Pages/EducationPage";
import UserPageMain from "./Pages/user-page/src/UserPageMain";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin_page" element={<AdminPage />} />
          <Route path="/user_page" element={<UserPageMain />} />
          <Route path="/education_page" element={<EducationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
