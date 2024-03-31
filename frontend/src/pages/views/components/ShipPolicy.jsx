import React from "react";
import Logo from "../../../assets/images/brand.png";

const ShipPolicy = () => {
  return (
    <div className='bg-third flex flex-col items-center justify-center w-full h-full mx-auto'>
      <div className='border-primary border-y-2 flex flex-col items-center justify-center w-full gap-5 py-16 bg-transparent'>
        <img src={Logo} alt='Logo' className='w-[8rem] -mt-16 h-[8rem]' />
        <div className='md:flex-row flex flex-col justify-around w-full gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='text-black-3 text-2xl font-bold text-center uppercase'>
              worldwide shipping
            </h4>
            <p className=' text-center md:max-w-[70%] max-w-[50%] lg:max-w-[80%]	 text-black-4 font-light text-[1.125rem] leading-5 tracking-tight normal-case'>
              Shop with us from anywhere in the world and take advantage of our
              fast and reliable shipping options.
            </p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='text-black-3 min-w-[17.5rem] text-2xl font-bold text-center uppercase'>
              high-quality materials
            </h4>
            <p className=' text-center md:max-w-[70%] max-w-[50%] lg:max-w-[80%]	 text-black-4 font-light text-[1.125rem] leading-5 tracking-tight normal-case'>
              We use the best materials in our sport and streetwear for
              comfortable and durable products.
            </p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='text-black-3 text-2xl font-bold text-center uppercase'>
              Laconic Design
            </h4>
            <p className=' text-center md:max-w-[70%] max-w-[50%] lg:max-w-[80%]	 text-black-4 font-light text-[1.125rem] leading-5 tracking-tight normal-case'>
              Uncomplicated yet captivating, our simple yet stylish designs
              embody a sense of refined elegance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipPolicy;
