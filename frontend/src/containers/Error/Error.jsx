import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Error = () => {
  return(
    <Container id="app__error-container" className="app__flexColumn">
      <h1 className="app__error-header">Error 404 - Page Not Found</h1>
      <Link to="/">
        <Button className="app__error-button">
          Return to Home
        </Button>
      </Link>
    </Container>
  );
}

export default Error;