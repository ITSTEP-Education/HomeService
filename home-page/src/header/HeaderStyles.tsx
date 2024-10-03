import Navbar from "react-bootstrap/Navbar";
import { FC } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export const StyledNavbar = styled(Navbar as FC)`
  background-color: #d9d9d9;
  font-weight: 600;
  min-height: 7em;
`;



export const StyledNavLinkLogo = styled(Nav.Link)`
  font-weight: 600;
  font-size: 1.2em;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 1.2em;
  color:#1E1E1E;
  text-decoration: none;
  padding:1%;
  white-space: nowrap;
`;
export const StyledNavLink = styled(StyledLink)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }
`;
export const StyledNavContainer = styled(Container)`
  justify-content: center !important;
  
`;
