import React from 'react'

import { Link } from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Menu'>Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href='#order'>Order Online</a></li>
        <li><a href='Login'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav
