/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Button.css'

const Button = ({ location, children }) => {
  return (
    <button className='buttonPrimary'>
      <Link to={location}>
        {children}
      </Link>
    </button>
  )
}

export default Button
