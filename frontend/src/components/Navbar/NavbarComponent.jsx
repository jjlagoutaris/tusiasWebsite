import React, { useState } from "react";
import "./NavbarComponent.scss";
import { Link } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  Col,
  Stack,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";

const NavbarComponent = () => {

  const [ showOffCanvas, setShowOffCanvas ] = useState(false);
  const toggleOffCanvas = () => {
    setShowOffCanvas((show) => !showOffCanvas);
  }

  return (
    <>
      <Navbar
        key="lg"
        bg="light"
        expand="lg"
        className="app__navbar-bg"
        sticky="top"
      >
        <Container fluid>

          <Col>
            <Navbar.Brand href="/" className="app__navbar-logo app__header-font-variant">
              Moments
            </Navbar.Brand>
          </Col>

          <Col className="app__flexCenter app__navbar-col2">
            <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-lg`}
                className="navbar-right"
                onClick={toggleOffCanvas}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
                show={showOffCanvas}
                onHide={toggleOffCanvas}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Moments
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Stack gap="3" direction="horizontal" className="app__paragraph-text">
                      <Link to={"/"} onClick={toggleOffCanvas}>Home</Link>
                      <Link to={"/About"} onClick={toggleOffCanvas}>About</Link>
                      <Link to={"/Blog"} onClick={toggleOffCanvas}>Blog</Link>
                      <Link to={"/Services"} onClick={toggleOffCanvas}>Services</Link>
                      <Link to={"/Contact"} onClick={toggleOffCanvas}>Contact</Link>
                    </Stack>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>

            <div className="app__navbar-socials">
              <a
                href="https://www.instagram.com/_vienaragis_/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="light">
                  <FaInstagram />
                </Button>
              </a>
              <a
                href="mailto:marta.wokini2@gmail.com"
              >
                <Button variant="light">
                  <FaEnvelope/>
                </Button>
              </a>
              <a
                href="https://github.com/jjlagoutaris"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="light">
                  <FaDiscord />
                </Button>
              </a>
            </div>
          </Col>
          
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
