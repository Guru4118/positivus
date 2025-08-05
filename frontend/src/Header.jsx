import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from "./assets/logo.png"
function Header() {
  return (
    <div>
      <div className="header my-5 mx-30 flex flex-row items-center justify-between">
        <div className='flex flex-row gap-3 items-center   '>
          <img src={logo} alt="" className='w-6' />
          <p className="text-2xl font-semibold "> Positivus</p>
        </div>

        <div className='mt-2'>
          <a href="" className='pr-10 hover:text-white '>About us</a>
          <a href="" className='pr-10'>Services</a>
          <a href="" className='pr-10'>Use Cases</a>
          <a href="" className='pr-10'>Pricing</a>
          <a href="" className='pr-10'>Blog</a>

        </div>
      </div>
    </div>
  )
}

export default Header