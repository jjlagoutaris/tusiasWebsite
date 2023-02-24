import React from 'react';

import {AboutPage, BlogPage, ContactPage, Home, ServicesPage, NotFound} from './pages';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavbarComponent } from './components';
import { Footer } from './containers';

function App() {
  return (
    <>
      <div className="app__background app__navbarCenter">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
