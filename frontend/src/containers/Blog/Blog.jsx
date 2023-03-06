import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { client, urlFor } from "../../client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [blogInfo, setBlogInfo] = useState([]);

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

    const query2 = `*[_type=="blogPage"]`;

    client.fetch(query).then((info) => setPosts(info));
    client.fetch(query2).then((info) => setBlogInfo(info));
  }, []);

  return (
    <>
      {blogInfo.map((blogInfo, index) => (
        <Container
          className="app__blog-container app__flexColumn"
          id="app__blog-container"
          fluid
          key={index}
        >
          <>
            <h2 className="app__blog-header app__header-font-variant">
              {blogInfo.header}
            </h2>
            
            <Row xs={1} md={2} lg={3} className="app__blog-posts">
              {posts.map((post) => (
                <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  className="app__profile-item"
                  key={post.slug.current}
                >
                  <Col key={post.slug.current}>
                    <Card border="light" bg="light" className="app__blog-post app__flexColumn">
                      <Card.Img  variant="top"  src={urlFor(post.mainImage)} alt={post.title} />
                      <Card.Body>
                        <Link to={`/blog/${post.slug.current}`}>
                          <Card.Title className="app__blog-card-title app__header-font-small">{post.title}</Card.Title>
                        </Link>
                        <Card.Text className="app__paragraph-text-variant">{post.description}</Card.Text>
                      </Card.Body>
                      <Link to={`/blog/${post.slug.current}`}>
                        <Button variant="primary" className="app__button app__paragraph-text">
                          {blogInfo.button}
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                </motion.div>
              ))}
            </Row>
          </>
        </Container>
      ))}
    </>
  );
};

export default Blog;