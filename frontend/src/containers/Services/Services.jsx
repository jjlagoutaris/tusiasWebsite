import React, { useState, useEffect } from 'react'
import "./Services.scss";

import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { client } from "../../client";
import { PortableText } from '@portabletext/react';

const Services = () => {

  const [services, setServices] = useState([]);
  const [servicesInfo, setServicesInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type=="services"]';
    const query2 = '*[_type=="servicesInfo"]';

    client.fetch(query).then((info) => setServices(info));
    client.fetch(query2).then((info) => setServicesInfo(info));
  }, []);

  return (
    <>
    {servicesInfo.map((serviceInfo, index) => (
      <Container
        className="app__services-container app__flexColumn"
        id="app__services-container"
        fluid
        key={index}
      >
        <div className="app__services-container-top app__flexColumn">
          <h2 className="services-header app__header-font-variant">
            {serviceInfo.header}
          </h2>
          <p className="services-description app__paragraph-text-variant">
            {serviceInfo.description}
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
            {serviceInfo.moreInfo}
            </p>
            <Link to="/Contact">
              <Button size="lg" id="app__services-button" className='app__paragraph-text'>
                {serviceInfo.button}
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
    ))}
    </>
  )
}

export default Services