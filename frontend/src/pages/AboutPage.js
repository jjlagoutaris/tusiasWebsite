import React from 'react'
import { BlogComponent, ServicesComponent } from '../components'
import { About } from '../containers'

const AboutPage = () => {
  return (
    <>
      <About />
      <BlogComponent direction="regular" />
      <ServicesComponent />
    </>
  )
}

export default AboutPage