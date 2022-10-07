import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link to='/contact'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Blog</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar