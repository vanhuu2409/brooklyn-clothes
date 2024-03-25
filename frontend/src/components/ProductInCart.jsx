import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  decreaseQuantity,
  increaseQuantity,
  quantityByAmount,
  removeFromCart,
} from "../features/cartSlice";
const ProductInCart = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const handleOnChangeQuantity = (e, props) => {
    let value = parseInt(e.target.value);
    dispatch(quantityByAmount({ quantity: value, props }));
  };

  const handleIncreaseQuantity = (props) => {
    dispatch(increaseQuantity(props));
  };
  const handleDecreaseQuantity = (props) => {
    dispatch(decreaseQuantity(props));
  };

  const handleRemoveFromCart = (props) => {
    dispatch(removeFromCart(props)) &
      toast.success(`${props?.name} is remove success!`);
  };
  return (
    <div
      key={props?.id}
      className='grid grid-cols-6 grid-rows-1 gap-4 px-6 py-4 text-black border-b'
    >
      {/* img */}
      <img
        src={props?.imageSrc}
        className='aspect-square hover:scale-110 object-contain w-full h-full max-w-full max-h-full col-span-2 transition-transform duration-300'
      />
      {/* body */}
      <div className='sm:py-4 flex flex-col w-full h-full col-span-4'>
        {/* top body */}
        <div className='flex flex-col self-center flex-1 w-full'>
          <h4 className='text-[.625rem] sm:text-[.75rem] text-black-4 font-bold'>
            berlin lifestyle
          </h4>
          <h2 className='text-black-2 sm:text-xl text-lg font-extrabold'>
            {props?.name}
          </h2>
        </div>
        {/* center */}
        {/* size select */}
        <span className='text-black-3 flex-1 text-base font-extrabold'>
          {props.sizeSelected ? props.sizeSelected : "M"}
        </span>
        {/* bottom body */}
        <div className='propss-cenpropster flex justify-between'>
          {/* left bottom */}
          <p className='text-black-3 sm:text-base flex gap-1 text-sm font-bold'>
            {props?.price}
            <span className='text-black-4 font-light'>/</span>
          </p>
          {/* middle */}
          <div className='propss-cenpropster flex border'>
            {/* increase quantity */}
            <button
              className='px-2 py-1'
              onClick={() => handleDecreaseQuantity(props)}
            >
              -
            </button>
            <input
              type='number'
              value={props?.quantity ? props.quantity : 1}
              onChange={(e) => handleOnChangeQuantity(e, props)} // onBlur={(e) => handleOnBlurQuantity(e, props)}
              className='spin focus:border-x w-10 px-2 py-1 text-[.8rem] text-center rounded-none outline-none'
            />
            {/* increase quantity */}
            <button
              className='px-2 py-1'
              onClick={() => handleIncreaseQuantity(props)}
            >
              +
            </button>
          </div>
          {/* right */}
          <button className='p-2' onClick={() => handleRemoveFromCart(props)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='sm:h-5 sm:w-5 w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductInCart);
