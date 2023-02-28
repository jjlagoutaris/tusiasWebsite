import React, { useEffect, useState } from "react";
import "./BlogPost.scss";
import { Container, Button } from "react-bootstrap";
import { client, urlFor } from "../../client";
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

const BlogPost = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const query = `*[slug.current == "${slug}"]{
      title,
      body,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      },
      author,
    }`;

    client.fetch(query).then((info) => setPost(info[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      { isLoading ? ( <h1>Loading...</h1> ) : (
        <Container
          className="app__blogpost-container app__flexColumn"
          id="app__blogpost-container"
          fluid
        >
          <h2 className="app__blogpost-header ">{post.title}</h2>
          {
            post.mainImage && post.mainImage.asset ? (
              <img src={urlFor(post.mainImage)} alt={post.title} title={post.title} className= "app__blogpost-main-picture" />
            ) : ''
          }
          <PortableText value={post.body} className="app__blogpost-body" />
          {/* {console.log()} */}
          <Link to={`/TusiasWebsite/blog/`}>
            <Button variant="primary" className="app__button">
              More Articles
            </Button>
          </Link>
        </Container>
      ) 
      }

    </>
  );
};

export default BlogPost;
