/* eslint-disable react/prop-types */
import React from 'react'

const Main = ({ children }) => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {children}
    </main>
  )
}

export default Main
