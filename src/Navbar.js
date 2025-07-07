import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../src/images/logo1.png";
const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar px-3">
      <Container fluid>
        {/* Top bar for mobile: logo and toggle */}
        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
          <Navbar.Brand
            className="logo d-flex flex-row align-items-center gap-1"
            href="#"
          >
            <img src={logo} />
            <h5 className="text-white fw-bold">Matt Zhang</h5>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="main-navbar"
            className="bg-white text-dark"
          />
        </div>

        <Navbar.Collapse id="main-navbar">
          {/* Desktop & Mobile shared layout */}
          <div className="navbar-flex-layout d-flex flex-column flex-lg-row justify-content-between align-items-lg-center w-100">
            {/* Left: Logo (only visible on lg and up) */}
            <div className="d-none d-lg-flex align-items-center">
              <Navbar.Brand
                className="logo d-flex flex-row align-items-center gap-1"
                href="#"
              >
                <img src={logo} />
                <h5 className="text-white fw-bold">Matt Zhang</h5>
              </Navbar.Brand>
            </div>

            {/* Center: Nav links */}
            <Nav className="nav-links d-flex flex-column flex-lg-row align-items-center gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">All Course</Nav.Link>
              <Nav.Link href="#pricing">Pages</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>

            {/* Right: CTA button */}
            <div className="mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-3">
              <Button className="cta-button">Sign In</Button>
              <Button className="cta-button2">Sign Up</Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
