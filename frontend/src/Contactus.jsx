import React from 'react'
import contact from "./assets/contact.png"
import logo from "./assets/logo.png"
import facebook from "./assets/linkedin.png"
import linkedin from "./assets/facebook.png"
import x from "./assets/x.png"


function Contactus() {
    return (
        <div className='mx-5 md:mx-10 lg:mx-30'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-0'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-lg lg:text-xl w-fit'>Contact Us</p>
                </div>
                <div className='md:ml-10 lg:ml-20'>
                    <p className='text-sm md:text-base'>Explore Real-Life Examples of Our Proven Digital Marketing <br className='hidden lg:block' /> Success through Our Case Studies</p>
                </div>

            </div>


            <div className='rounded-xl flex flex-col lg:flex-row bg-white shadow-xl justify-center mt-5 mb-5 border-1'>

                <div className='w-full lg:w-1/2'>
                    <form action=" " className='p-5 md:p-8 lg:p-10'>
                        <label htmlFor="">Name</label>
                        <br />
                        <input type="text" placeholder='Name' className='border-1 mt-1 px-5 rounded py-2 mb-5 w-full lg:w-96' />
                        <br />

                        <label htmlFor="">Email</label>
                        <br />
                        <input type="text" placeholder='Email' className='border-1 px-5 rounded py-2 mb-5 mt-1 w-full lg:w-96' />
                        <br />

                        <label htmlFor="">Message</label>
                        <br />
                        <textarea name="Message" placeholder='Message' id="" className='border-1 w-full lg:w-96 px-5 rounded py-2 mb-5 mt-1'></textarea>
                        <br />

                        <button className='rounded-xl bg-black text-white px-5 py-2 w-full md:w-auto'>Send Message</button>
                    </form>

                </div>
                <div className='hidden lg:block pt-10 ml-auto'>
                    <img src={contact} alt="" className='w-90' />
                </div>

            </div>

            <div className="footer bg-black rounded-t-xl">
                <div className='flex flex-col md:flex-row justify-between p-5 gap-5 md:gap-0'>

                    <div className='flex justify-center md:justify-start'>
                        <img src={logo} className='bg-white' alt="" />
                        <p className='text-white font-bold text-xl md:text-2xl ml-2'>Positivus</p>

                    </div>

                    <div className='flex flex-wrap justify-center md:justify-start text-white gap-4 md:gap-10 mt-1 text-sm md:text-base'>
                        <a href="">About us</a>
                        <a href="">Services</a>
                        <a href="">Use Cases</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>


                    </div>

                    <div className='flex gap-5 justify-center md:justify-start'>
                        <img src={facebook} alt="" className='w-6 h-6 md:w-auto md:h-auto' />

                        <img src={linkedin} alt="" className='w-6 h-6 md:w-auto md:h-auto' />

                        <img src={x} alt="" className='w-6 h-6 md:w-auto md:h-auto' />


                    </div>

                </div>


                <div className='flex flex-col lg:flex-row text-white p-5 md:p-10 border-b-1 border-gray-200 gap-8 lg:gap-0'>

                    <div className='w-full lg:w-1/3 text-center lg:text-left'>
                        <p className='text-black font-semibold px-3 rounded-full w-fit mx-auto lg:mx-0 lg:mr-50' style={{ backgroundColor: "rgb(185,255,102)" }}>Contact us</p>
                        <p className='pt-5 text-sm md:text-base'>Email: positivus@gmail.com</p>
                        <p className='py-3 md:py-5 text-sm md:text-base'>Phone: 9875984582</p>

                        <p className='text-sm md:text-base'>Address: 1234, Earth <br /> city of Developers state 1324 </p>

                    </div>

                    <div className='w-full lg:w-2/3 lg:pl-40 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 lg:pt-10'>

                        <input type="text" className='border-1 p-3 rounded border-gray-200 w-full md:w-auto' placeholder='Email' />
                        <button className='text-lg md:text-2xl px-5 py-3 rounded-full text-black w-full md:w-auto' style={{ backgroundColor: "rgb(185,255,102)" }}>Subscribe</button>




                    </div>

                </div>



                <div className='py-5'>
                    <p className='text-center text-gray-100 text-sm md:text-base'>© 2023 Positivus. All Rights Reserved.</p>
                </div>



            </div>
        </div>
    )
}

export default Contactus
