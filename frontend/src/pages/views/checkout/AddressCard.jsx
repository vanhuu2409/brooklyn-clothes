import React from "react";

const AddressCard = (props) => {
  return (
    <div className='relative w-full'>
      {/* <h3 className='peer-checked:underline underline-offset-2 inline-flex items-center text-lg font-bold'>
        Address 1
      </h3> */}
      <ul className='p-2 space-y-1 text-sm normal-case'>
        <li className='flex flex-wrap items-center gap-1'>
          <span className='text-base font-bold'>Name:</span> {props.fullName}
        </li>
        <li className='flex flex-wrap items-center gap-1'>
          <span className='text-base font-bold'>Phone Number:</span>
          {props.mobile}
        </li>
        <li className='flex items-center gap-1'>
          <span className='text-base font-bold'>Address:</span>
          {props.street +
            ", " +
            props.ward +
            ", " +
            props.district +
            ", " +
            props.city}
        </li>
      </ul>
    </div>
  );
};

export default AddressCard;
