import React from 'react'
import Hero from './Hero/Hero'
import Features from './Feature/Features'
import CustomerSupport from './CustomerSupport/CustomerSupport'
import Price from './Price/Price'
import Company from './Company/Company'
import Footer from './Footer/Footer'
import Sales from './Price/Sales'


const Home = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <Features />
      <CustomerSupport />
      <Price />
      <Sales />
      <Company />
    </div>
  )
}

export default Home
