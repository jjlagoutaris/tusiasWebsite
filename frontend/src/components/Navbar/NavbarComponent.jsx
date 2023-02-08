import React from "react";

import { images } from "../../constants";
import "./NavbarComponent.scss";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar, Col, Stack, Button, Offcanvas } from 'react-bootstrap';

import {FaLinkedin, FaInstagram, FaDiscord} from 'react-icons/fa';

const NavbarComponent = () => {

  return(
  <>
    <Navbar key="lg" bg="light" expand="lg" className="app__navbar-bg" sticky="top">
      <Container fluid>
        

      <Col className="app__navbar-socials">
        <Button variant="light">
          <a href="https://github.com/jjlagoutaris" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </Button>
        <Button variant="light">
          <a href="https://github.com/jjlagoutaris" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </Button>
        <Button variant="light">
          <a href="https://github.com/jjlagoutaris" target="_blank" rel="noreferrer"><FaDiscord /></a>
        </Button>
      </Col>

        <Col>
          <Navbar.Brand href="/" className="app__navbar-logo">
            <img
              alt=""
              src={images.logo}
              width="80"
              height="80"
              className="d-inline-block"
            />
          </Navbar.Brand>
        </Col>


        <Col >
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
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
              <Nav className="justify-content-end flex-grow-1 pe-3" >
                <Stack gap="3" direction="horizontal">
                  <Link to={'/'}>Home</Link>
                  <Link to={'/About'}>About</Link>
                  <Link to={'/Blog'}>Blog</Link>
                  <Link to={'/Services'}>Services</Link>
                  <Link to={'/Contact'}>Contact</Link>
                </Stack>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Col>

      </Container>
    </Navbar>
  </>

  );
};





export default NavbarComponent;