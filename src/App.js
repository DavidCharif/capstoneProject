/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import BookingPage from './pages/BookingPage'
import Home from './pages/Home'

function App () {
  const routes = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/booking', element: <BookingPage/> }
  ])
  return (
    <>

        <RouterProvider router={routes} />

    </>
  )
}

export default App
