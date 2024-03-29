import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  decreaseQuantity,
  increaseQuantity,
  quantityByAmount,
  removeFromCart,
} from "../../../redux/cart/cartSlice";
import { formatPrice } from "../../../data/custom";
const ProductInCart = (props) => {
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
    // normal
    <>
      {!props.isCartPage ? (
        <div className='grid grid-cols-6 grid-rows-1 gap-4 px-6 py-4 text-black border-b'>
          {/* img */}
          <img
            src={props?.imageUrls[0]}
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
            <span className='text-black-3 flex-1 text-base font-extrabold normal-case'>
              {props?.size} {" / "}
              {props?.color}
            </span>
            {/* bottom body */}
            <div className='propss-cenpropster flex justify-between'>
              {/* left bottom */}
              <p className='text-black-3 sm:text-base flex gap-1 text-sm font-bold'>
                {formatPrice(props?.price)}
                <span className='text-black-4 font-light'>
                  /{" "}
                  <span className='line-through'>
                    {formatPrice(props?.discountPrice)}
                  </span>
                </span>
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
              <button
                className='p-2'
                onClick={() => handleRemoveFromCart(props)}
              >
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
      ) : (
        // table row
        <tr className=' hover:bg-gray-50 bg-white border-b'>
          {/* <th
            scope='row'
            className='whitespace-nowrap dark:text-white py-4 pl-4 font-medium text-gray-900'
          ></th> */}
          <th
            scope='row'
            className='whitespace-nowrap text-black-2 flex items-center gap-2 px-6 py-4 font-bold'
          >
            <img
              src={props?.imageUrls[0]}
              alt={props?.name}
              className='spect-square hover:scale-110 size-20 max-w-20 max-h-20 object-contain col-span-2 transition-transform duration-300'
            />
            {props?.name}
          </th>
          <td className='px-6 py-4'>
            <select className='border'>
              {props?.sizes.map((size, i) => (
                <option
                  key={i}
                  // disabled={!size.inStock}
                  value={size}
                >
                  {size}
                </option>
              ))}
            </select>
          </td>
          <td className='px-6 py-4'>
            <select
              className='border'
              defaultValue={"M"}
              // onChange={(e) => setColor(e.target.value)}
            >
              {props?.colors.map((color, i) => (
                <option
                  key={i + color.name}
                  // disabled={!color?.inStock}
                  value={color?.name}
                >
                  {color?.name}
                </option>
              ))}
            </select>
          </td>
          <td className='px-6 py-4'>
            <div className='propss-cenpropster w-fit flex items-center justify-center border'>
              {/* increase quantity */}
              <button
                className='inline-flex items-center justify-center px-4'
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
                className='w-fit inline-flex items-center justify-center px-4'
                onClick={() => handleIncreaseQuantity(props)}
              >
                +
              </button>
            </div>
          </td>
          <td className='px-6 py-4 min-w-[7.5rem]'>
            {formatPrice(props?.price)}
          </td>
          <td className='px-2 py-4'>
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
          </td>
        </tr>
      )}
    </>
  );
};

export default memo(ProductInCart);
