import React, { useState, useEffect } from "react";
import "./About.scss";
import { Container } from "react-bootstrap";
import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

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
          fluid
        >
          <div className="top">
            <h1 className="app__header-font-variant">{aboutMe.header}</h1>
          </div>

          <div className="bottom app__flexCenter">
            <div className="app__about-bio app__paragraph-text">
              <PortableText value={aboutMe.body} className="app__about-body" />
            </div>
            <img src={urlFor(aboutMe.image)} alt="Marta Leszczyńska" className="app__about-picture" />
          </div>

        </Container>
      ))}
    </>
  );
};

export default About;
