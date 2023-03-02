import React from 'react';
import { Header } from '../containers';
import { HelloComponent, BlogComponent } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <HelloComponent />
      <BlogComponent direction="reverse"/>
      {/* <ServicesComponent /> */}
    </>
  )
}

export default Home