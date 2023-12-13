/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react'
import BookingForm from '../components/BookingForm'
import Layout from '../components/Layout'
import Main from '../components/Main'

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00', // set a default time
    guests: 1,
    occasion: 'Birthday' // set a default occasion
  })

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return { ...state, availableTimes: action.payload }
      default:
        return state
    }
  }

  // Initial state for useReducer
  const initialState = {
    availableTimes: [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]
  }

  // Use reducer with the initial state
  const [state, dispatch] = useReducer(reducer, initialState)

  // Function to initialize times (you can replace this with your actual logic)
  const initializeTimes = () => {
    return initialState.availableTimes
  }

  // Function to update times based on the selected date
  const updateTimes = (selectedDate) => {
    const updatedTimes = initializeTimes()
    dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes })
  }

  // useEffect to simulate the effect of changing the date

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic with formData
    console.log('Form data submitted:', formData)
  }
  return (
    <Layout>
      <Main>
      <BookingForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      </Main>
    </Layout>
  )
}

export default BookingPage
