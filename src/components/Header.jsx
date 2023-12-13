import React from 'react'
import '../Styles/Header.css'
import Logo from '../assets/Logo.svg'
import Nav from '../components/Nav'
// eslint-disable-next-line react/prop-types
function Header () {
  return (
    <header>
      <img src={Logo} />
      <Nav />
     </header>
  )
}

export default Header
