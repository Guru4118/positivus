

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
  <Header />

  <section id="hero">
    <Hero />
  </section>

  <section id="services">
    <Services />
  </section>

  <section id="case">
    <Case />
  </section>

  <section id="testimonials">
    <TestimonialCarousel />
  </section>

  <section id="contact">
    <Contactus />
  </section>
</div>

  )

}


export default App