import React, { useEffect, useState } from "react";
import "./Header.scss";

import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { client } from "../../client";

import { images } from "../../constants";

const Header = () => {
  const [things, setThings] = useState([]);

  useEffect(() => {
    const query = '*[_type=="homeInfo"]';

    client.fetch(query).then((info) => setThings(info));
  }, []);

  return (
    <>
      {things.map((thing, index) => (
        <Container
          className="app__header-container app__flexCenter"
          id="app__header-container"
          key={index}
        >
          <div className="app__header-moments-container app__flexCenter">
            <div className="left">
              <h2 className="app__header-moments-headline">{thing.header}</h2>
              <p className="app__header-moments-info">
                {thing.headerDescription}
              </p>
            </div>

            <div className="right app__flexCenter">
              <img
                src={images.momentsColor}
                alt="moments-logo"
                className="app__header-moments-pic"
              />
            </div>
          </div>

          <Link to="/tusiasWebsite/Contact">
            <Button variant="info" size="lg" className="app__header-button">
              {thing.button}
            </Button>
          </Link>
        </Container>
      ))}
    </>
  );
};

export default Header;
