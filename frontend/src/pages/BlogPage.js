import React from 'react'
import { HelloComponent, ServicesComponent } from '../components'
import { Blog } from '../containers'

const BlogPage = () => {
  return (
    <>
      <Blog />
      <HelloComponent />
    </>
  )
}

export default BlogPage