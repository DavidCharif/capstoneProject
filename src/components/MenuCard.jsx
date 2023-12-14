/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import '../Styles/MenuCard.css'
import Bruscheta from '../assets/bruchetta.svg'
import GreekSalad from '../assets/greek salad.jpg'
import LemonDessert from '../assets/lemon dessert.jpg'
import ButtonDelivery from './ButtonDelivery'

const MenuCard = ({ ...props }) => {
  const { name, price, description, _id } = props
  const images = [
    GreekSalad, Bruscheta, LemonDessert
  ]

  return (
    <article className='menu-card'>
        <img src={images[_id]} alt={name} height={200} />
        <section className='menu-card-content'>
        <div className='nameAndPrice'>
            <b>{name}</b> <i className='price'>{price}</i>
        </div>
        <p>{description}</p>

        <ButtonDelivery />
        </section>

    </article>
  )
}

export default MenuCard
