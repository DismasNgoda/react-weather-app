import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


function NavBar() {
  return (
    <div className='nav-bar'>
        <ul className='nav-bar-elements'>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/about'> About</Link>
        <Link to='/blog'>Blog</Link>
        </ul>
    </div>
  )
}

export default NavBar