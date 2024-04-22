import React from "react";

const AddressInput = (props) => {
  return (
    <div className='relative w-full'>
      <input
        type='radio'
        className='focus:ring-neutral-500 peer text-neutral-600 inline-flex items-center w-4 h-4 ml-8 mr-2 border-gray-300 rounded-full cursor-pointer'
        name='address'
        defaultChecked={props.i === 0}
        id={"address" + props._id}
      />
      <h3 className='peer-checked:underline underline-offset-2 inline-flex items-center text-base font-bold'>
        Address {props.i + 1}
      </h3>
      <ul className='p-2 space-y-1 text-xs normal-case'>
        <li className='flex flex-wrap items-center gap-1'>
          <span className='font-bold'>Name:</span> {props.fullName}
        </li>
        <li className='flex flex-wrap items-center gap-1'>
          <span className='font-bold'>Phone Number:</span>
          {props.mobile}
        </li>
        <li className='flex gap-1'>
          <span className='font-bold'>Address:</span>
          {props.street +
            ", " +
            props.ward +
            ", " +
            props.district +
            ", " +
            props.city}
        </li>
      </ul>
      <label
        htmlFor={"address" + props._id}
        className='peer-checked:bg-white peer-checked:bg-opacity-60 -inset-y-2 absolute inset-0 cursor-pointer'
      ></label>
    </div>
  );
};

export default AddressInput;
