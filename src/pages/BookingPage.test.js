import { render, screen } from '@testing-library/react'
import React from 'react'
import BookingForm from '../components/BookingForm'
import BookingPage from './BookingPage'

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Make Your reservation')
  expect(headingElement).toBeInTheDocument()
})

test('initializeTimes returns the correct expected value', () => {
  // Assuming initializeTimes is a method on the BookingForm component
  const { result } = render(

    <BookingPage />

  )
  const initializeTimes = result.current.initializeTimes()
  const expectedValue = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]

  expect(initializeTimes).toEqual(expectedValue)
})
