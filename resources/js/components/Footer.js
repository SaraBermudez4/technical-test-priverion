import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Footer = () => {
  return (
    <Navbar style={{ background: '#ffff0069' }} expand="lg" fixed="bottom">
      <Container>
        <Nav className="me-auto">
          &#169; 2022 Sara Bermudez Alvarez
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Footer;
