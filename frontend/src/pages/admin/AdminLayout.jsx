import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='grid grid-cols-6'>
          <div className='col-span-1'>
            <div className='h-full'>
              <div className='flex flex-col w-full h-full bg-gray-200'>
                <ul className='flex flex-col mt-12'>
                  <li className='relative transition'>
                    <input
                      className='peer hidden'
                      type='checkbox'
                      id='menu-1'
                    />
                    <div className='rounded-xl bg-gray-50 relative flex items-center py-3 pl-5 mx-2 text-sm text-gray-500 border-b-4 border-gray-300'>
                      <span className='flex w-5 mr-5 text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          width='24'
                          height='24'
                        >
                          <path
                            fill='currentColor'
                            d='M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z'
                          />
                        </svg>
                      </span>
                      Dashboard
                      <label
                        htmlFor='menu-1'
                        className='absolute inset-0 w-full h-full cursor-pointer'
                      ></label>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='peer-checked:rotate-180 top-4 absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                    <ul className='duration-400 peer-checked:max-h-96 max-h-0 rounded-2xl peer-checked:mb-2 flex flex-col mx-2 overflow-hidden transition-all duration-300 bg-gray-100'>
                      <li className='cursor-pointer'>
                        <Link
                          to='/admin/dashboard'
                          className='rounded-xl hover:bg-white flex py-3 pl-5 mx-2 text-sm text-gray-500'
                        >
                          <span className='mr-5'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-5 h-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                              />
                            </svg>
                          </span>
                          Add Products
                        </Link>
                      </li>
                      <li className='cursor-pointer'>
                        <Link
                          to='/admin/allproducts'
                          className='rounded-xl hover:bg-white flex py-3 pl-5 mx-2 text-sm text-gray-500'
                        >
                          <span className='mr-5'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-5 h-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                              />
                            </svg>
                          </span>
                          All Products
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='relative transition'>
                    <input
                      className='peer hidden'
                      type='checkbox'
                      id='menu-2'
                    />
                    <div className='rounded-xl bg-gray-50 relative flex items-center py-3 pl-5 mx-2 text-sm text-gray-500 border-b-4 border-gray-300'>
                      <span className='flex w-5 mr-5 text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                      </span>
                      Analytics
                      <label
                        htmlFor='menu-2'
                        className='absolute inset-0 w-full h-full cursor-pointer'
                      ></label>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='peer-checked:rotate-180 top-4 absolute right-0 h-4 ml-auto mr-5 text-gray-500 transition'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                    <ul className='duration-400 peer-checked:max-h-96 max-h-0 rounded-2xl flex flex-col mx-2 overflow-hidden transition-all duration-300 bg-gray-100'>
                      <li className='rounded-xl hover:bg-white flex py-3 pl-5 mx-2 text-sm text-gray-500 cursor-pointer'>
                        <span className='mr-5'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                            />
                          </svg>
                        </span>
                        Carnival
                      </li>
                      <li className='rounded-xl hover:bg-white flex py-3 pl-5 mx-2 text-sm text-gray-500 cursor-pointer'>
                        <span className='mr-5'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                            />
                          </svg>
                        </span>
                        Analytics
                      </li>
                      <li className='rounded-xl hover:bg-white flex py-3 pl-5 mx-2 text-sm text-gray-500 cursor-pointer'>
                        <span className='mr-5'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                            />
                          </svg>
                        </span>
                        Revenue
                      </li>
                    </ul>
                  </li>
                  <li className='relative transition'>
                    <div className='rounded-xl hover:bg-gray-50 relative flex items-center py-3 pl-5 mx-2 text-sm text-gray-500 cursor-pointer'>
                      <span className='flex w-5 mr-5 text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                      </span>
                      Support Tickets
                    </div>
                  </li>
                  <li className='relative transition'>
                    <div className='cursor-pointer'>
                      <Link
                        to={"/"}
                        className='rounded-xl hover:bg-gray-50 relative flex items-center py-3 pl-5 mx-2 text-sm text-gray-500'
                      >
                        <span className='flex w-5 mr-5 text-gray-500'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                            />
                          </svg>
                        </span>
                        Goto Home
                      </Link>
                    </div>
                  </li>
                  <li className='relative transition'>
                    <div className='rounded-xl hover:bg-gray-50 relative flex items-center py-3 pl-5 mx-2 text-sm text-gray-500 cursor-pointer'>
                      <span className='flex w-5 mr-5 text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                      </span>
                      Settings
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col col-span-5'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
