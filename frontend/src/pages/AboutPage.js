import React from 'react'
import { BlogComponent, ServicesComponent } from '../components'
import { About } from '../containers'

const AboutPage = () => {
  return (
    <>
      <About />
      <BlogComponent direction="reverse" />
      <ServicesComponent />
    </>
  )
}

export default AboutPage