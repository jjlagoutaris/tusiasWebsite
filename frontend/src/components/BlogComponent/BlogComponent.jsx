import React, { useEffect, useState } from "react";
import "./BlogComponent.scss";
import { Link } from "react-router-dom";
import { urlFor, client } from "../../client";

import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const BlogComponent = (direction) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="blogSection"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Container className="app__section-container" id={`app__blog-section-container-${direction}`} fluid>
        {data.map((blog, index) => (
          <Row key={index} className="section-row">
            <Col className="app__section-picture-col">
              <img src={urlFor(blog.image)} alt={blog.header} className="app__section-picture" />
            </Col>
            <Col className="app__section-info">
              <h2 className="app__section-info-header">
                {blog.header}
              </h2>
              <p className="app__section-info-description">
                {blog.information}
              </p>
              <Link to="/tusiasWebsite/Blog">
                <Button variant="info" size="lg" className="app__section-info-button">
                  {blog.button}
                </Button>
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};



export default BlogComponent;