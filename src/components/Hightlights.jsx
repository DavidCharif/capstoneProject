import React from 'react'
import '../Styles/Highlights.css'
import Button from './Button'
import Menu from './Menu'

const Hightlights = () => {
  return (
    <section >
      <div className='title'>
        <h2>
            This weeks specials!
        </h2>
        <Button>
            Online Menu
        </Button>
      </div>
      <Menu />
    </section>
  )
}

export default Hightlights
