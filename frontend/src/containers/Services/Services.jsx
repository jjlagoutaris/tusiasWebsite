import React, { useState, useEffect } from 'react'
import "./Services.scss";

import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { client } from "../../client";
import { PortableText } from '@portabletext/react';

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type=="services"]';

    client.fetch(query).then((info) => setServices(info));
  }, []);

  return (
    <>
      <Container
        className="app__services-container app__flexColumn"
        id="app__services-container"
        fluid
      >

        <div className="app__services-container-top app__flexColumn">
          <h2 className="services-header app__header-font-variant">Services</h2>
          <p className="services-description app__paragraph-text-variant">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.
          </p>
        </div>

        <div className="app__services-container-bottom">
          <div className="services-section app__flexCenter">
            {services.map((service, index) => (
              <div
                className="services-section-card app__flexColumn app__paragraph-text"
                key={service.service + index}
              >
                <h3 className='app__services-card-header app__header-font-medium' style={{ marginTop: 20 }}>
                  {service.service}
                </h3>
                <PortableText value={service.body} />
              </div>
            ))}
          </div>

          <div className="services-extra-services app__flexColumn">
            <p className="services-extra-services-description app__paragraph-text-small">
              For more information, custom service requests, and/or price inquiries, please contact me: 
            </p>
            <Link to="/tusiasWebsite/Contact">
              <Button size="lg" id="app__services-button" className='app__paragraph-text'>
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <div className='services-prices'>
          <h4 className="services-prices-header">
            PRICES
          </h4>
          <Row className='services-prices-table'>
            {services.map((service, index) => (
              <Col xs={12} md={6} className="services-prices-price-row app__paragraph-text" key={index}>
                <h4 className="services-prices-serviceName">{service.service}</h4>
                <h5 className="services-prices-price">{service.price}</h5>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Services