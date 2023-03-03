import React, { useEffect, useState } from "react";
import "./ServicesComponent.scss";
import { Link } from "react-router-dom";
import { urlFor, client } from "../../client";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

const ServicesComponent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="servicesSection"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Container className="app__section-container app__flexCenter" id="app__services-section-container" fluid>
        {data.map((services, index) => (
          <Row key={index}>
            <Col className="app__section-picture-col">
              <img src={urlFor(services.image)} alt={services.header} className="app__section-picture" />
            </Col>
            <Col className="app__section-info">
              <h2 className="app__section-info-header">
                {services.header}
              </h2>
              <p className="app__section-info-description">
                {services.information}
              </p>
              <Link to="/Services" className="app__section-info-button">
                {services.button}
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};



export default ServicesComponent;