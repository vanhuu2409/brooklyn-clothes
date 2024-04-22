import React, { useEffect, useState } from "react";
import { formatPrice } from "../../../services/custom";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const orderFilterOption = [
    { label: "On The Way" },
    { label: "Delivered" },
    { label: "Cancelled" },
    { label: "Returned" },
  ];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Otherwise, fetch products with the provided productId
        const response = await axios.get(`/api/order/user`);
        setOrders(response.data);
        // setOrder(response.data);
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchOrders();
  }, []);

  console.log(orders);

  const handleCancelledOrder = async (orderId) => {
    if (confirm("Are you sure you want to cancel this order?"))
      try {
        // Otherwise, fetch products with the provided productId
        const response = await axios.put(`/api/order/${orderId}/cancelled`);
        console.log(response);
        if (response.status === 200) {
          window.location.reload();
        }
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
  };

  return (
    <div className='sm:px-6 py-10 lg:max-w-[90%] min-h-screen lg:px-8 max-w-2xl px-4 mx-auto'>
      {/* Heading */}
      <h2 className='sm:text-7xl text-6xl font-extrabold'>Orders</h2>
      {/* filters */}
      <div className=''>
        <form className=' bg-white'>
          <div className=''>
            <ul className='flex flex-wrap -mx-2'>
              {orderFilterOption.map((option, optionIdx) => (
                <li key={optionIdx} className='flex items-center px-2'>
                  <input
                    id={`filter-order-${option.label}-${optionIdx}`}
                    name={`${option.label}[]`}
                    type='checkbox'
                    // defaultChecked={option.checked}
                    className='focus:ring-neutral-500 peer text-neutral-600 hidden w-4 h-4 border-gray-300 rounded cursor-pointer'
                  />
                  <label
                    htmlFor={`filter-order-${option.label}-${optionIdx}`}
                    className='hover:text-black-2 peer-checked:text-black-1 text-black-4 text-2xl font-bold leading-snug tracking-normal transition-colors duration-300 cursor-pointer select-none'
                  >
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      {/* section */}
      <div>
        <div className=''>
          {/* orders item */}
          {!orders?.length && (
            <div className='mt-4 text-2xl font-bold'>Order not found...</div>
          )}
          {orders.map((order, i) => {
            const orderItem = order.orderItem;
            return (
              <div key={i} className='border-y mt-4'>
                <div className='flex flex-col gap-4 bg-white'>
                  <div className='sm:flex-row flex flex-col items-start justify-start h-full gap-6 px-4 py-4 shadow-sm'>
                    <div className='shrink-0 sm:w-auto flex items-center justify-between w-full h-full my-auto rounded-sm'>
                      <img
                        src={orderItem && orderItem[0]?.product?.imageUrls[0]}
                        className='object-contain max-w-[8rem] max-h-[8rem] w-full h-full'
                      />
                      <div className='sm:hidden flex flex-col items-end justify-between gap-6'>
                        <div className='flex items-center gap-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='fill-green-600 w-6 h-6'
                          >
                            <path
                              fillRule='evenodd'
                              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                              clipRule='evenodd'
                            />
                          </svg>
                          <h3 className='normal-case'>
                            <span className='font-bold'>Order Status:</span>{" "}
                            {order.orderStatus}
                          </h3>
                          <h3 className='normal-case'>
                            <span className='font-bold'>Payment Status:</span>{" "}
                            {order.paymentDetails.paymentStatus}
                          </h3>
                        </div>
                        <div className='flex gap-4 mt-auto min-w-[10rem]'>
                          <button
                            type='button'
                            disabled={
                              order.orderStatus === "Cancelled" ||
                              order.orderStatus === "Delivered" ||
                              order.orderStatus === "Shipped"
                            }
                            onClick={() => handleCancelledOrder(order._id)}
                            className='hover:bg-opacity-100 ml-auto hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full max-w-[8rem] px-5 py-2 text-white transition-all translate-y-0 bg-red-800 border'
                          >
                            Cancel
                          </button>
                          <Link
                            to={`/profile/orders/${order._id}`}
                            className='hover:bg-opacity-100 hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full px-5 py-2 text-white transition-all translate-y-0 bg-black border'
                          >
                            Details
                          </Link>
                          {/* <button
                            type='button'
                            className='hover:bg-opacity-100 hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full px-5 py-2 text-white transition-all translate-y-0 bg-black border'
                          >
                            Rating
                          </button> */}
                        </div>
                      </div>
                    </div>
                    <div className='w-full'>
                      <h3 className='text-2xl font-bold'>
                        Order {order.createdAt}
                      </h3>

                      <ul className='sm:max-w-[14rem] mt-2 space-y-1 text-normal'>
                        <li className='lg:justify-start flex flex-wrap items-center justify-between gap-1 font-bold'>
                          Quantity:{" "}
                          <span className='font-normal'>{order.quantity}</span>
                        </li>
                        <li className='lg:justify-start flex flex-wrap items-center justify-between gap-1 font-bold'>
                          Total Price:
                          <span className='font-normal'>
                            {formatPrice(order.total)}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className='sm:flex flex-col items-end justify-between hidden gap-6'>
                      <div className='flex items-center gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='fill-green-600 w-6 h-6'
                        >
                          <path
                            fillRule='evenodd'
                            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <h3 className='normal-case'>
                          <span className='font-bold'>Order Status:</span>{" "}
                          {order.orderStatus}
                        </h3>
                        <h3 className='normal-case'>
                          <span className='font-bold'>PaymentStatus:</span>{" "}
                          {order.paymentDetails.paymentStatus}
                        </h3>
                      </div>
                      <div className='flex gap-4 mt-auto min-w-[10rem]'>
                        <button
                          type='button'
                          disabled={
                            order.orderStatus === "Cancelled" ||
                            order.orderStatus === "Delivered" ||
                            order.orderStatus === "Shipped"
                          }
                          onClick={() => handleCancelledOrder(order._id)}
                          className='hover:bg-opacity-100 ml-auto hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full max-w-[8rem] px-5 py-2 text-white transition-all translate-y-0 bg-red-800 border'
                        >
                          Cancel
                        </button>
                        <Link
                          to={`/profile/orders/${order._id}`}
                          className='hover:bg-opacity-100 hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full px-5 py-2 text-white transition-all translate-y-0 bg-black border'
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {orders.map((order, i) => {
            console.log(order);
            return (
              <div key={i} className='border-y mt-4'>
                <h3>Order {i + 1}</h3>
                <div className='flex flex-col gap-4 bg-white'>
                  {order.orderorderItem[0].map((item, i) => (
                    <div
                      key={i}
                      className='sm:flex-row flex flex-col items-start justify-start h-full gap-6 px-4 py-4 shadow-sm'
                    >
                      <div className='shrink-0 sm:w-auto flex items-center justify-between w-full h-full my-auto rounded-sm'>
                        <img
                          src={orderItem[0].product.imageUrls[0]}
                          className='object-contain max-w-[8rem] max-h-[8rem] w-full h-full'
                        />
                        <div className='sm:hidden flex flex-col items-end justify-between gap-6'>
                          <div className='flex items-center gap-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              fill='currentColor'
                              className='fill-green-600 w-6 h-6'
                            >
                              <path
                                fillRule='evenodd'
                                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <h3>Delivered On March 3</h3>
                          </div>
                          <div className='flex gap-4 mt-auto'>
                            <button
                              type='button'
                              className='hover:bg-opacity-100 bg-opacity-60 disabled:opacity-50 text-black-2 inline-flex items-center justify-center w-full px-5 py-2 transition-all translate-y-0 bg-[#ddd] border'
                            >
                              Cancel
                            </button>
                            <button
                              type='button'
                              className='hover:bg-opacity-100 hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full px-5 py-2 text-white transition-all translate-y-0 bg-black border'
                            >
                              Rating
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <h3 className=' text-lg font-bold'>
                          {orderItem[0].product.name}
                        </h3>

                        <ul className='sm:max-w-[14rem] mt-2 space-y-1 text-xs'>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Size:{" "}
                            <span className='font-normal'>{orderItem[0].size}</span>
                          </li>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Color:{" "}
                            <span className='font-normal'>{orderItem[0].color}</span>
                          </li>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Quantity:{" "}
                            <span className='font-normal'>{orderItem[0].quantity}</span>
                          </li>
                          <li className='flex flex-wrap items-center justify-between gap-1 font-bold'>
                            Total Price:
                            <span className='font-normal'>
                              {formatPrice(orderItem[0].price)}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className='sm:flex flex-col items-end justify-between hidden gap-6'>
                        <div className='flex items-center gap-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='fill-green-600 w-6 h-6'
                          >
                            <path
                              fillRule='evenodd'
                              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                              clipRule='evenodd'
                            />
                          </svg>
                          <h3>Delivered On March 3</h3>
                        </div>
                        <div className='flex gap-4 mt-auto'>
                          <button
                            type='button'
                            className='hover:bg-opacity-100 bg-opacity-60 disabled:opacity-50 text-black-2 inline-flex items-center justify-center w-full px-5 py-2 transition-all translate-y-0 bg-[#ddd] border'
                          >
                            Cancel
                          </button>
                          <button
                            type='button'
                            className='hover:bg-opacity-100 hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full px-5 py-2 text-white transition-all translate-y-0 bg-black border'
                          >
                            Rating
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })} */}
          {/* orders item */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
