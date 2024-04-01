import React from "react";
import Logo from "../../../assets/images/brand.png";
import LayoutView from "../../../widgets/layout/LayoutView";

const ShipPolicy = () => {
  return (
    <div className='bg-third flex flex-col items-center justify-center w-full h-full mx-auto'>
      <div className='border-primary border-y-2 sm:py-0 sm:my-0 flex flex-col items-center justify-center w-full gap-5 py-10 my-10 bg-transparent'>
        <LayoutView>
          <div className='lg:flex-row lg:divide-x-2 flex flex-col justify-around w-full gap-8'>
            <div className='flex flex-col items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-16 h-16'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
                />
              </svg>

              <h4 className='text-black-3 text-2xl font-bold text-center uppercase'>
                worldwide shipping
              </h4>
              <p className=' text-center md:max-w-[70%] max-w-[50%] lg:max-w-[80%]	 text-black-4 font-light text-[1.125rem] leading-5 tracking-tight normal-case'>
                Shop with us from anywhere in the world and take advantage of
                our fast and reliable shipping options.
              </p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-16 h-16'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
                />
              </svg>

              <h4 className='text-black-3 min-w-[17.5rem] text-2xl font-bold text-center uppercase'>
                high-quality materials
              </h4>
              <p className=' text-center md:max-w-[70%] max-w-[50%] lg:max-w-[80%]	 text-black-4 font-light text-[1.125rem] leading-5 tracking-tight normal-case'>
                We use the best materials in our sport and streetwear for
                comfortable and durable products.
              </p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='w-16 h-16'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3'
                />
              </svg>

              <h4 className='text-black-3 text-2xl font-bold text-center uppercase'>
                Laconic Design
              </h4>
              <p className=' text-center md:max-w-[70%] max-w-[50%] lg:max-w-[80%]	 text-black-4 font-light text-[1.125rem] leading-5 tracking-tight normal-case'>
                Uncomplicated yet captivating, our simple yet stylish designs
                embody a sense of refined elegance.
              </p>
            </div>
          </div>
        </LayoutView>
      </div>
    </div>
  );
};

export default ShipPolicy;
