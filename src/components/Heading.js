import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";
export const Heading = () => {
  return (
    <Navbar color="dark" dark>
    <Container>
      <NavbarBrand href="/">Biblioteka</NavbarBrand>
      <Nav>
        <NavItem>
          <Link className="btn btn-primary" to="/add">Dodaj książkę</Link>
        </NavItem>
      </Nav>

    </Container>
  </Navbar>
  )
};
