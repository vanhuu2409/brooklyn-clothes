import React from "react";

const AddressInput = ({ i }) => {
  return (
    <div className='relative w-full'>
      <input
        type='radio'
        className='focus:ring-neutral-500 peer text-neutral-600 inline-flex items-center w-4 h-4 ml-8 mr-2 border-gray-300 rounded-full cursor-pointer'
        name='address'
        defaultChecked={i === 0}
        id={"address" + i}
      />
      <h3 className='peer-checked:underline underline-offset-2 inline-flex items-center text-base font-bold'>
        Address 1
      </h3>
      <ul className='p-2 space-y-1 text-xs normal-case'>
        <li className='flex flex-wrap items-center gap-1'>
          <span className='font-bold'>Name:</span> {`Huu`}
        </li>
        <li className='flex flex-wrap items-center gap-1'>
          <span className='font-bold'>Phone Number:</span>
          {`+123456789`}
        </li>
        <li className='flex gap-1'>
          <span className='font-bold'>Address:</span>
          {`Street 1, Ward 2, District 3, Province 4`}
          {`Street 1, Ward 2, District 3, Province 4`}
        </li>
      </ul>
      <label
        htmlFor={"address" + i}
        className='peer-checked:bg-white peer-checked:bg-opacity-60 -inset-y-2 absolute inset-0 cursor-pointer'
      ></label>
    </div>
  );
};

export default AddressInput;
