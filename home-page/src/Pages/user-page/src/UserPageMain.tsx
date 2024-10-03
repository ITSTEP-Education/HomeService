import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage"; // Страница логина
import UserAccount from "./components/UserAccount/UserAccount"; // Страница аккаунта пользователя
import MainContainer from "./components/blok/MainContainer"; // Главная страница с контейнером
import MainContent from "./components/blok/MainContent";
import { Container } from "react-bootstrap";

function UserPageMain() {
  return (
    <>
      <Container>
        <MainContent />
      </Container>

      {/*
      
         <Router>
      <Routes>
   
        <Route path="/" element={<Navigate to="/main" />} />

        <Route path="/main" element={<MainContainer />} />


        <Route path="/login" element={<LoginPage />} />

       
        <Route path="/account" element={<UserAccount />} />
      </Routes>
    </Router>
      */}
    </>
  );
}

export default UserPageMain;
