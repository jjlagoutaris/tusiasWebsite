import React from 'react';
import { Header } from '../containers';
import { HelloComponent, ServicesComponent } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <HelloComponent />
      {/* <BlogComponent */}
      <ServicesComponent />
    </>
  )
}

export default Home