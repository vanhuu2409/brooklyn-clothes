import React from "react";
import { formatPrice } from "../../../services/custom";

const OrderCard = (props) => {
  return (
    <div className='border-spacing-2 flex items-start justify-start gap-6 pb-6 border-b-2'>
      <div className='shrink-0 bg-gray-50 rounded-sm'>
        <img
          src={props && props?.product?.imageUrls[0]}
          className='object-contain max-w-[8rem] max-h-[8rem] w-full h-full'
        />
      </div>
      <div className='w-full'>
        <h3 className=' text-base text-white'>{props.product.name}</h3>
        <ul className='mt-4 space-y-1 text-xs text-white'>
          <li className='flex flex-wrap items-center justify-between gap-4'>
            Size <span className='ml-auto'>{props.size}</span>
          </li>
          <li className='flex flex-wrap items-center justify-between gap-4'>
            Color <span className='ml-auto'>{props.color}</span>
          </li>
          <li className='flex flex-wrap items-center justify-between gap-4'>
            Quantity <span className='ml-auto'>{props.quantity}</span>
          </li>
          <li className='flex flex-wrap items-center justify-between gap-4'>
            Total Price{" "}
            <span className='ml-auto'>{formatPrice(props.price)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;
