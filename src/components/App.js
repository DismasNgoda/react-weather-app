import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contact from './Contact';
import Search from './Search';
import Blog from './Blog';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/about'><About /> </Route>
        <Route path='/contact'><Contact /> </Route>
        <Route path='/blog'><Blog /> </Route>
        <Route path=''><h1>404 Error: Page not </h1></Route>
      </Routes>
    </div>
  );
}

export default App;
