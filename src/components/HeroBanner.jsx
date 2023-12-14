import React from 'react'
import imageHero from '../assets/restauranfood.jpg'
import Button from './Button'
import '../Styles/HeroBanner.css'

const HeroBanner = () => {
  return (
    <section className='heroBanner'>
        <article>
            <h3>Little lemon</h3>
            <h4>Chicago</h4>
            <p>
                We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
            </p>
            <Button location="/booking" >
                Reserve a Table
            </Button>
        </article>
        <div className="imageContainer">
            <img src={imageHero} alt='Restaurant food' height={300}/>
        </div>
    </section>
  )
}

export default HeroBanner
