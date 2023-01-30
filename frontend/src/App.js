import React from 'react';

import {About, Blog, Contact, Home, Services, NotFound} from './pages';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavbarComponent } from './components';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
