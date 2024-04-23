import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../../services/custom";
import AddressInput from "./AddressInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { debounce } from "@mui/material";
import { fetchCartItem } from "../../../redux/cart/cartSlice.jsx";
import http from "../../../services/api.jsx";

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        // Otherwise, fetch products with the provided productId
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/order/userAddress`
        );
        setAddressData(response.data);
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchAddress();
  }, []);

  // bag/cart flow
  const bagsTotal = cart.cartItem.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const bagsTotalFormat = formatPrice(bagsTotal);

  const userAddress = {};
  const handleOnChange = (e) => {
    userAddress[e.target.name] = e.target.value;
  };
  const handleOnBlur = (e) => {
    if (!e.target.value) alert("Please complete " + e.target.name + " field!");
  };

  const handleSubmit = debounce(async (e) => {
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    // console.log(data);
    // const userAddress = {};
    // for (const pair of data.entries()) {
    //   userAddress[pair[0]] = pair[1];
    // }

    if (userAddress) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/order/create`,
          userAddress
        );
        if (res.status === 200) {
          navigate(`/checkout?step=3&orderId=${res.data._id}`);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }, 300);

  return (
    <div className='h-screen'>
      <div className='bg-gray-50 h-screen'>
        {/* lg:grid-cols-2 xl:grid-cols-3 grid */}
        <div className=' h-full gap-4'>
          {/* <div className='bg-[#3f3f3f] lg:h-[80vh] h-[60vh] overflow-y-scroll lg:sticky lg:top-0'>
            <div className='relative h-full'>
              <div className='pt-0 lg:overflow-auto lg:h-[calc(80vh-60px)]'>
                <div className='sticky z-50 pt-8 px-8 top-0 overflow-hidden text-2xl bg-[#3f3f3f] pb-2 border-b-2 font-bold text-white'>
                  Delivery Address
                  <div className='lg:hidden bg-[#444] w-full p-4'>
                    <h4 className='flex flex-wrap gap-4 text-base text-white'>
                      Shipping{" "}
                      <span className='mb-1 ml-auto text-sm'>Free</span>
                    </h4>
                    <h4 className='flex flex-wrap gap-4 text-base text-white'>
                      Total <span className='ml-auto'>{bagsTotalFormat}</span>
                    </h4>
                  </div>
                </div>
                <div className='mt-8 space-y-6'>
                  {addressData.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className='hover:opacity-80 border-spacing-2 pb-2 text-white border-b-2'
                      >
                        <AddressInput i={i} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='absolute hidden lg:block left-0 bottom-0 border-b-2 border-[#fff] bg-[#444] w-full p-4'>
                <h4 className='flex flex-wrap gap-4 text-base text-white'>
                  Shipping <span className='mb-1 ml-auto text-sm'>Free</span>
                </h4>
                <h4 className='flex flex-wrap gap-4 text-base text-white'>
                  Total <span className='ml-auto'>{bagsTotalFormat}</span>
                </h4>
              </div>
            </div>
          </div> */}
          <div className='xl:col-span-2 h-max sticky top-0 p-8 rounded-md'>
            <h2 className='text-2xl font-bold text-[#333]'>
              Complete your order
            </h2>
            <div
              name='address'
              id='address'
              // onSubmit={handleSubmit}
              className='mt-10'
            >
              <div>
                <h3 className='text-lg font-bold text-[#333] mb-6'>
                  Personal Details
                </h3>
                <div className='sm:grid-cols-2 grid gap-6'>
                  <div className='relative flex items-center'>
                    <input
                      type='text'
                      name='fullName'
                      onChange={(e) => handleOnChange(e)}
                      placeholder='First & Last Name'
                      onBlur={handleOnBlur}
                      className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                    />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#bbb'
                      stroke='#bbb'
                      className='w-[18px] h-[18px] absolute right-4'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        cx='10'
                        cy='7'
                        r='6'
                        data-original='#000000'
                      ></circle>
                      <path
                        d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
                        data-original='#000000'
                      ></path>
                    </svg>
                  </div>
                  <div className='relative flex items-center'>
                    <input
                      type='number'
                      name='mobile'
                      onChange={(e) => handleOnChange(e)}
                      placeholder='Phone Number'
                      onBlur={handleOnBlur}
                      className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                    />
                    <svg
                      fill='#bbb'
                      className='w-[18px] h-[18px] absolute right-4'
                      viewBox='0 0 64 64'
                    >
                      <path
                        d='m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z'
                        data-original='#000000'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-bold text-[#333] mb-6'>
                  Shipping Address
                </h3>
                <div className='sm:grid-cols-2 grid gap-6'>
                  <input
                    type='text'
                    onChange={(e) => handleOnChange(e)}
                    name='street'
                    onBlur={handleOnBlur}
                    placeholder='Specific Address'
                    className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                  />
                  <input
                    type='text'
                    onChange={(e) => handleOnChange(e)}
                    name='ward'
                    onBlur={handleOnBlur}
                    placeholder='Ward/Commune'
                    className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                  />
                  <input
                    type='text'
                    onChange={(e) => handleOnChange(e)}
                    name='district'
                    onBlur={handleOnBlur}
                    placeholder='District'
                    className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                  />
                  <input
                    type='text'
                    onChange={(e) => handleOnChange(e)}
                    name='city'
                    onBlur={handleOnBlur}
                    placeholder='Province/City'
                    className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                  />
                </div>
                <div className='max-sm:flex-col flex gap-6 mt-10'>
                  <button
                    type='button'
                    className='hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 disabled:opacity-50 text-black-2 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 transition-all translate-y-0 bg-[#ddd] border'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    type='button'
                    className='hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 disabled:opacity-50 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black border'
                  >
                    Complete Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
