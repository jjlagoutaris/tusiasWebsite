import React, { useEffect, useState } from "react";
import "./HelloComponent.scss";
import { Link } from "react-router-dom";
import { urlFor, client } from "../../client";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

const HelloComponent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="helloSection"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Container className="app__section-container app__flexCenter" id="app__hello-section-container" fluid>
        {data.map((hello, index) => (
          <Row key={index}>
            <Col className="app__section-picture-col">
              <img src={urlFor(hello.image)} alt={hello.header} className="app__section-picture" />
            </Col>
            <Col className="app__section-info">
              <h2 className="app__section-info-header">
                {hello.header}
              </h2>
              <p className="app__section-info-description">
                {hello.information}
              </p>
              <Link to="/About" className="app__section-info-button">
                {hello.button}
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};



export default HelloComponent;