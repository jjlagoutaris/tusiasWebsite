import React, { useEffect, useState } from "react";
import "./BlogComponent.scss";
import { Link } from "react-router-dom";
import { urlFor, client } from "../../client";

import { Container, Row, Col } from "react-bootstrap";

const BlogComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="blogSection"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Container
        className="app__section-container app__flexCenter"
        id={`app__blog-section-container`}
        fluid
      >
        {data.map((blog, index) => (
          <Row key={index} className="section-row">
            <Col className="app__section-picture-col">
              <img
                src={urlFor(blog.image)}
                alt={blog.header}
                className="app__section-picture"
              />
            </Col>
            <Col className="app__section-info">
              <h2 className="app__section-info-header">{blog.header}</h2>
              <p className="app__section-info-description">
                {blog.information}
              </p>
              <Link to="/Blog" className="app__section-info-button">
                {blog.button}
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default BlogComponent;
