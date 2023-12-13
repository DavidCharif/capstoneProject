import React, { useContext } from 'react'
import { StateOfApp } from '../Context/Context'
import '../Styles/Header.css'
import Logo from '../assets/Logo.svg'

// eslint-disable-next-line react/prop-types
function Header ({ children }) {
  const state = useContext(StateOfApp)
  console.log('state', state)
  return (
    <header>
      <img src={Logo} />
      {
       children
      }</header>
  )
}

export default Header
