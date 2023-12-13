/* eslint-disable react/prop-types */
import React from 'react'

const BookingForm = ({ formData, setFormData, handleSubmit }) => {
  const setData = (e) => {
    // Use the callback form of setState to ensure you are working with the latest state
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={setData}
          name="date"
          value={formData?.date}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={setData}
          name="time"
          value={formData?.time}
        >
             <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={setData}
          name="guests"
          value={formData?.guests}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={setData}
          name="occasion"
          value={formData?.occasion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  )
}

export default BookingForm
