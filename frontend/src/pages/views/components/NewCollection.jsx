import ProductCard from "../product/ProductCard";
import { fetchData } from "../../../services/api";
import LayoutView from "../../../_widgets/layout/LayoutView";
import { Link } from "react-router-dom";
import { RandomProducts } from "../../../services/custom";
import { Slide } from "react-slideshow-image";
const NewCollection = () => {
  const products = RandomProducts(fetchData, 3);
  const properties = {
    transitionDuration: 700,
    duration: 5000,
    pauseOnHover: false,
    indicators: false,
    prevArrow: (
      <button className='hover:translate-x-2 hover:opacity-100 sm:hover:-translate-x-4 h-full px-6 text-black transition-all opacity-50'>
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
      <button className='hover:-translate-x-2 hover:opacity-100 sm:hover:translate-x-4 h-full px-6 text-black transition-all opacity-50'>
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
    <div className=' bg-white'>
      <LayoutView>
        <div className='lg:grid-cols-4 lg:gap-10 grid grid-cols-1'>
          <div className='lg:col-span-1 lg:gap-4 flex flex-col col-span-2 pb-8'>
            <p className='text-black-4 mt-4 font-normal tracking-widest text-[.8rem] sm:text-[1rem]'>
              NEW COLLECTION 2023
            </p>
            <h2 className='sm:text-5xl text-3xl font-extrabold leading-snug'>
              NEW GO-TO COLLECTION
            </h2>

            <p className='text-black-4 mt-2 font-normal tracking-widest normal-case text-[.8rem] sm:text-[1rem]'>
              Get ready to hit the streets with our new collection of sport and
              casual wear.
            </p>
            <Link
              to='/'
              className='group hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 w-fit inline-flex items-center justify-center gap-2 px-5 py-4 mt-4 text-white transition-all bg-black border border-black'
            >
              <span className='text-sm font-bold tracking-tight'>
                SHOP COLLECTION
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='group-hover:rotate-0 w-4 h-4 transition-all -rotate-45'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </div>

          <div className='md:hidden block'>
            <Slide {...properties}>
              {products.map((product, i) => (
                <ProductCard {...product} key={i} />
              ))}
            </Slide>
          </div>
          <div className='gap-x-6 md:grid lg:col-span-3 sm:grid-cols-2 xl:grid-cols-3 hidden grid-cols-1 col-span-2'>
            {products.map((product, i) => (
              <ProductCard {...product} key={i} />
            ))}
          </div>
        </div>
      </LayoutView>
    </div>
  );
};

export default NewCollection;
