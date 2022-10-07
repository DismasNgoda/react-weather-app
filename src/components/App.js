import React from 'react';
import Search from './Search';
import Contact from './Contact';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Search />
      <Routes>
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      
    </div>
  )
}

export default App