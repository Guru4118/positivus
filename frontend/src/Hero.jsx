import React from 'react'
import herimg from "./assets/hero.png"
import amazon from "./assets/amazon.png"
import av from "./assets/av.png"
import dribble from "./assets/dribble.png"
import hub from "./assets/hub.png"

import hv from "./assets/hv.png"
import vector from "./assets/vector.png"
import netflix from "./assets/netflix.png"

import zoom from "./assets/zoom.png"

function Hero() {
  return (
    <div>
      <div className='mx-30 flex flex-row justify-between my-10'>

        <div className='w-1/2'>
          <p className="text-6xl font-semibold">Navigating the digital landscape <br />for success</p>
          <p className='mt-5 pr-10'>Our digital marketing agency helps <br /> businesses grow and succeed online through a range of <br />services including SEO, PPC, social media marketing, <br />and content creation.</p>
          <button className='bg-black text-white px-5 py-3 rounded-lg mt-20 shadow-2xl  '>Book a consultation</button>
        </div>
        <div className='w-1/2'>
          <img src={herimg} alt="" />
        </div>


      </div>

      <div className='flex justify-between  mx-30 my-5'>
        <img src={amazon} alt="" />
        <img src={dribble} alt="" />
        <img src={hub} alt="" />
        <img src={vector} alt="" />
        <img src={netflix} alt="" />
        <img src={zoom} alt="" />

      </div>
    </div>
  )
}

export default Hero