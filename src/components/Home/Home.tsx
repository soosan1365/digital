import React from 'react'
import Hero from './Hero/Hero'
import Store from "./Store/Store"
import Category from './Category/Category'

const Home = () => {
  return (
    <div className='overflow-x-hidden  '>
      <Hero/>
      <Category/>
      <Store/>
    </div>
  )
}

export default Home
