import ProductCard from "../product/ProductCard";
import { fetchData } from "../../../services/api";
import LayoutView from "../../../widgets/layout/LayoutView";
import { Link } from "react-router-dom";
import { RandomProducts } from "../../../services/custom";
const NewCollection = () => {
  const products = RandomProducts(fetchData, 3);
  return (
    <div className=' bg-white'>
      <LayoutView>
        <div className='lg:grid-cols-4 lg:gap-10 grid grid-cols-1'>
          <div className='lg:col-span-1 lg:gap-4 flex flex-col col-span-2 pb-8'>
            <p className='text-neutral-400 mt-4 font-normal tracking-widest text-[.8rem] sm:text-[1rem]'>
              NEW COLLECTION 2023
            </p>
            <h2 className='sm:text-5xl text-3xl font-extrabold leading-snug'>
              NEW GO-TO COLLECTION
            </h2>

            <p className='text-neutral-400 mt-2 font-normal tracking-widest normal-case text-[.8rem] sm:text-[1rem]'>
              Get ready to hit the streets with our new collection of sport and
              casual wear.
            </p>
            {/* <Link
              to='/'
              className='text-normal hidden lg:after:h-[1px] lg:after:bg-black-3 hover:lg:after:w-0 lg:after:transition-all lg:after:duration-300 lg:after:w-full lg:after:block p-4 -m-4 font-semibold tracking-tighter leading-tight underline underline-offset-4 lg:no-underline'
            >
              SHOP COLLECTION
            </Link> */}
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

          <div className='gap-x-6 gap-y-10 lg:col-span-3 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 grid grid-cols-1 col-span-2'>
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
