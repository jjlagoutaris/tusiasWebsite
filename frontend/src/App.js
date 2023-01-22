import React from 'react';

import { About, Footer, Header, Services, Blog } from './containers'
import {About, Blog, Contact, Home, Services, NotFound} from './pages';
import {Link, Route, Routes} from "react-router-dom"
import './App.scss';

function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
