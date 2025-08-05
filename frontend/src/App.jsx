

import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import Case from './Case'
import Contactus from './Contactus'
import TestimonialCarousel from './TestimonialCarousel'
function App() {
  return (

    
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Case/>
      <TestimonialCarousel/>
      <Contactus/>
    </div>
  )

}


export default App