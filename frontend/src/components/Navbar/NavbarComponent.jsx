import React from "react";
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
            <Navbar.Brand href="/tusiasWebsite/" className="app__navbar-logo app__header-font-variant">
              Moments
            </Navbar.Brand>
          </Col>

          <Col className="app__flexCenter app__navbar-col2">
            <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-lg`}
                className="navbar-right"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Moments
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Stack gap="3" direction="horizontal" className="app__paragraph-text">
                      <Link to={"/"}>Home</Link>
                      <Link to={"/About"}>About</Link>
                      <Link to={"/Blog"}>Blog</Link>
                      <Link to={"/Services"}>Services</Link>
                      <Link to={"/Contact"}>Contact</Link>
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
