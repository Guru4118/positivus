import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
  },
  {
    name: 'Sarah Johnson',
    title: 'CEO of Acme Inc.',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
  },
  {
    name: 'Michael Brown',
    title: 'Digital Manager at PixelCorp',
    quote:
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sapiente libero quia inventore id exercitationem, asperiores, atque ratione saepe eaque rerum mollitia necessitatibus odit totam impedit doloremque sint perspiciatis aspernatur!"  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div>
         <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-0 mx-5 md:mx-10 lg:mx-30 mb-10'>

                <div>
                    <p style={{ backgroundColor: "rgb(185,255,102)" }} className='px-5 py-2 rounded-xl font-bold text-lg lg:text-xl w-fit'>Testimonials</p>
                </div>
                <div className='md:ml-10 lg:ml-20'>
                    <p className='text-sm md:text-base'>Explore Real-Life Examples of Our Proven Digital Marketing <br className='hidden lg:block' /> Success through Our Case Studies</p>
                </div>

            </div>
    <div className="bg-[#1c1c24] text-white py-8 md:py-10 lg:py-12 px-4 md:px-10 lg:px-20 rounded-2xl mx-5 md:mx-10 lg:mx-30 mb-10 relative">
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button onClick={prev} className="text-gray-400 hover:text-white p-2 flex-shrink-0">
          <FaArrowLeft className='text-lg md:text-xl' />
        </button>

        {/* Testimonial Card */}
        <div className="relative w-full max-w-2xl mx-2 md:mx-4 border rounded-xl px-4 md:px-6 py-6 md:py-8" style={{ border: "rgb(185,255,102)" }}  >
          <p className="text-gray-200 mb-4 text-sm md:text-base">"{testimonials[current].quote}"</p>
          <p className="text-white font-bold mt-4 md:mt-6 text-sm md:text-base">{testimonials[current].name}</p>
          <p className="text-xs md:text-sm text-gray-400">{testimonials[current].title}</p>
        </div>

        {/* Next Button */}
        <button onClick={next} className="text-gray-400 hover:text-white p-2 flex-shrink-0">
          <FaArrowRight className='text-lg md:text-xl' />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-gray-600'
            }`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
