import React from 'react'
import AboutUs from '../components/AboutUs'
import CustomersSay from '../components/CustomersSay'
import HeroBanner from '../components/HeroBanner'
import Hightlights from '../components/Hightlights'
import Layout from '../components/Layout'
import Main from '../components/Main'

const Home = () => {
  return (

   <>
    <Layout >
      <Main>
        <HeroBanner />
        <Hightlights />
        <CustomersSay />
        <AboutUs/>
      </Main>
    </Layout>
   </>
  )
}

export default Home
