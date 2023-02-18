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
      <div className="app__background">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
