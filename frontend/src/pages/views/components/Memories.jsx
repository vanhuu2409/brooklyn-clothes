import React from "react";
import LayoutView from "../../../_widgets/layout/LayoutView";
import { Link } from "react-router-dom";
import Instagram from "../../../assets/images/instagram.svg";

const Memories = () => {
  return (
    <div className='-mb-16 bg-white'>
      <LayoutView>
        <div className='pb-8'>
          <p className='text-black-4 mt-4 font-normal tracking-widest text-[.8rem] sm:text-[1rem]'>
            STAY IN TOUCH
          </p>
          <div className='lg:justify-between lg:flex-row lg:items-center flex flex-col gap-2'>
            <h2 className='md:text-5xl text-4xl font-bold leading-snug tracking-tighter'>
              MOMENTS MADE MEMORIES{" "}
              <span className='text-black-4'>@BERLIN</span>
            </h2>
            <Link
              to='/products'
              className='text-normal lg:after:h-[1px] lg:after:bg-black-3 hover:lg:after:w-0 lg:after:transition-all lg:after:duration-300 lg:after:w-[80%] lg:after:ml-auto lg:after:block p-4 -m-4 font-semibold tracking-tighter leading-tight underline underline-offset-4 lg:no-underline'
            >
              <div className='flex flex-wrap gap-1'>
                <img src={Instagram} alt='' className='w-5 h-5' />
                GET INSPIRED WITH <span className='text-black-4'>@BERLIN</span>
              </div>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 *:px-6 -mx-6 overflow-hidden divide-neutral-200 md:divide-x-2'>
          <img
            src='https://berlin-lifestyle.myshopify.com/cdn/shop/files/instagram2.jpg?v=1690369615&width=3000'
            alt=''
            draggable={false}
            className=' object-cover max-w-full max-h-full'
          />
          <img
            src='https://berlin-lifestyle.myshopify.com/cdn/shop/files/instagram3.jpg?v=1690369615&width=3000'
            alt=''
            draggable={false}
            className=' md:my-0 object-cover max-w-full max-h-full my-4'
          />
          <img
            src='https://berlin-lifestyle.myshopify.com/cdn/shop/files/instagram4.jpg?v=1690369615&width=3000'
            alt=''
            draggable={false}
            className=' object-cover max-w-full max-h-full'
          />
        </div>
      </LayoutView>
    </div>
  );
};

export default Memories;
