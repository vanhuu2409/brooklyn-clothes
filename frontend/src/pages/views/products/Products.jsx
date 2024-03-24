import { useParams } from "react-router-dom";
import LayoutView from "../components/LayoutView";
const Products = () => {
  const { id } = useParams();
  return (
    <LayoutView>
      <div className='bg-white'>
        <div>
          {/* <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    --> */}
          <div
            className='lg:hidden relative z-40'
            role='dialog'
            aria-modal='true'
          >
            {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
            <div className='fixed inset-0 bg-black bg-opacity-25'></div>

            <div className='fixed inset-0 z-40 flex'>
              {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
              <div className='relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl'>
                <div className='flex items-center justify-between px-4'>
                  <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                  <button
                    type='button'
                    className='flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md'
                  >
                    <span className='sr-only'>Close menu</span>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                {/* <!-- Filters --> */}
                <form className='mt-4 border-t border-gray-200'>
                  <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='px-2 py-3 font-medium text-gray-900'
                  >
                    <li>
                      <a href='#' className='block px-2 py-3'>
                        Totes
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-2 py-3'>
                        Backpacks
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-2 py-3'>
                        Travel Bags
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-2 py-3'>
                        Hip Bags
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-2 py-3'>
                        Laptop Sleeves
                      </a>
                    </li>
                  </ul>

                  <div className='px-4 py-6 border-t border-gray-200'>
                    <h3 className='flow-root -mx-2 -my-3'>
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type='button'
                        className='hover:text-gray-500 flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white'
                        aria-controls='filter-section-mobile-0'
                        aria-expanded='false'
                      >
                        <span className='font-medium text-gray-900'>Color</span>
                        <span className='flex items-center ml-6'>
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className='pt-6' id='filter-section-mobile-0'>
                      <div className='space-y-6'>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-0'
                            name='color[]'
                            value='white'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-color-0'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            White
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-1'
                            name='color[]'
                            value='beige'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-color-1'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Beige
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-2'
                            name='color[]'
                            value='blue'
                            type='checkbox'
                            checked
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-color-2'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Blue
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-3'
                            name='color[]'
                            value='brown'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-color-3'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Brown
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-4'
                            name='color[]'
                            value='green'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-color-4'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Green
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-5'
                            name='color[]'
                            value='purple'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-color-5'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-6 border-t border-gray-200'>
                    <h3 className='flow-root -mx-2 -my-3'>
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type='button'
                        className='hover:text-gray-500 flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white'
                        aria-controls='filter-section-mobile-1'
                        aria-expanded='false'
                      >
                        <span className='font-medium text-gray-900'>
                          Category
                        </span>
                        <span className='flex items-center ml-6'>
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className='pt-6' id='filter-section-mobile-1'>
                      <div className='space-y-6'>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-category-0'
                            name='category[]'
                            value='new-arrivals'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-category-0'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            New Arrivals
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-category-1'
                            name='category[]'
                            value='sale'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-category-1'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Sale
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-category-2'
                            name='category[]'
                            value='travel'
                            type='checkbox'
                            checked
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-category-2'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Travel
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-category-3'
                            name='category[]'
                            value='organization'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-category-3'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Organization
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-category-4'
                            name='category[]'
                            value='accessories'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-category-4'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            Accessories
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-6 border-t border-gray-200'>
                    <h3 className='flow-root -mx-2 -my-3'>
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type='button'
                        className='hover:text-gray-500 flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white'
                        aria-controls='filter-section-mobile-2'
                        aria-expanded='false'
                      >
                        <span className='font-medium text-gray-900'>Size</span>
                        <span className='flex items-center ml-6'>
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className='pt-6' id='filter-section-mobile-2'>
                      <div className='space-y-6'>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-size-0'
                            name='size[]'
                            value='2l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-size-0'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            2L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-size-1'
                            name='size[]'
                            value='6l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-size-1'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            6L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-size-2'
                            name='size[]'
                            value='12l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-size-2'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            12L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-size-3'
                            name='size[]'
                            value='18l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-size-3'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            18L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-size-4'
                            name='size[]'
                            value='20l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-size-4'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            20L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-size-5'
                            name='size[]'
                            value='40l'
                            type='checkbox'
                            checked
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-mobile-size-5'
                            className='flex-1 min-w-0 ml-3 text-gray-500'
                          >
                            40L
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <main className='max-w-7xl sm:px-6 lg:px-8 px-4 mx-auto'>
            <div className='flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                New Arrivals
              </h1>

              <div className='flex items-center'>
                <div className='relative inline-block text-left'>
                  <div>
                    <button
                      type='button'
                      className='group hover:text-gray-900 inline-flex justify-center text-sm font-medium text-gray-700'
                      id='menu-button'
                      aria-expanded='false'
                      aria-haspopup='true'
                    >
                      Sort
                      <svg
                        className='group-hover:text-gray-500 flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>

                  {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                  <div
                    className='ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='menu-button'
                    tabIndex='-1'
                  >
                    <div className='py-1' role='none'>
                      {/* <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm font-medium text-gray-900'
                        role='menuitem'
                        tabIndex='-1'
                        id='menu-item-0'
                      >
                        Most Popular
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                        tabIndex='-1'
                        id='menu-item-1'
                      >
                        Best Rating
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                        tabIndex='-1'
                        id='menu-item-2'
                      >
                        Newest
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                        tabIndex='-1'
                        id='menu-item-3'
                      >
                        Price: Low to High
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                        tabIndex='-1'
                        id='menu-item-4'
                      >
                        Price: High to Low
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type='button'
                  className='hover:text-gray-500 sm:ml-7 p-2 ml-5 -m-2 text-gray-400'
                >
                  <span className='sr-only'>View grid</span>
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button
                  type='button'
                  className='hover:text-gray-500 sm:ml-6 lg:hidden p-2 ml-4 -m-2 text-gray-400'
                >
                  <span className='sr-only'>Filters</span>
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby='products-heading' className='pt-6 pb-24'>
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>

              <div className='gap-x-8 gap-y-10 lg:grid-cols-4 grid grid-cols-1'>
                {/* <!-- Filters --> */}
                <form className='lg:block hidden'>
                  <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200'
                  >
                    <li>
                      <a href='#'>Totes</a>
                    </li>
                    <li>
                      <a href='#'>Backpacks</a>
                    </li>
                    <li>
                      <a href='#'>Travel Bags</a>
                    </li>
                    <li>
                      <a href='#'>Hip Bags</a>
                    </li>
                    <li>
                      <a href='#'>Laptop Sleeves</a>
                    </li>
                  </ul>

                  <div className='py-6 border-b border-gray-200'>
                    <h3 className='flow-root -my-3'>
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type='button'
                        className='hover:text-gray-500 flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white'
                        aria-controls='filter-section-0'
                        aria-expanded='false'
                      >
                        <span className='font-medium text-gray-900'>Color</span>
                        <span className='flex items-center ml-6'>
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className='pt-6' id='filter-section-0'>
                      <div className='space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='filter-color-0'
                            name='color[]'
                            value='white'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-color-0'
                            className='ml-3 text-sm text-gray-600'
                          >
                            White
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-color-1'
                            name='color[]'
                            value='beige'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-color-1'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Beige
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-color-2'
                            name='color[]'
                            value='blue'
                            type='checkbox'
                            checked
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-color-2'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Blue
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-color-3'
                            name='color[]'
                            value='brown'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-color-3'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Brown
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-color-4'
                            name='color[]'
                            value='green'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-color-4'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Green
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-color-5'
                            name='color[]'
                            value='purple'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-color-5'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-6 border-b border-gray-200'>
                    <h3 className='flow-root -my-3'>
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type='button'
                        className='hover:text-gray-500 flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white'
                        aria-controls='filter-section-1'
                        aria-expanded='false'
                      >
                        <span className='font-medium text-gray-900'>
                          Category
                        </span>
                        <span className='flex items-center ml-6'>
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className='pt-6' id='filter-section-1'>
                      <div className='space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='filter-category-0'
                            name='category[]'
                            value='new-arrivals'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-category-0'
                            className='ml-3 text-sm text-gray-600'
                          >
                            New Arrivals
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-category-1'
                            name='category[]'
                            value='sale'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-category-1'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Sale
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-category-2'
                            name='category[]'
                            value='travel'
                            type='checkbox'
                            checked
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-category-2'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Travel
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-category-3'
                            name='category[]'
                            value='organization'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-category-3'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Organization
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-category-4'
                            name='category[]'
                            value='accessories'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-category-4'
                            className='ml-3 text-sm text-gray-600'
                          >
                            Accessories
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-6 border-b border-gray-200'>
                    <h3 className='flow-root -my-3'>
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type='button'
                        className='hover:text-gray-500 flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white'
                        aria-controls='filter-section-2'
                        aria-expanded='false'
                      >
                        <span className='font-medium text-gray-900'>Size</span>
                        <span className='flex items-center ml-6'>
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className='pt-6' id='filter-section-2'>
                      <div className='space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='filter-size-0'
                            name='size[]'
                            value='2l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-size-0'
                            className='ml-3 text-sm text-gray-600'
                          >
                            2L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-size-1'
                            name='size[]'
                            value='6l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-size-1'
                            className='ml-3 text-sm text-gray-600'
                          >
                            6L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-size-2'
                            name='size[]'
                            value='12l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-size-2'
                            className='ml-3 text-sm text-gray-600'
                          >
                            12L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-size-3'
                            name='size[]'
                            value='18l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-size-3'
                            className='ml-3 text-sm text-gray-600'
                          >
                            18L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-size-4'
                            name='size[]'
                            value='20l'
                            type='checkbox'
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-size-4'
                            className='ml-3 text-sm text-gray-600'
                          >
                            20L
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-size-5'
                            name='size[]'
                            value='40l'
                            type='checkbox'
                            checked
                            className='focus:ring-indigo-500 w-4 h-4 text-indigo-600 border-gray-300 rounded'
                          />
                          <label
                            htmlFor='filter-size-5'
                            className='ml-3 text-sm text-gray-600'
                          >
                            40L
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* <!-- Product grid --> */}
                <div className='lg:col-span-3'>
                  {/* <!-- Your content --> */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </LayoutView>
  );
};

export default Products;
