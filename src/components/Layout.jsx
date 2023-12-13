/* eslint-disable react/prop-types */
// Layout.js
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
