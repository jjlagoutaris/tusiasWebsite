import React, { useState, useEffect } from "react";
import "./About.scss";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { urlFor, client } from "../../client";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="aboutMe"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      {data.map((aboutMe, index) => (
        <Container
          className="app__about-container app__flexCenter"
          id="app__about-container"
          key={index}
        >
          <div className="top">
            <h1>{aboutMe.header}</h1>
          </div>

          <div className="bottom app__flexCenter">
            <p className="app__about-bio">
              {aboutMe.bio}
            </p>
            <img src={urlFor(aboutMe.image)} alt="Marta Leszczyńska" className="app__about-picture" />
          </div>

        </Container>
      ))}
    </>
  );
};

export default About;
