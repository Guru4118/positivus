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
        <div className='mx-5 md:mx-10 lg:mx-30 mt-10 lg:mt-20 mb-10 lg:mb-20'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20'>
                <p
                    className="text-xl lg:text-2xl px-3 font-bold text-center py-2 lg:py-3 rounded w-fit"
                    style={{ backgroundColor: "rgb(185,255,102)" }}
                >
                    Services
                </p>


                <div className='mt-2 text-center md:text-left'>
                    <p className='text-sm md:text-base'>At our digital marketing agency, we offer a range of services to <br className='hidden lg:block' /> help businesses grow and succeed online. These services include:</p>
                </div>


            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 gap-5 mt-10">


                <div className="bg-gray-300 p-5 md:p-8 lg:p-10 border-1 shadow-sm rounded-xl flex flex-col md:flex-row">

                    <div className="flex flex-col w-full md:w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgb(185,255,102)" }} className='md:mr-10 lg:mr-20 rounded-2xl font-bold text-lg lg:text-xl p-2'>Search engine <br className='hidden md:block' />optimization</p>

                        </div>

                        <div className='mt-5 md:mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end'>
                        <img src={card1} alt="" className='max-w-full h-auto' />
                    </div>
                </div>

                <div className="p-5 md:p-8 lg:p-10 border-1 shadow-sm rounded-xl flex flex-col md:flex-row" style={{ backgroundColor: "rgb(185,255,102)" }}>

                    <div className="flex flex-col w-full md:w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className='md:mr-10 lg:mr-20 rounded-2xl font-bold text-lg lg:text-xl p-2'>Search engine <br className='hidden md:block' />optimization</p>

                        </div>

                        <div className='mt-5 md:mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end'>
                        <img src={card2} alt="" className='max-w-full h-auto' />
                    </div>
                </div>

                <div className="bg-black flex flex-col md:flex-row p-5 md:p-8 lg:p-10 border-1 shadow-sm rounded-xl">
                      <div className="flex flex-col w-full md:w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className='md:mr-10 lg:mr-20 rounded-2xl font-bold text-lg lg:text-xl p-2'>Search engine <br className='hidden md:block' />optimization</p>

                        </div>

                        <div className='mt-5 md:mt-auto'>
                            <p className='font-semibold text-white'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end'>
                        <img src={card3} alt="" className='max-w-full h-auto' />
                    </div>
                </div>
                <div className="bg-gray-300 flex flex-col md:flex-row p-5 md:p-8 lg:p-10 border-1 shadow-sm rounded-xl">
                      <div className="flex flex-col w-full md:w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgb(185,255,102)" }} className='md:mr-10 lg:mr-20 rounded-2xl font-bold text-lg lg:text-xl p-2'>Search engine <br className='hidden md:block' />optimization</p>

                        </div>

                        <div className='mt-5 md:mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end'>
                        <img src={card4} alt="" className='max-w-full h-auto' />
                    </div>
                </div>

                <div className="p-5 md:p-8 lg:p-10 border-1 flex flex-col md:flex-row shadow-sm rounded-xl" style={{ backgroundColor: "rgb(185,255,102)" }}>
                     <div className="flex flex-col w-full md:w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className='md:mr-10 lg:mr-20 rounded-2xl font-bold text-lg lg:text-xl p-2'>Search engine <br className='hidden md:block' />optimization</p>

                        </div>

                        <div className='mt-5 md:mt-auto'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end'>
                        <img src={card5} alt="" className='max-w-full h-auto' />
                    </div>
                </div>
                <div className="bg-black p-5 md:p-8 lg:p-10 border-1 flex flex-col md:flex-row shadow-sm rounded-xl">
                    <div className="flex flex-col w-full md:w-1/2">
                        <div>
                            <p style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} className='md:mr-10 lg:mr-20 rounded-2xl font-bold text-lg lg:text-xl p-2'>Search engine <br className='hidden md:block' />optimization</p>

                        </div>

                        <div className='mt-5 md:mt-auto text-white'>
                            <p className='font-semibold'>Learn more</p>
                        </div>
                    </div>



                    <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end'>
                        <img src={card6} alt="" className='max-w-full h-auto' />
                    </div>
                </div>


            </div>
            <div className='bg-gray-300 flex flex-col lg:flex-row relative p-5 md:p-8 lg:p-10 mt-10 rounded-xl'>

                <div className='w-full lg:w-1/2 flex flex-col'>
                    <p className='text-xl md:text-2xl font-bold'>Let's make things happen</p>
                    <p className='mt-3 text-sm md:text-base'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className='bg-black text-white px-5 py-2 mt-5 lg:mt-10 rounded-xl w-fit'>Get your free proposal</button>
                </div>

                <div className='hidden lg:block absolute right-30 top-0'>
                    <img src={cardimg} alt="" className='w-60' />
                </div>

            </div>


        </div>
    )
}

export default Services
