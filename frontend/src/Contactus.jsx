import React from 'react'
import contact from "./assets/contact.png"
import logo from "./assets/logo.png"
import facebook from "./assets/linkedin.png"
import linkedin from "./assets/facebook.png"
import x from "./assets/x.png"


function Contactus() {
    return (
        <div className='mx-30'>
            <div className='flex'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-xl'>Contact Us</p>
                </div>
                <div className='ml-20'>
                    <p>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
                </div>

            </div>


            <div className=' rounded-xl flex bg-white  shadow-xl justify-center mt-5 mb-5 border-1 '>

                <div className='w-1/2 '>
                    <form action=" " className='p-10 '>
                        <label htmlFor="">Name</label>
                        <br />
                        <input type="text" placeholder='Name' className='border-1 mt-1 px-5 rounded py-2 mb-5 w-96' />
                        <br />

                        <label htmlFor="">Email</label>
                        <br />
                        <input type="text" placeholder='Email' className='border-1 px-5 rounded py-2 mb-5 mt-1 w-96' />
                        <br />

                        <label htmlFor="">Message</label>
                        <br />
                        <textarea name="Message" placeholder='Message' id="" className='border-1 w-96 px-5 rounded py-2 mb-5 mt-1'></textarea>
                        <br />

                        <button className=' rounded-xl bg-black text-white  px-5 py-2 '> Send Message</button>
                    </form>

                </div>
                <div className=' pt-10  ml-auto'>
                    <img src={contact} alt="" className='w-90' />
                </div>

            </div>

            <div className="footer bg-black  rounded-t-xl  ">
                <div className='flex justify-between p-5 '>

                    <div className='flex'>
                        <img src={logo} className='bg-white ' alt="" />
                        <p className='text-white font-bold text-2xl ml-2'>Positivus</p>

                    </div>

                    <div className='flex text-white  gap-10 mt-1'>
                        <a href="">About us</a>
                        <a href="">Services</a>
                        <a href="">Use Cases</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>


                    </div>

                    <div className='flex gap-5'>
                        <img src={facebook} alt="" className='' />

                        <img src={linkedin} alt="" />

                        <img src={x} alt="" />


                    </div>

                </div>


                <div className='flex text-white p-10 border-b-1 border-gray-200'>

                    <div className='w-1/3'>
                        <p className='text-black font-semibold  px-3  mr-50 rounded-full' style={{ backgroundColor: "rgb(185,255,102)" }}> Contact us</p>
                        <p className='pt-5'>Email: positivus@gmail.com</p>
                        <p className='py-5'>Phone: 9875984582</p>

                        <p>Address :1234, Earth <br /> city of Developers state 1324 </p>

                    </div>

                    <div className='w-2/3  pl-40 pt-10'>

                    <input type="text" className='border-1 p-3 mr-3 rounded border-gray-200' placeholder='Email' />
                    <button className='text-2xl px-5 py-3 rounded-full text-black' style={{ backgroundColor: "rgb(185,255,102)" }}>Subscribe</button>




                    </div>

                </div>



                <div>
                    <p className='text-center text-gray-100 mt-5'>© 2023 Positivus. All Rights Reserved.</p>
                </div>



            </div>
        </div>
    )
}

export default Contactus