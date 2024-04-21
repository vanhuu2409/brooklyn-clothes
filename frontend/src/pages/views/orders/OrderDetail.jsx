import React from "react";
import AddressCard from "../checkout/AddressCard";
import { formatPrice } from "../../../services/custom";
import OrderTrack from "./OrderTrack";

const OrderDetail = () => {
  return (
    <div className='sm:px-6 py-10 lg:max-w-[90%] min-h-screen lg:px-8 max-w-2xl px-4 mx-auto'>
      <div className='lg:col-span-1 h-max sticky top-0 p-8 rounded-md'>
        <h2 className='text-2xl font-extrabold text-[#333]'>
          Delivery Address
        </h2>
        <div className=''>
          <div className='border-spacing-2 pb-2'>
            <AddressCard />
          </div>
          <div className='flex flex-wrap items-center w-full gap-4 py-8 border-b-2'>
            <OrderTrack activeStep={1} />
            <div className='flex w-full mt-4'>
              <button
                type='button'
                className='hover:bg-opacity-100 ml-auto hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full max-w-[8rem] px-5 py-2 text-white transition-all translate-y-0 bg-red-800 border'
              >
                Cancel
              </button>
            </div>
          </div>
          <div className='mt-4'>
            <div className=''>
              <div className='mt-4'>
                <div className='flex flex-col gap-4 bg-white'>
                  {[1, 1, 1, 1].map((item, i) => (
                    <div
                      key={i}
                      className='sm:flex-row flex flex-col items-start justify-start h-full gap-6 px-4 py-4 shadow-sm'
                    >
                      <div className='shrink-0 sm:w-auto flex items-center justify-between w-full h-full my-auto rounded-sm'>
                        <img
                          src={
                            "https://firebasestorage.googleapis.com/v0/b/brooklyn-clothes.appspot.com/o/1712119149945TK0009_AIRCAM_A_1.webp?alt=media&token=e35f2e2a-9e59-424e-953f-89733e7815ae"
                          }
                          className='object-contain max-w-[8rem] max-h-[8rem] w-full h-full'
                        />
                        <div className='sm:hidden flex flex-col items-end justify-between gap-6'>
                          <div className='flex items-center gap-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='fill-yellow-500 stroke-none w-6 h-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                              />
                            </svg>

                            <h3>Rate & Review</h3>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <h3 className=' text-lg font-bold'>
                          Light Gray T-Shirt
                        </h3>

                        <ul className='sm:max-w-[14rem] mt-2 space-y-1 text-xs'>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Size: <span className='font-normal'>XL</span>
                          </li>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Color: <span className='font-normal'>Black</span>
                          </li>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Quantity: <span className='font-normal'>3</span>
                          </li>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Total Price:
                            <span className='font-normal'>
                              {formatPrice(900000 * 3)}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className='sm:flex flex-col items-end justify-between hidden gap-6 my-auto'>
                        <div className='min-w-[10rem] flex items-center gap-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='fill-yellow-500 stroke-none w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                            />
                          </svg>

                          <h3>Rate & Review</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;