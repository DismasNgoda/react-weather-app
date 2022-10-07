import React from 'react';
import Search from './Search';
import Contact from './Contact';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Blog from './Blog';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Search />
      <Routes>
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/blog" element={ <Blog/> } />
      </Routes>
      
    </div>
  )
}

export default App