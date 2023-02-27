import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Container } from "react-bootstrap";
import { client, urlFor } from "../../client";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="blog"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Container
        className="app__blog-container"
        id="app__blog-container"
        fluid
      >
        Blogger
      </Container>
    </>
  );
};

export default Blog;