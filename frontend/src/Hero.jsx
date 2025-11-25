import React from 'react'
import herimg from "./assets/hero.png"
import amazon from "./assets/amazon.png"
import av from "./assets/av.png"
import dribble from "./assets/dribble.png"
import hub from "./assets/hub.png"

import hv from "./assets/hv.png"
import vector from "./assets/Vector.png"
import netflix from "./assets/netflix.png"

import zoom from "./assets/zoom.png"

function Hero() {
  return (
    <div>
      <div className='mx-5 md:mx-10 lg:mx-30 flex flex-col lg:flex-row justify-between my-10'>

        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <p className="text-3xl md:text-4xl lg:text-6xl font-semibold">Navigating the digital landscape <br className='hidden lg:block' />for success</p>
          <p className='mt-5 lg:pr-10 text-sm md:text-base'>Our digital marketing agency helps <br className='hidden lg:block' /> businesses grow and succeed online through a range of <br className='hidden lg:block' />services including SEO, PPC, social media marketing, <br className='hidden lg:block' />and content creation.</p>
          <button className='bg-black text-white px-5 py-3 rounded-lg mt-10 lg:mt-20 shadow-2xl'>Book a consultation</button>
        </div>
        <div className='w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end'>
          <img src={herimg} alt="" className='max-w-full h-auto' />
        </div>


      </div>

      <div className='grid grid-cols-3 md:grid-cols-6 gap-5 lg:gap-0 lg:flex lg:justify-between mx-5 md:mx-10 lg:mx-30 my-5'>
        <img src={amazon} alt="" className='h-6 md:h-8 lg:h-auto object-contain mx-auto lg:mx-0' />
        <img src={dribble} alt="" className='h-6 md:h-8 lg:h-auto object-contain mx-auto lg:mx-0' />
        <img src={hub} alt="" className='h-6 md:h-8 lg:h-auto object-contain mx-auto lg:mx-0' />
        <img src={vector} alt="" className='h-6 md:h-8 lg:h-auto object-contain mx-auto lg:mx-0' />
        <img src={netflix} alt="" className='h-6 md:h-8 lg:h-auto object-contain mx-auto lg:mx-0' />
        <img src={zoom} alt="" className='h-6 md:h-8 lg:h-auto object-contain mx-auto lg:mx-0' />

      </div>
    </div>
  )
}

export default Hero
