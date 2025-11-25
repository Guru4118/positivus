import React from 'react'
import { useState } from 'react'
import logo from "./assets/logo.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className="header my-5 mx-5 md:mx-10 lg:mx-30 flex flex-row items-center justify-between">
        <div className='flex flex-row gap-3 items-center'>
          <img src={logo} alt="" className='w-6' />
          <p className="text-xl md:text-2xl font-semibold">Positivus</p>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className='lg:hidden flex flex-col gap-1.5 p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className='hidden lg:block mt-2'>
       <a href="#hero" className='pr-10'>About us</a>
<a href="#services" className='pr-10'>Services</a>
<a href="#case" className='pr-10'>Use Cases</a>
<a href="#testimonials" className='pr-10'>Testimonials</a>
<a href="#contact" className='pr-10'>Contact Us</a>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mx-5 md:mx-10 pb-5 border-b border-gray-200`}>
        <div className='flex flex-col gap-4'>
        <a href="#hero" className='hover:text-gray-600 py-2'>About us</a>
<a href="#services" className='hover:text-gray-600 py-2'>Services</a>
<a href="#case" className='hover:text-gray-600 py-2'>Use Cases</a>
<a href="#testimonials" className='hover:text-gray-600 py-2'>Testimonials</a>
<a href="#contact" className='hover:text-gray-600 py-2'>Contact Us</a>

        </div>
      </div>
    </div>
  )
}

export default Header
