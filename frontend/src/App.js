import React from 'react';

// import { About, Footer, Header, Services, Blog } from './containers'
import {About, Blog, Contact, Home, Services, NotFound} from './pages';
import {Link, Route, Routes} from "react-router-dom"
import './App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
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
