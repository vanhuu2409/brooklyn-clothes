import React from "react";
import LayoutView from "../../../_widgets/layout/LayoutView";
import { Slide } from "react-slideshow-image";

const Testimonials = () => {
  const slides = [
    {
      title:
        "The quality and durability of the casual wear from this store is top-notch",
      imgUrl:
        "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Ellipse2.jpg?v=1690371975&width=120",
      name: "Daniel Lee",
      job: "Blogger",
    },
    {
      title:
        "I'm always on the hunt for comfortable and stylish casual wear, and this store never disappoints!",
      imgUrl:
        "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Ellipse1.jpg?v=1690371975&width=120",
      name: "Mark Davis",
      job: "Fitness ENTHUSIAST",
    },
    {
      title:
        "I love the unique and on-trend streetwear collection at this store. It's perfect for making a statement.",
      imgUrl:
        "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Ellipse3.jpg?v=1690371975&width=120",
      job: "MARKETING Manager",
      name: "Alex Rodriguez",
    },
  ];
  const properties = {
    transitionDuration: 700,
    duration: 5000,
    pauseOnHover: false,
    prevArrow: (
      <button className='hover:translate-x-2 hover:opacity-100 sm:hover:-translate-x-4 sm:px-6 h-full text-white transition-all opacity-50'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className=' lg:w-8 lg:h-8 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5 8.25 12l7.5-7.5'
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className='hover:-translate-x-2 hover:opacity-100 sm:hover:translate-x-4 sm:px-6 h-full text-white transition-all opacity-50'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className=' lg:w-8 lg:h-8 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m8.25 4.5 7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    ),
  };
  return (
    <div className='h-fit sm:py-0 bg-black-1 flex flex-col justify-center py-12 text-white'>
      <Slide {...properties}>
        {slides.map((item, i) => (
          <LayoutView key={i}>
            {/* slide item */}
            <div className='lg:px-20 text-white select-none'>
              <div className='flex flex-col gap-10'>
                <p className='text-black-4 text-center font-normal tracking-widest text-[.8rem] sm:text-[1rem]'>
                  what clients are saying
                </p>
                <div className='flex justify-center w-full text-center'>
                  <h2 className='lg:text-5xl w-full lg:max-w-[90%] md:text-3xl text-2xl font-bold leading-snug tracking-wide'>
                    {item.title}
                  </h2>
                </div>
                <div className='flex items-center justify-center gap-4'>
                  <img
                    src={item.imgUrl}
                    alt=''
                    className='size-16 bg-white rounded-full'
                  />
                  <div>
                    <p className='text-black-4 tracking-wide font-semibold text-[.8rem]'>
                      {item.job}
                    </p>
                    <span className='text-lg font-light text-white normal-case'>
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </LayoutView>
        ))}
      </Slide>
    </div>
  );
};

export default Testimonials;
