import Nav from "react-bootstrap/Nav";
import user_icon from "../assets/images/user_icon.png";
import { StyledLink, StyledNavContainer, StyledNavLink, StyledNavLinkLogo, StyledNavbar } from "./HeaderStyles";
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <StyledNavbar>
        <StyledNavContainer>
          <Nav>
            <StyledNavLinkLogo  as={StyledLink} to="/logo">LOGO</StyledNavLinkLogo>
            <StyledNavLink as={StyledLink} to="/">ГОЛОВНА</StyledNavLink>
            <StyledNavLink as={StyledLink} to="/education_page">ПРОГРАМИ НАВЧАННЯ</StyledNavLink>
            <StyledNavLink as={StyledLink} to="/admin_page">АДМІНІСТРАЦІЯ</StyledNavLink>

            <StyledNavLink  as={StyledLink} to="/user_page">
              ТВІЙ КАБІНЕТ <img width={30} src={user_icon} />
            </StyledNavLink>
          </Nav>
        </StyledNavContainer>
      </StyledNavbar>
    </>
  );
}

export default Header;

