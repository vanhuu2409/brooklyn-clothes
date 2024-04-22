import React, { memo } from "react";
import { toast } from "react-toastify";
const AdminProduct = (props) => {
  const handleRemoveProduct = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/product/delete/${props._id}`,
        {
          method: "DELETE",
        }
      );
      (await res.json()) & toast.success("Remove product successfully");
      location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    // normal
    <>
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
            src={props && props?.imageUrls[0]}
            alt={props?.name}
            className='spect-square hover:scale-110 size-20 max-w-20 max-h-20 object-contain col-span-2 transition-transform duration-300'
          />
          {props?.name}
        </th>
        <td className='px-6 py-4'>{props?.collections}</td>
        <td className='px-6 py-4'>{props?.category}</td>
        <td className='px-6 py-4'>{props?.sizes.map((size) => size + ", ")}</td>
        <td className='px-6 py-4'>
          {props?.colors.map(
            (color) => color.name + ":" + color.colorCode + ", "
          )}
        </td>
        <td className='px-6 py-4 min-w-[7.5rem]'>
          {props?.price}
          {"đ, "}
          <span className=' line-through'>{props?.discountPrice}đ</span>
        </td>
        <td className='px-2 py-4'>
          {/* delete btn */}
          <button className='p-2' onClick={handleRemoveProduct}>
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
    </>
  );
};

export default memo(AdminProduct);
