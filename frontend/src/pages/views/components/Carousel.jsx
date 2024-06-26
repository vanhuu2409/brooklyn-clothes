import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Carousel = () => {
  const properties = {
    transitionDuration: 700,
    duration: 5000,
    pauseOnHover: false,
    indicators: false,
    prevArrow: (
      <button className='hover:translate-x-2 lg:block hover:opacity-100 sm:hover:-translate-x-4 hidden h-full px-6 text-white transition-all opacity-50'>
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
      <button className='hover:-translate-x-2 lg:block hover:opacity-100 sm:hover:translate-x-4 hidden h-full px-6 text-white transition-all opacity-50'>
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
  const slides = [
    {
      id: 1,
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/hero1-2.5x-min.webp?v=1686901151&width=1500",
      title: "Apparel Crafted to Match Your Rhythm of Life",
      subTitle:
        "Unearth the beauty of the ordinary and elevate your daily routine.",
    },
    {
      id: 2,
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/hero2-2.5x-min.webp?v=1686901154&width=1500",
      title: "Celebrate Individuality with Unique Outfits",
      subTitle:
        "Make a statement and find your edge with our sport and casual wear.",
    },
    {
      id: 3,
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/hero3-2.5x-min.webp?v=1686901156&width=1500",
      title: "Live The Moment In Our Cozy Clothing Range",
      subTitle:
        "Experience the superior fit and exceptional quality of our apparel.",
    },
    {
      id: 4,
      url: "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle221.jpg?v=1690368690&width=1500",
      title: "Embrace Simplicity With Timeless Casual Wear",
      subTitle:
        "Set the pace and turn heads with our cutting-edge ensembles that bring chic and comfort.",
    },
  ];

  return (
    <div className='relative min-h-[15rem] w-full'>
      {/* slider */}
      <Slide {...properties}>
        {/* slide item */}
        {slides.map((item) => (
          <div key={item?.id} className='relative'>
            <img
              src={item?.url}
              alt={item?.title}
              draggable={false}
              loading='priority'
              className='object-cover brightness-75 w-screen select-none h-full max-w-screen max-h-full min-h-[15rem]'
            />
            <div className='top-1/2 left-1/2 lg:gap-6 absolute min-h-[15rem] flex flex-col items-center justify-center gap-2 w-2/3 sm:gap-2 -translate-x-1/2 -translate-y-1/2'>
              <h1 className='text-wrap lg:text-6xl sm:text-3xl md:text-5xl text-2xl font-extrabold leading-tight tracking-wide text-center text-white select-none'>
                {item?.title}
              </h1>
              <p className=' to-black-4 select-none text-[.8rem] sm:text-base font-light leading-tight tracking-wide text-center text-white normal-case'>
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
      </Slide>
    </div>
  );
};

export default Carousel;
