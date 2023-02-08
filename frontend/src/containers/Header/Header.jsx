import React from 'react'
import './Header.scss';

import { Button, Container } from 'react-bootstrap'
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container className="app__header-container app__flexCenter" fluid>

      <div className="app__header-moments-container app__flexCenter">
        <h2 className="app__header-moments-headline">
          What is <span className='app__header-moments-headline-title'>Moments</span>?
        </h2>
        <p className="app__header-moments-info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quia dolorem, ex, suscipit labore esse nemo explicabo pariatur molestiae quos nam harum numquam doloribus? Quisquam corrupti molestias impedit consectetur pariatur incidunt ut eum officiis reiciendis? Saepe blanditiis cumque, ratione officia veniam nemo! Officia eos fuga animi ut ducimus. Possimus, atque.
        </p>
      </div>

      <div className="app__header-marta app__flexCenter">
        <img src={images.hero} alt="Marta Leszczyńska" className="app__header-marta-img" />
        <h3 className="app__header-marta-about-me-header">
          Who am I?
        </h3>
        <p className="app__header-marta-about-me">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laborum quibusdam modi distinctio soluta voluptatem, eligendi eos nulla voluptate cumque quo asperiores dolor accusantium, ipsam minus eum omnis quidem fugiat fuga exercitationem placeat necessitatibus eveniet sapiente nisi. Minima ut culpa, ea doloribus odit ducimus accusantium alias, dolor eum, iusto quod!
        </p>
      </div>

      <Button variant="primary" size="lg" className='app__header-button app__flexCenter'>
        <Link to="/Contact">Hire me</Link>
      </Button>

    </Container>
  )
}

export default Header