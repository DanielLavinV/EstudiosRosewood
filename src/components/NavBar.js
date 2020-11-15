import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function NavBar(props) {
  return (
    <Navbar id={props.id} sticky="top" expand="lg">
      <Navbar.Brand href="#logo-container" className="d-xs-none d-sm-none d-md-none d-lg-block">
      <img
        src={props.imgSrc}
        className="main-navbar-logo d-inline-block align-top"
        alt="logo"
      />
      </Navbar.Brand>
      <Navbar.Brand className="d-xs-block d-sm-block d-md-block d-lg-none">
        Navegación
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#logo-container">Inicio</Nav.Link>
          <Nav.Link href="#services-container">Servicios</Nav.Link>
          <Nav.Link href="#">Redes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
