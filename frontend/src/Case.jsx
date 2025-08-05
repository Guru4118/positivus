import React from 'react'
import p1 from "./assets/p1.png"

import p6 from "./assets/p2.png"

import p5 from "./assets/p3.png"

import p4 from "./assets/p4.png"

import p3 from "./assets/p5.png"

import p2 from "./assets/p6.png"

function Case() {
    return (
        <div className='mx-30 '>

            <div className='flex'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-xl'>Case Studies</p>
                </div>
                <div className='ml-20'>
                    <p>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
                </div>

            </div>

            <div className='my-10 bg-black flex text-white rounded'>

                <div className='p-10 border-r-1  border-white  ' >
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <p className='mt-4' style={{ color: "rgb(185,255,102)" }}>Learn more </p>

                </div>
                <div className='p-10 border-r-1  border-white  ' >
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <p className='mt-4' style={{ color: "rgb(185,255,102)" }}>Learn more </p>

                </div>
                <div className='p-10 border-r-1  border-white  ' >
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <p className='mt-4' style={{ color: "rgb(185,255,102)" }}>Learn more </p>

                </div>



            </div>

            <div className='flex'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-xl'>Team</p>
                </div>
                <div className='ml-20'>
                    <p>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
                </div>

            </div>

            <div className=' grid grid-cols-3 grid-rows-2 my-10 gap-5'>
                <div className="card border-1 grid corder-black shadow-2xl rounded-xl p-10">

                    <div className='flex border-b-1 border-black pb-10'>
                        <div>
                            <img src={p1} alt="" />
                        </div>
                        <div className=' ml-5 mt-10'>
                            <p className='font-bold'>John Smith</p>
                            <p>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-10">

                    <div className='flex border-b-1 border-black pb-10'>
                        <div>
                            <img src={p2} alt="" />
                        </div>
                        <div className=' ml-5 mt-10'>
                            <p className='font-bold'>John Smith</p>
                            <p>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-10">

                    <div className='flex border-b-1 border-black pb-10'>
                        <div>
                            <img src={p3} alt="" />
                        </div>
                        <div className=' ml-5 mt-10'>
                            <p className='font-bold'>John Smith</p>
                            <p>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-10">

                    <div className='flex border-b-1 border-black pb-10'>
                        <div>
                            <img src={p4} alt="" />
                        </div>
                        <div className=' ml-5 mt-10'>
                            <p className='font-bold'>John Smith</p>
                            <p>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-10">

                    <div className='flex border-b-1 border-black pb-10'>
                        <div>
                            <img src={p5} alt="" />
                        </div>
                        <div className=' ml-5 mt-10'>
                            <p className='font-bold'>John Smith</p>
                            <p>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>
                <div className="card border-1 grid corder-black shadow-xl rounded-xl p-10">

                    <div className='flex border-b-1 border-black pb-10'>
                        <div>
                            <img src={p6} alt="" />
                        </div>
                        <div className=' ml-5 mt-10'>
                            <p className='font-bold'>John Smith</p>
                            <p>CEO and Founder</p>
                        </div>

                    </div>

                    <div className='mt-5'>
                        <p>
                            10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                        </p>
                    </div>




                </div>




            </div>
            <div className="flex justify-end">
                <button className="bg-black text-white px-5 py-2 rounded mb-10 mr-3">
                    See all team
                </button>
            </div>





        </div>
    )
}

export default Case