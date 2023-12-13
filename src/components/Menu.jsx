import React from 'react'
import jsonData from '../data/specials.json'
import MenuCard from './MenuCard'
const Menu = () => {
  const { specialItems } = jsonData
  return (
    <section className='especialContainers'>
        { specialItems.map(item => <MenuCard {...item} key={item._id} />) }
    </section>
  )
}

export default Menu
