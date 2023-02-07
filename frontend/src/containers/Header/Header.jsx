import React from 'react'
import './Header.scss';

import { Button, Container } from 'react-bootstrap'
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container className="app__header-container" fluid>
      <main className="app__header">
        <p className="app__header-main-text">
          <span className="app__header-hej">Hey! Hej!</span> I'm <span className="app__header-name">Marta Leszczyńska</span>, <br />an English tutor, social media manager, and travel blogger from Poland
        </p>
        <img src={images.hero} alt="Marta Leszczyńska" className='app__header-photo'/>
        <Button variant="primary" size="lg">
          <Link to="/Contact">Hire me</Link>
        </Button>
      </main>
    </Container>
  )
}

export default Header