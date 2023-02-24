import React, { useState, useEffect } from 'react'
import "./Services.scss";

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { urlFor, client } from "../../client";

const Services = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="aboutMe"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      {data.map((aboutMe, index) => (
        <Container className="app__services-container app__flexCenter" fluid key={index}>
          {aboutMe.header}
        </Container>
      ))}
    </>
  )
}

export default Services