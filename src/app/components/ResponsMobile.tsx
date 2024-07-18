"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import { log } from 'console'

const Responsmobile = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false)
  return (
    <div>
      <Navbar openNav={showNavHandler}/>
      <MobileNav nav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default Responsmobile
