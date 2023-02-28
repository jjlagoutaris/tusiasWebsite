import React from 'react'
import { HelloComponent, ServicesComponent } from '../components';
import BlogPost from '../containers/BlogPost/BlogPost'

const BlogPostPage = () => {
  return (
    <>
      <BlogPost />
      <HelloComponent />
      <ServicesComponent />
    </>
  )
}

export default BlogPostPage;