import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navigation() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="custom-navbar sticky-top shadow-sm"
    >
      <Navbar.Brand as={Link} to="/" className="brand-name">
        PSITS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/events" className="nav-link">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
