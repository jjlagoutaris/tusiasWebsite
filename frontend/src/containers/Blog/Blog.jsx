import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { client, urlFor } from "../../client";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `*[_type=="post"] {
        title,
        slug,
        publishedAt,
        description,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
    } | order(publishedAt desc)`;

    client.fetch(query).then((info) => setPosts(info));
  }, []);

  return (
    <>
      <Container
        className="app__blog-container app__flexColumn"
        id="app__blog-container"
        fluid
      >
        <>
          <h2 className="app__blog-header app__header-font-variant">
            Moments
          </h2>
          
          <Row xs={1} md={2} lg={3} className="app__blog-posts">
            {posts.map((post) => (
              <Col key={post.slug.current}>
                <Card border="light" bg="light" className="app__blog-post app__flexColumn">
                  <Card.Img  variant="top"  src={urlFor(post.mainImage)} alt={post.title} />
                  <Card.Body>
                    <Link to={`/TusiasWebsite/blog/${post.slug.current}`}>
                      <Card.Title className="app__blog-card-title app__header-font-small">{post.title}</Card.Title>
                    </Link>
                    <Card.Text className="app__paragraph-text-variant">{post.description}</Card.Text>
                  </Card.Body>
                  <Link to={`/TusiasWebsite/blog/${post.slug.current}`}>
                    <Button variant="primary" className="app__button app__paragraph-text">
                      Read More
                    </Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      </Container>
    </>
  );
};

export default Blog;