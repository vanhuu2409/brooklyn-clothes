import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleBags, setToggleBags] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);
  const [togglePreset, setTogglePreset] = useState(false);
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <header className='*:font-bold *:text-md *:drop-shadow-sm'>
      {/* top header */}
      <p className='bg-black-1 drop-shadow-md text-neutral-300 w-full py-2 text-sm subpixel-antialiased font-semibold leading-tight tracking-wide text-center uppercase shadow-md'>
        SALE UPDATE: NOW UP TO 60% OFF
      </p>
      <nav className='xl:px-24 md:px-8 relative grid items-center grid-cols-7 px-2 bg-white'>
        {/* left side */}
        <div className='items-start col-span-3'>
          {/* desktop navbar */}
          <ul className='lg:flex items-center hidden w-full'>
            {/* shop */}
            <li className='group/navlink'>
              {/* navlink */}
              <Link
                className='hover:text-black-4 flex items-center gap-1 px-2 py-5 transition-all'
                to='/'
              >
                shop
                {/* chevron icons */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={4}
                  stroke='currentColor'
                  className='group-hover/navlink:rotate-180 w-3 h-3 transition-all duration-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Link>
              {/* sub/MegaMenu */}
              <div className='top-full group-hover/navlink:h-[32rem] xl:px-28 lg:px-10 border border-neutral-100 absolute inset-x-0 flex h-0 overflow-hidden transition-all duration-300 bg-white divide-x'>
                {/* left */}
                <ul className='flex flex-col h-full max-h-full gap-2 px-16 py-12'>
                  <li>
                    {/* navlink */}
                    <Link
                      className='hover:text-black-4 flex items-center gap-1 px-2 py-5 text-2xl font-extrabold transition-all'
                      to='/'
                    >
                      Shop all
                    </Link>
                  </li>
                  <li>
                    {/* navlink */}
                    <Link
                      className='hover:text-black-4 flex items-center gap-1 px-2 py-5 text-2xl font-extrabold transition-all'
                      to='/'
                    >
                      Lookbook
                    </Link>
                  </li>
                </ul>
                {/* middle */}
                <div className='gap-14 flex flex-1 h-full max-h-full px-20 py-12'>
                  {/* middle item */}
                  <ul className='flex flex-col gap-3'>
                    <div className='p-2 text-2xl font-bold'>TopS</div>
                    <ul className='flex flex-col justify-center gap-3 *:capitalize *:font-normal *:text-black-3'>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Hoodies
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          T-Shirts
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Jackets
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 font-bold transition-all'>
                          View all
                        </Link>
                      </li>
                    </ul>
                  </ul>
                  <ul className='flex flex-col gap-3'>
                    <div className='p-2 text-2xl font-bold'>Bottoms</div>
                    <ul className='flex flex-col justify-center gap-3 *:capitalize *:font-normal *:text-black-3'>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Pants
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Shorts
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 font-bold transition-all'>
                          View all
                        </Link>
                      </li>
                    </ul>
                  </ul>
                  <ul className='flex flex-col gap-3'>
                    <div className='p-2 text-2xl font-bold'>Headwears</div>
                    <ul className='flex flex-col justify-center gap-3 *:capitalize *:font-normal *:text-black-3'>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Caps
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Hats
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 font-bold transition-all'>
                          View all
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                {/* right */}
                <Link
                  to='/'
                  className='group/navcard relative block overflow-hidden'
                >
                  {/* top card */}
                  <img
                    src='https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle231.jpg?v=1685014331&width=550'
                    alt=''
                    className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                  />
                  <div className='bg-gradient-to-t from-black-3 to-transparent absolute inset-0'></div>
                  {/* body card */}
                  <div className='bottom-4 left-6 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                    <h4 className=' text-neutral-300 font-normal tracking-widest text-[.3rem]'>
                      BROOKLYN lifestyle
                    </h4>
                    <p className='text-lg text-white'>bucket hat</p>
                    <p className='font-extralight text-white'>
                      $24.99{" "}
                      <span className='text-neutral-400 line-through'>
                        $39.99
                      </span>
                    </p>
                  </div>
                  {/* product status */}
                  <div className='top-4 px-2 py-1 leading-tight bg-black text-white font-normal tracking-widest text-[.3rem] capitalize right-6 absolute *:drop-shadow-sm'>
                    sale
                  </div>
                </Link>
              </div>
            </li>
            {/* collections */}
            <li className='group/navlink'>
              {/* navlink */}
              <Link
                className='hover:text-black-4 group flex items-center gap-1 px-2 py-5 transition-all'
                to='/'
              >
                collections
                {/* chevron icons */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={4}
                  stroke='currentColor'
                  className='group-hover:rotate-180 w-3 h-3 transition-all duration-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Link>
              {/* sublinks */}
              {/* sub/MegaMenu */}
              <div className='top-full group-hover/navlink:h-[32rem] xl:px-28 lg:px-10 border border-neutral-100 absolute inset-x-0 flex h-0 overflow-hidden transition-all duration-300 bg-white divide-x'>
                {/* list collections */}
                <ul className='grid h-full max-h-full grid-cols-3 gap-2 px-16 py-12'>
                  {/* collection item */}
                  <Link
                    to='/'
                    className='group/navcard relative block overflow-hidden'
                  >
                    {/* top card */}
                    <img
                      src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                      alt=''
                      className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                    />
                    <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                    {/* body card */}
                    <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                      <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                        Everyday essentials
                      </h3>
                    </div>
                  </Link>
                  {/* collection item */}
                  <Link
                    to='/'
                    className='group/navcard relative block overflow-hidden'
                  >
                    {/* top card */}
                    <img
                      src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1.jpg?v=1690201723&width=3000'
                      alt=''
                      className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                    />
                    <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                    {/* body card */}
                    <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                      <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                        carefree classics
                      </h3>
                    </div>
                  </Link>
                  {/* collection item */}
                  <Link
                    to='/'
                    className='group/navcard relative block overflow-hidden'
                  >
                    {/* top card */}
                    <img
                      src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1_db7ff59a-61a0-4dda-9306-8923eec52061.jpg?v=1685687628&width=3000'
                      alt=''
                      className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                    />
                    <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                    {/* body card */}
                    <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                      <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                        mellow outfits
                      </h3>
                    </div>
                  </Link>
                </ul>
              </div>
            </li>
            {/* presets */}
            <li className='group/navlink'>
              {/* navlink */}
              <Link
                className='hover:text-black-4 group flex items-center gap-1 px-2 py-5 transition-all'
                to='/'
              >
                presets
                {/* chevron icons */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={4}
                  stroke='currentColor'
                  className='group-hover:rotate-180 w-3 h-3 transition-all duration-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Link>
              {/* sub/MegaMenu */}
              <div className='top-full group-hover/navlink:h-[32rem] xl:px-28 lg:px-10 border border-neutral-100 absolute inset-x-0 grid grid-cols-3 h-0 overflow-hidden transition-all duration-300 bg-white divide-x'>
                {/* left */}
                <div className='gap-14 flex flex-1 h-full max-h-full col-span-1 px-20 py-12'>
                  {/* left item */}
                  <ul className='flex flex-col gap-3'>
                    <div className='p-2 text-2xl font-bold'>TopS</div>
                    <ul className='flex flex-col justify-center gap-3 *:capitalize *:font-normal *:text-black-3'>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Hoodies
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          T-Shirts
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Jackets
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 font-bold transition-all'>
                          View all
                        </Link>
                      </li>
                    </ul>
                  </ul>
                  <ul className='flex flex-col gap-3'>
                    <div className='p-2 text-2xl font-bold'>Bottoms</div>
                    <ul className='flex flex-col justify-center gap-3 *:capitalize *:font-normal *:text-black-3'>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Pants
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 transition-all'>
                          Shorts
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:opacity-70 p-2 font-bold transition-all'>
                          View all
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                {/* right */}
                <ul className='grid h-full max-h-full grid-cols-2 col-span-2 gap-2 px-16 py-12'>
                  {/* collection item */}
                  <Link
                    to='/'
                    className='group/navcard relative block overflow-hidden'
                  >
                    {/* top card */}
                    <img
                      src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                      alt=''
                      className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                    />
                    <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                    {/* body card */}
                    <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                      <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                        Limited Collection
                      </h3>
                    </div>
                  </Link>
                  {/* collection item */}
                  <Link
                    to='/'
                    className='group/navcard relative block overflow-hidden'
                  >
                    {/* top card */}
                    <img
                      src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1_db7ff59a-61a0-4dda-9306-8923eec52061.jpg?v=1685687628&width=3000'
                      alt=''
                      className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                    />
                    <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                    {/* body card */}
                    <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                      <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                        DISCOUNT ON 100+ ITEMS{" "}
                      </h3>
                    </div>
                  </Link>
                </ul>
              </div>
            </li>
            {/* about */}
            <li>
              {/* navlink */}
              <Link
                className='hover:text-black-4 group flex items-center gap-1 px-2 py-5 transition-all'
                to='/'
              >
                about
              </Link>
            </li>
            {/* news */}
            <li>
              {/* navlink */}
              <Link
                className='hover:text-black-4 group flex items-center gap-1 px-2 py-5 transition-all'
                to='/'
              >
                news
              </Link>
            </li>
          </ul>
          {/* toggle nav burger */}
          <button
            onClick={() => setToggleMobileNav(!toggleMobileNav)}
            className='lg:hidden group/burger block p-2 overflow-hidden'
          >
            {!toggleMobileNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className={`group-hover/burger:scale-125 w-6 h-6 transition-all duration-300`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 9h16.5m-16.5 6.75h16.5'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className={`group-hover/burger:scale-125  w-6 h-6 transition-all duration-300`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
            )}
          </button>
          {/* mobile navbar */}
          <ul
            className={`top-full flex flex-col gap-4 md:px-10 lg:hidden px-4 absolute transition-all overflow-hidden ${
              toggleMobileNav ? "translate-x-0 w-full" : "-translate-x-full w-0"
            } inset-x-0 bg-black-2 border-y border-neutral-100 divide-y divide-neutral-700 *:pt-4 *:text-xl *:text-white py-4`}
          >
            <li className=''>
              <button
                to='/'
                onClick={() => setToggleShop(!toggleShop)}
                className='flex items-center gap-1'
              >
                Shop{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={4}
                  stroke='currentColor'
                  className={`w-3 h-3 ${
                    toggleShop && "rotate-90"
                  } transition-all duration-300`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m8.25 4.5 7.5 7.5-7.5 7.5'
                  />
                </svg>
              </button>
              {/* sub shop menu */}
              <ul
                className={`flex flex-col overflow-hidden ${
                  toggleShop ? "block" : "hidden"
                } gap-2 *:text-lg pt-2 pl-4 *:pt-2 divide-y *:capitalize *:font-normal *:tracking-widest divide-neutral-700 antialiased`}
              >
                <li className=''>
                  <Link to='/' className=''>
                    Shop all
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Lookbook
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Tops
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Bottoms
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Headwears
                  </Link>
                </li>
              </ul>
            </li>
            <li className=''>
              <button to='/' className='flex items-center gap-1'>
                Collections{" "}
              </button>
            </li>
            <li className=''>
              <button
                to='/'
                onClick={() => setTogglePreset(!togglePreset)}
                className='flex items-center gap-1'
              >
                Presets{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={4}
                  stroke='currentColor'
                  className={`w-3 h-3 ${
                    togglePreset && "rotate-90"
                  } transition-all duration-300`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m8.25 4.5 7.5 7.5-7.5 7.5'
                  />
                </svg>
              </button>
              {/* sub presets menu */}
              <ul
                className={`flex flex-col overflow-hidden ${
                  togglePreset ? "block" : "hidden"
                } gap-2 *:text-lg pt-2  pl-4 *:pt-2 divide-y *:capitalize *:font-normal *:tracking-widest divide-neutral-700 antialiased`}
              >
                <li className=''>
                  <Link to='/' className=''>
                    lifestyle
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    North
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Essential
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Marble
                  </Link>
                </li>
                <li className=''>
                  <Link to='/' className=''>
                    Resonance
                  </Link>
                </li>
              </ul>
            </li>
            <li className=''>
              <button to='/' className='flex items-center gap-1'>
                About{" "}
              </button>
            </li>
            <li className=''>
              <button to='/' className='flex items-center gap-1'>
                News{" "}
              </button>
            </li>
          </ul>
        </div>
        {/* middle: logo */}
        <Link
          to='/'
          className='drop-shadow-md hover:text-black-4 w-full col-span-1 py-4 text-2xl font-extrabold text-center uppercase transition-all'
        >
          brooklyn
        </Link>
        {/* right side */}
        <div className='flex items-center justify-end col-span-3'>
          {/* search */}
          <div className=''>
            <button
              className='hover:text-black-4 flex items-center gap-2 p-2 transition-all'
              onClick={() => setToggleSearch(!toggleSearch)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
              <span className='lg:block hidden'>Search</span>
            </button>
            {/* Search sub/MegaMenu */}
            <div
              className={`bg-opacity-20 flex flex-row-reverse justify-start absolute inset-x-0 -top-[42%] ${
                toggleSearch ? "translate-x-0 h-screen" : "translate-x-full h-0"
              } overflow-hidden transition-all duration-300 bg-black divide-x`}
            >
              {/* right */}
              <div className='z-50 w-full h-full max-w-xl max-h-full bg-white'>
                {/* top search */}
                <button
                  className='flex justify-end w-full p-6 cursor-default'
                  onClick={() => setToggleSearch(!toggleSearch)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='hover:rotate-90 hover:opacity-60 w-8 h-8 transition-all duration-300 cursor-pointer'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                </button>
                {/* body search */}
                <div className='divide-y'>
                  {/* search header */}
                  <div className='flex items-center gap-4 px-8 pb-12'>
                    <h2 className=' text-5xl'>Search</h2>
                  </div>
                  {/* search main */}
                  <div className='flex flex-col gap-6 px-8 py-12'>
                    <p className='text-black-3 text-xl font-normal normal-case'>
                      Looks like you haven’t added anything yet, let’s get you
                      started!
                    </p>
                    <Link
                      to='/'
                      onClick={() => setToggleSearch(!toggleSearch)}
                      className='group/searchlink w-fit hover:bg-opacity-100 bg-opacity-80 inline-flex items-center gap-2 px-5 py-4 text-white transition-all bg-black'
                    >
                      <span className='text-sm font-medium tracking-tight'>
                        start shopping
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={3}
                        stroke='currentColor'
                        className='group-hover/searchlink:rotate-0 w-4 h-4 transition-all -rotate-45'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* Search collection */}
                <Link
                  to='/'
                  onClick={() => setToggleSearch(!toggleSearch)}
                  className='group/navcard h-1/2 relative block w-full overflow-hidden'
                >
                  {/* top card */}
                  <img
                    src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                    alt=''
                    className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                  />
                  <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                  {/* body card */}
                  <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                    <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                      Everyday essentials
                    </h3>
                  </div>
                </Link>
                {/* Search collection */}
                <Link
                  to='/'
                  onClick={() => setToggleSearch(!toggleSearch)}
                  className='group/navcard h-1/2 relative block w-full overflow-hidden'
                >
                  {/* top card */}
                  <img
                    src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                    alt=''
                    className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                  />
                  <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                  {/* body card */}
                  <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                    <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                      Everyday essentials
                    </h3>
                  </div>
                </Link>
              </div>
              <div
                onClick={() => setToggleSearch(!toggleSearch)}
                className='flex-1 w-full h-full'
              ></div>
            </div>
          </div>
          {/* account */}
          <div className='group/accountlink flex items-center gap-2'>
            {/* accountlink */}
            <button
              onClick={() => setToggleAccount(!toggleAccount)}
              className='hover:text-black-4 group flex items-center gap-1 p-2 transition-all'
            >
              <span className='lg:block hidden'>account</span>
              {/* user icons */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='lg:hidden w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </button>
            {/* account sub/MegaMenu */}
            <div
              className={`bg-opacity-20 flex flex-row-reverse justify-start absolute inset-x-0 -top-[42%] ${
                toggleAccount
                  ? "translate-x-0 h-screen"
                  : "translate-x-full h-0"
              } overflow-hidden transition-all duration-300 bg-black divide-x`}
            >
              {/* right */}
              <div className='z-50 w-full h-full max-w-xl max-h-full bg-white'>
                {/* top account */}
                <button
                  className='flex justify-end w-full p-6 cursor-default'
                  onClick={() => setToggleAccount(!toggleAccount)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='hover:rotate-90 hover:opacity-60 w-8 h-8 transition-all duration-300 cursor-pointer'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                </button>
                {/* body account */}
                <div className='divide-y'>
                  {/* account header */}
                  <div className='flex items-center gap-4 px-8 pb-12'>
                    <h2 className='text-5xl'>Your account</h2>
                  </div>
                  {/* account main */}
                  <div className='flex flex-col gap-6 px-8 py-12'>
                    <p className='text-black-3 text-xl font-normal normal-case'>
                      Looks like you haven’t added anything yet, let’s get you
                      started!
                    </p>
                    <div className='flex gap-4'>
                      <Link
                        to='/'
                        onClick={() => setToggleAccount(!toggleAccount)}
                        className='group/bagslink w-fit hover:bg-opacity-100 bg-opacity-80 inline-flex items-center gap-2 px-5 py-4 text-white transition-all bg-black'
                      >
                        <span className='text-sm font-medium tracking-tight'>
                          Login
                        </span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={3}
                          stroke='currentColor'
                          className='group-hover/bagslink:rotate-0 w-4 h-4 transition-all -rotate-45'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                          />
                        </svg>
                      </Link>
                      <Link
                        to='/'
                        onClick={() => setToggleAccount(!toggleAccount)}
                        className='group/bagslink w-fit hover:bg-opacity-100 bg-opacity-80 inline-flex items-center gap-2 px-5 py-4 text-white transition-all bg-black'
                      >
                        <span className='text-sm font-medium tracking-tight'>
                          Register
                        </span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={3}
                          stroke='currentColor'
                          className='group-hover/bagslink:rotate-0 w-4 h-4 transition-all -rotate-45'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* bag collection */}
                <Link
                  to='/'
                  onClick={() => setToggleAccount(!toggleAccount)}
                  className='group/navcard h-1/2 relative block w-full overflow-hidden'
                >
                  {/* top card */}
                  <img
                    src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                    alt=''
                    className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                  />
                  <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                  {/* body card */}
                  <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                    <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                      Everyday essentials
                    </h3>
                  </div>
                </Link>
                {/* bag collection */}
                <Link
                  to='/'
                  onClick={() => setToggleAccount(!toggleAccount)}
                  className='group/navcard h-1/2 relative block w-full overflow-hidden'
                >
                  {/* top card */}
                  <img
                    src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                    alt=''
                    className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                  />
                  <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                  {/* body card */}
                  <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                    <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                      Everyday essentials
                    </h3>
                  </div>
                </Link>
              </div>
              <div
                onClick={() => setToggleAccount(!toggleAccount)}
                className='flex-1 w-full h-full'
              ></div>
            </div>
          </div>
          {/* bag/cart */}
          <button
            onClick={() => setToggleBags(!toggleBags)}
            className='hover:text-black-4 p-2 transition-all'
          >
            <span className='lg:block hidden'>bags</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='lg:hidden w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>
          </button>
          {/* BAGS sub/MegaMenu */}
          <div
            className={`bg-opacity-20 bg-black flex flex-row-reverse justify-start absolute inset-x-0 -top-[42%] ${
              toggleBags ? "translate-x-0 h-screen" : "translate-x-full h-0"
            } overflow-hidden transition-all duration-300 divide-x`}
          >
            {/* right */}
            <div className='z-50 w-full h-full max-w-xl max-h-full bg-white'>
              {/* top bags */}
              <button
                className='flex justify-end w-full p-6 cursor-default'
                onClick={() => setToggleBags(!toggleBags)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='hover:rotate-90 hover:opacity-60 w-8 h-8 transition-all duration-300 cursor-pointer'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
              {/* body bags */}
              <div className='divide-y'>
                {/* bags header */}
                <div className='flex items-center gap-4 px-8 pb-12'>
                  <h2 className='text-5xl'>Your cart</h2>
                  <span className='text-5xl'>(0)</span>
                </div>
                {/* bags main */}
                <div className='flex flex-col gap-6 px-8 py-12'>
                  <p className='text-black-3 text-xl font-normal normal-case'>
                    Looks like you haven’t added anything yet, let’s get you
                    started!
                  </p>
                  <Link
                    to='/'
                    onClick={() => setToggleBags(!toggleBags)}
                    className='group/bagslink w-fit hover:bg-opacity-100 bg-opacity-80 inline-flex items-center gap-2 px-5 py-4 text-white transition-all bg-black'
                  >
                    <span className='text-sm font-medium tracking-tight'>
                      start shopping
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={3}
                      stroke='currentColor'
                      className='group-hover/bagslink:rotate-0 w-4 h-4 transition-all -rotate-45'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* bag collection */}
              <Link
                to='/'
                onClick={() => setToggleBags(!toggleBags)}
                className='group/navcard h-1/2 relative block w-full overflow-hidden'
              >
                {/* top card */}
                <img
                  src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                  alt=''
                  className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                />
                <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                {/* body card */}
                <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                  <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                    Everyday essentials
                  </h3>
                </div>
              </Link>
              {/* bag collection */}
              <Link
                to='/'
                onClick={() => setToggleBags(!toggleBags)}
                className='group/navcard h-1/2 relative block w-full overflow-hidden'
              >
                {/* top card */}
                <img
                  src='https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000'
                  alt=''
                  className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
                />
                <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
                {/* body card */}
                <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
                  <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
                    Everyday essentials
                  </h3>
                </div>
              </Link>
            </div>
            <div
              onClick={() => setToggleBags(!toggleBags)}
              className='flex-1 w-full h-full'
            ></div>
          </div>
        </div>
      </nav>
      {/* mobile navbar */}
    </header>
  );
};

export default Header;
