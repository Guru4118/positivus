import React from 'react'
import p1 from "./assets/p1.png"

import p6 from "./assets/p2.png"

import p5 from "./assets/p3.png"

import p4 from "./assets/p4.png"

import p3 from "./assets/p5.png"

import p2 from "./assets/p6.png"

function Case() {
    return (
        <div className='mx-5 md:mx-10 lg:mx-30'>

            <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-0'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-lg lg:text-xl w-fit'>Case Studies</p>
                </div>
                <div className='md:ml-10 lg:ml-20'>
                    <p className='text-sm md:text-base'>Explore Real-Life Examples of Our Proven Digital Marketing <br className='hidden lg:block' /> Success through Our Case Studies</p>
                </div>

            </div>

            <div className='my-10 bg-black flex flex-col lg:flex-row text-white rounded'>

                <div className='p-5 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r-1 border-white'>
                    <p className='text-sm md:text-base'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <p className='mt-4' style={{ color: "rgb(185,255,102)" }}>Learn more </p>

                </div>
                <div className='p-5 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r-1 border-white'>
                    <p className='text-sm md:text-base'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <p className='mt-4' style={{ color: "rgb(185,255,102)" }}>Learn more </p>

                </div>
                <div className='p-5 md:p-8 lg:p-10 lg:border-r-1 border-white'>
                    <p className='text-sm md:text-base'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <p className='mt-4' style={{ color: "rgb(185,255,102)" }}>Learn more </p>

                </div>



            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-0'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-lg lg:text-xl w-fit'>Team</p>
                </div>
                <div className='md:ml-10 lg:ml-20'>
                    <p className='text-sm md:text-base'>Explore Real-Life Examples of Our Proven Digital Marketing <br className='hidden lg:block' /> Success through Our Case Studies</p>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 my-10 gap-5'>
                <div className="card border-1 grid corder-black shadow-2xl rounded-xl p-5 md:p-8 lg:p-10">

                    <div className='flex border-b-1 border-black pb-5 md:pb-8 lg:pb-10'>
                        <div className='flex-shrink-0'>
                            <img src={p1} alt="" className='w-16 md:w-20 lg:w-auto' />
                        </div>
                        <div className='ml-3 md:ml-5 mt-5 md:mt-8 lg:mt-10'>
                            <p className='font-bold text-sm md:text-base'>John Smith</p>
                            <p className='text-sm md:text-base'>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p className='text-sm md:text-base'>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-5 md:p-8 lg:p-10">

                    <div className='flex border-b-1 border-black pb-5 md:pb-8 lg:pb-10'>
                        <div className='flex-shrink-0'>
                            <img src={p2} alt="" className='w-16 md:w-20 lg:w-auto' />
                        </div>
                        <div className='ml-3 md:ml-5 mt-5 md:mt-8 lg:mt-10'>
                            <p className='font-bold text-sm md:text-base'>John Smith</p>
                            <p className='text-sm md:text-base'>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p className='text-sm md:text-base'>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-5 md:p-8 lg:p-10">

                    <div className='flex border-b-1 border-black pb-5 md:pb-8 lg:pb-10'>
                        <div className='flex-shrink-0'>
                            <img src={p3} alt="" className='w-16 md:w-20 lg:w-auto' />
                        </div>
                        <div className='ml-3 md:ml-5 mt-5 md:mt-8 lg:mt-10'>
                            <p className='font-bold text-sm md:text-base'>John Smith</p>
                            <p className='text-sm md:text-base'>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p className='text-sm md:text-base'>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-5 md:p-8 lg:p-10">

                    <div className='flex border-b-1 border-black pb-5 md:pb-8 lg:pb-10'>
                        <div className='flex-shrink-0'>
                            <img src={p4} alt="" className='w-16 md:w-20 lg:w-auto' />
                        </div>
                        <div className='ml-3 md:ml-5 mt-5 md:mt-8 lg:mt-10'>
                            <p className='font-bold text-sm md:text-base'>John Smith</p>
                            <p className='text-sm md:text-base'>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p className='text-sm md:text-base'>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-5 md:p-8 lg:p-10">

                    <div className='flex border-b-1 border-black pb-5 md:pb-8 lg:pb-10'>
                        <div className='flex-shrink-0'>
                            <img src={p5} alt="" className='w-16 md:w-20 lg:w-auto' />
                        </div>
                        <div className='ml-3 md:ml-5 mt-5 md:mt-8 lg:mt-10'>
                            <p className='font-bold text-sm md:text-base'>John Smith</p>
                            <p className='text-sm md:text-base'>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p className='text-sm md:text-base'>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-5 md:p-8 lg:p-10">

                    <div className='flex border-b-1 border-black pb-5 md:pb-8 lg:pb-10'>
                        <div className='flex-shrink-0'>
                            <img src={p6} alt="" className='w-16 md:w-20 lg:w-auto' />
                        </div>
                        <div className='ml-3 md:ml-5 mt-5 md:mt-8 lg:mt-10'>
                            <p className='font-bold text-sm md:text-base'>John Smith</p>
                            <p className='text-sm md:text-base'>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p className='text-sm md:text-base'>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>



            </div>
            <div className="flex justify-center lg:justify-end">
                <button className="bg-black text-white px-5 py-2 rounded mb-10 mr-3">
                    See all team
                </button>
            </div>





        </div>
    )
}

export default Case
