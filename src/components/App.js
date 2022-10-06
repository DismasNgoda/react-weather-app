import React from 'react';
import Search from './Search';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, Links } from 'react-router-dom';

function App() {
  return (
    <div>
      <Search />
      <Routes>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      
    </div>
  )
}

export default App