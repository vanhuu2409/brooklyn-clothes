import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      id: uuidv4(),
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/hero1-2.5x-min.webp?v=1686901151&width=1500",
      title: "Apparel Crafted to Match Your Rhythm of Life",
      subTitle:
        "Unearth the beauty of the ordinary and elevate your daily routine.",
    },
    {
      id: uuidv4(),
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/hero2-2.5x-min.webp?v=1686901154&width=1500",
      title: "Celebrate Individuality with Unique Outfits",
      subTitle:
        "Make a statement and find your edge with our sport and casual wear.",
    },
    {
      id: uuidv4(),
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/hero3-2.5x-min.webp?v=1686901156&width=1500",
      title: "Live The Moment In Our Cozy Clothing Range",
      subTitle:
        "Experience the superior fit and exceptional quality of our apparel.",
    },
    {
      id: uuidv4(),
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle221.jpg?v=1690368690&width=1500",
      title: "Embrace Simplicity With Timeless Casual Wear",
      subTitle:
        "Set the pace and turn heads with our cutting-edge ensembles that bring chic and comfort.",
    },
  ];
  // hande slider
  const [slideView, setSlideView] = useState(0);
  let slidePosition = `-translate-x-[${slideView}vw]`;
  const handlePrevSlide = () => {
    const itemView = slideView - 100;
    if (itemView < 0) return setSlideView((slides.length - 1) * 100);
    setSlideView(itemView);
  };
  const handleNextSlide = () => {
    const itemView = slideView + 100;
    if (itemView > (slides.length - 1) * 100) return setSlideView(0);
    setSlideView(itemView);
  };

  return (
    <div className='relative min-h-[15rem] w-full'>
      {/* slider */}
      <div
        className={`flex w-[400vw] ${slidePosition} transition-all overflow-hidden  duration-500`}
      >
        {/* slide item */}
        {slides.map((item) => (
          <div key={item?.id} className='relative'>
            <img
              src={item?.url}
              alt={item?.title}
              loading='priority'
              className='object-cover w-screen h-full max-w-screen max-h-full min-h-[15rem]'
            />
            <div className='top-1/2 left-1/2 lg:gap-6 absolute min-h-[15rem] flex flex-col items-center justify-center gap-2 w-2/3 sm:gap-2 -translate-x-1/2 -translate-y-1/2'>
              <h1 className='text-wrap lg:text-6xl sm:text-3xl md:text-5xl text-2xl font-extrabold leading-tight tracking-wide text-center text-white'>
                {item?.title}
              </h1>
              <p className=' to-black-4 text-[.8rem] sm:text-base font-light leading-tight tracking-wide text-center text-white normal-case'>
                {item?.subTitle}
              </p>
              <Link
                to='/products'
                className='group/shopall w-fit hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center gap-2 px-5 py-4 mt-4 text-white transition-all bg-black border border-black'
              >
                <span className='text-sm font-bold tracking-tight'>
                  shop all
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={3}
                  stroke='currentColor'
                  className='group-hover/shopall:rotate-0 w-4 h-4 transition-all -rotate-45'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* controls */}
      {/* chev left */}
      <div className='top-1/2 inset-x-0 *:px-6 *:block sm:*:px-6 md:*:px-8 lg:*:px-12 xl:*:px-24 absolute flex justify-between *:text-white *:p-4 *:-m-4 -translate-y-1/2'>
        <button
          onClick={handlePrevSlide}
          className='hover:translate-x-2 hover:opacity-100 sm:hover:-translate-x-4 h-full transition-all opacity-50'
        >
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
        {/* chev right */}
        <button
          onClick={handleNextSlide}
          className='hover:-translate-x-2 hover:opacity-100 sm:hover:translate-x-4 h-full transition-all opacity-50'
        >
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
      </div>
    </div>
  );
};

export default Carousel;
