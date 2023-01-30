import React from 'react'
import "./Footer.scss";
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom"  className="app__footer" fluid>
        <p className="app__footer-top">
          @Copyright Marta Leszczyńska. All Rights Reserved.
        </p>
        <p className="app__footer-bottom">
          Website by <span className='app__footer-name'><a href="https://github.com/jjlagoutaris" target="_blank" rel="noreferrer">John Lagoutaris</a></span>
        </p>
      </Navbar>

    </>
  )
}

export default Footer