import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../services/custom";
import OrderCard from "./OrderCard";
import AddressCard from "./AddressCard";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import http from "../../../services/api.jsx";

const OrderSummary = () => {
  const [orderData, setOrderData] = useState([]);
  const [addressData, setAddressData] = useState({});
  console.log(addressData);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");
  console.log(orderId);

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       // Otherwise, fetch products with the provided productId
  //       const response = await axios.get(`/api/cart`);
  //       setCartData(response.data.cartItem);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error(error.message);
  //     }
  //   };
  //   fetchCart();
  // }, []);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // Otherwise, fetch products with the provided productId
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/order/${orderId}`
        );
        setAddressData(response.data.shippingAddress);
        setOrderData(response.data.orderItem);
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchOrder();
  }, []);

  const handleCancelledOrder = async () => {
    try {
      // Otherwise, fetch products with the provided productId
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/order/${orderId}/deleteOrders`
      );
      if (response.status === 200) {
        navigate("/cart");
      }
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // bag/cart flow
  const bagsTotal = orderData.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const bagsTotalFormat = formatPrice(bagsTotal);

  return (
    <div className='h-screen'>
      <div className='bg-gray-50 h-screen'>
        <div className='lg:grid-cols-2 grid h-full gap-4'>
          <div className='bg-[#3f3f3f] lg:h-[80vh] h-[60vh] overflow-y-scroll lg:sticky lg:top-0'>
            <div className='relative h-full'>
              <div className='p-8 pt-0 lg:overflow-auto lg:h-[calc(80vh-60px)]'>
                <div className='sticky top-0 overflow-hidden text-2xl bg-[#3f3f3f] pb-2 border-b-2 pt-8 font-bold text-white'>
                  Order Summary
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
                  {orderData.map((item, i) => {
                    return <OrderCard {...item} key={i} />;
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
          </div>
          <div className='lg:col-span-1 h-max sticky top-0 p-8 rounded-md'>
            <h2 className='text-2xl font-extrabold text-[#333]'>
              Complete your order
            </h2>
            <div className='mt-4'>
              <div className='border-spacing-2 pb-2 border-b-2'>
                <AddressCard {...addressData} />
              </div>
              <div className='flex gap-4 mt-4'>
                <Link
                  to={`/checkout?step=4&orderId=${orderId}`}
                  className='hover:bg-opacity-100 hover:border-black-4 hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black border'
                >
                  Complete Purchase
                </Link>
                <button
                  type='button'
                  onClick={() => handleCancelledOrder()}
                  className='hover:bg-opacity-100 max-w-[40%] bg-opacity-60 disabled:opacity-50 text-black-2 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 transition-all translate-y-0 bg-[#ddd] border'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
