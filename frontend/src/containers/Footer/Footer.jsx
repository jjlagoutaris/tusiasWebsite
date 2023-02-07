import React from 'react'
import "./Footer.scss";
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar className="app__footer">
        <p className="app__footer-top">
        © Copyright Marta Leszczyńska. All Rights Reserved.
        </p>
        <p className="app__footer-bottom">
          Website by <a href="https://jjlagoutaris.github.io/myWebsite/" target="_blank" rel="noreferrer" className='app__footer-name'>John Lagoutaris</a>
        </p>
      </Navbar>
    </>
  )
}

export default Footer