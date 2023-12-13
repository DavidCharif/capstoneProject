import React, { createContext } from 'react'

export const StateOfApp = createContext()
const state = {
  theme: 'dark'
}

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  return (
        <StateOfApp.Provider value={state}>
            {children}
        </StateOfApp.Provider>
  )
}
