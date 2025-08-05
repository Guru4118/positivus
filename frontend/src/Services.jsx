import React from 'react'
import { useState } from 'react'
import card1 from "./assets/tokyo.png"
import card2 from "./assets/tok1.png"
import card3 from "./assets/tok2.png"
import card4 from "./assets/tok3.png"
import card5 from "./assets/tok4.png"
import card6 from "./assets/tok5.png"
import cardimg from "./assets/ill.png"
function Services() {
    return (
        <div className='mx-30 mt-20 mb-20'>
            <div className='flex flex-row gap-20 '>
                <p
                    className="text-2xl px-3 font-bold text-center py-3 rounded"
                    style={{ backgroundColor: "rgb(185,255,102)" }}
                >
                    Services
                </p>


                <div className='mt-2'>
                    <p>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
                </div>


            </div>


            <div className="grid grid-cols-2 grid-rows-3 gap-5  mt-10">


                <div className="bg-gray-300 p-10 border-1 shadow-sm rounded-xl flex">

                    <div className="flex flex-col w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgb(185,255,102)" }} className=' mr-20 rounded-2xl font-bold text-xl  p-2'>Search  engine <br />optimization</p>

                        </div>

                        <div className='mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <img src={card1} alt="" />
                    </div>
                </div>

                <div className=" p-10 border-1 shadow-sm rounded-xl flex" style={{ backgroundColor: "rgb(185,255,102)" }}>
                    
                    <div className="flex flex-col w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className=' mr-20 rounded-2xl font-bold text-xl  p-2'>Search  engine <br />optimization</p>

                        </div>

                        <div className='mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <img src={card2} alt="" />
                    </div>
                </div>

                <div className="bg-black flex p-10 border-1 shadow-sm rounded-xl">
                      <div className="flex flex-col w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className=' mr-20 rounded-2xl font-bold text-xl  p-2'>Search  engine <br />optimization</p>

                        </div>

                        <div className='mt-auto'>
                            <p className='font-semibold text-white'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <img src={card3} alt="" />
                    </div>
                </div>
                <div className="bg-gray-300 flex p-10 border-1 shadow-sm rounded-xl">
                      <div className="flex flex-col w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgb(185,255,102)" }} className=' mr-20 rounded-2xl font-bold text-xl  p-2'>Search  engine <br />optimization</p>

                        </div>

                        <div className='mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <img src={card4} alt="" />
                    </div>
                </div>

                <div className=" p-10 border-1 flex  shadow-sm rounded-xl" style={{ backgroundColor: "rgb(185,255,102)" }}>
                     <div className="flex flex-col w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className=' mr-20 rounded-2xl font-bold text-xl  p-2'>Search  engine <br />optimization</p>

                        </div>

                        <div className='mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <img src={card5} alt="" />
                    </div>
                </div>
                <div className="bg-black p-10 border-1 flex shadow-sm rounded-xl"> <div className="flex flex-col w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className=' mr-20 rounded-2xl font-bold text-xl  p-2'>Search  engine <br />optimization</p>

                        </div>

                        <div className='mt-auto text-white'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <img src={card6} alt="" />
                    </div></div>


            </div>
            <div className='bg-gray-300 flex relative p-10 mt-10 rounded-xl '>

                <div className=' w-1/2 flex flex-col'>
                    <p className='h3'> Let's make things happen </p>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className='bg-black text-white px-5 py-2 mt-10 rounded-xl '> Get your free proposal</button>
                      <div className=' absolute right-30 top-0 '>
                <img src={cardimg} alt="" className='w-60' />


                </div>

                </div>

              



            </div>
            

        </div>
    )
}

export default Services