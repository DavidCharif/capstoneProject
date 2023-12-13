/* eslint-disable react/prop-types */
import React from 'react'
import '../Styles/Button.css'

const Button = ({ location, children }) => {
  return (
    <button className='buttonPrimary'>
      <a href={location}>
        {children}
      </a>
    </button>
  )
}

export default Button
