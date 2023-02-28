import React from 'react';

import {AboutPage, BlogPage, BlogPostPage, ContactPage, Home, ServicesPage, NotFound} from './pages';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavbarComponent } from './components';
import { Footer } from './containers';

function App() {
  return (
    <>
      <div className="app__flexColumn">
        <NavbarComponent />
        <Routes>
          <Route path="/tusiasWebsite/" element={<Home />} />
          <Route path="/tusiasWebsite/Blog" element={<BlogPage />} />
          <Route path="/tusiasWebsite/Blog/:slug" element={<BlogPostPage />} />
          <Route path="/tusiasWebsite/Contact" element={<ContactPage />} />
          <Route path="/tusiasWebsite/Services" element={<ServicesPage />} />
          <Route path="/tusiasWebsite/About" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
