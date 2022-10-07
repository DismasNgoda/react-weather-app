import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//   } from './NavbarElements';

function NavBar() {
  return (
    <div className='nav-bar'>
        <ul className='nav-bar-elements'>
        <Link to='/contact'><li>Contact Us</li></Link>
        <Link to='/about'> <li>About</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
        </ul>
    </div>
  )
}

export default NavBar