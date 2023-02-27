import React from 'react'
import { BlogComponent, ServicesComponent } from '../components'
import { About } from '../containers'

const AboutPage = () => {
  return (
    <>
      <About />
      <BlogComponent />
      <ServicesComponent />
    </>
  )
}

export default AboutPage