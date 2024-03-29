import { Logo } from "./../Logo";
import { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  formatPrice,
  navbarCollectionsList,
  navbarPresetsList,
  presetsList,
  shopListMobile,
} from "../../data/custom";
import Marquee from "react-fast-marquee";
import NavbarCollectionItem from "../NavbarCollectionItem";
import { useSelector } from "react-redux";
import ProductInCart from "../../pages/views/product/ProductInCart";
const Header = () => {
  // mobile state
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);
  const [togglePreset, setTogglePreset] = useState(false);

  // desktop right side state
  const [isOpenSidePreview, setIsOpenSidePreview] = useState(null);

  // handle onChange site turn off sidePreview
  const { pathname } = useLocation();
  useEffect(() => {
    setIsOpenSidePreview(null);
  }, [pathname]);

  // bag/cart flow
  const cartData = useSelector((state) => state.cart.cart);

  // bags count
  const bagsCount = cartData.length;
  const bagsTotal = cartData.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const bagsTotalFormat = formatPrice(bagsTotal);

  // user handle
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <header className='*:font-bold *:text-md *:drop-shadow-sm'>
        {/* top header */}
        <div className='bg-black-1 drop-shadow-md text-neutral-300 w-full py-2 text-sm subpixel-antialiased font-semibold leading-tight tracking-wide text-center uppercase shadow-md select-none'>
          <Marquee autoFill={true} pauseOnHover={true}>
            <span className='px-4'>·</span> SALE UPDATE: NOW UP TO 60% OFF
          </Marquee>
        </div>

        <nav className='sm:px-6 lg:max-w-[90rem] lg:px-8 max-w-2xl md:max-w-4xl min-w-full px-4 mx-auto md:px-8 md:grid md:grid-cols-7 relative flex items-center justify-between bg-white'>
          {/* left side */}
          <div className='items-start col-span-3'>
            {/* desktop navbar */}
            <ul className='lg:flex items-center hidden w-full'>
              {/* shop */}
              <li className='group/navlink'>
                {/* navlink */}
                <Link
                  className='hover:text-black-4 flex items-center gap-1 px-2 py-5 transition-all'
                  to='/products'
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
                <div className='top-full group-hover/navlink:h-[32rem] xl:px-28 lg:px-10 absolute inset-x-0 flex h-0 overflow-hidden transition-all duration-300 bg-white divide-x'>
                  {/* left */}
                  <ul className='flex flex-col h-full max-h-full gap-2 px-16 py-12'>
                    <li>
                      {/* navlink */}
                      <Link
                        className='hover:text-black-4 flex items-center gap-1 px-2 py-5 text-2xl font-extrabold transition-all'
                        to='/products'
                      >
                        Shop all
                      </Link>
                    </li>
                    <li>
                      {/* navlink */}
                      <Link
                        className='hover:text-black-4 flex items-center gap-1 px-2 py-5 text-2xl font-extrabold transition-all'
                        to='/lookbook'
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
                            T Shirts
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
                    <div className='top-4 px-2 group-hover/navcard:opacity-0 opacity-100 translate-y-0 group-hover/navcard:-translate-y-full transition-all overflow-hidden py-1 leading-tight bg-black text-white font-normal tracking-widest text-[.3rem] capitalize right-6 absolute *:drop-shadow-sm'>
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
                <div className='top-full group-hover/navlink:h-[32rem] xl:px-28 lg:px-10  absolute inset-x-0 flex h-0 overflow-hidden transition-all duration-300 bg-white divide-x'>
                  {/* list collections */}
                  <ul className='grid h-full max-h-full grid-cols-3 gap-4 px-16 py-4'>
                    {/* collection item */}
                    {navbarCollectionsList.map((item) => (
                      <NavbarCollectionItem
                        key={item?.id + "navbarCollection"}
                        {...item}
                      />
                    ))}

                    {/* collection item */}
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
                <div className='top-full group-hover/navlink:h-[32rem] xl:px-28 lg:px-10  absolute inset-x-0 grid grid-cols-3 h-0 overflow-hidden transition-all duration-300 bg-white divide-x'>
                  {/* left */}
                  <div className='gap-14 flex flex-1 h-full max-h-full col-span-1 px-20 py-12'>
                    {/* left item */}
                    <ul className='flex flex-col gap-3'>
                      <div className='p-2 text-2xl font-bold'>Presets</div>
                      <ul className='flex flex-col justify-center gap-3 *:capitalize *:font-normal *:text-black-3'>
                        {presetsList.map((item) => (
                          <li key={item + "presetsListDesktop"}>
                            <Link className='hover:opacity-70 p-2 transition-all'>
                              {item}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link className='hover:opacity-70 p-2 font-bold transition-all'>
                            View all
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  {/* right */}
                  <ul className='grid h-full max-h-full grid-cols-2 col-span-2 gap-4 px-16 py-4'>
                    {/* collection item */}
                    {navbarPresetsList.map((item) => (
                      <NavbarCollectionItem
                        key={item?.id + "navbarPresets"}
                        {...item}
                      />
                    ))}
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
              className={`top-full z-50 flex flex-col gap-4 md:px-10 lg:hidden px-4 absolute transition-all overflow-hidden ${
                toggleMobileNav
                  ? "translate-x-0 w-full"
                  : "-translate-x-[100%] w-0"
              } inset-x-0 inset-y-0 min-h-screen bg-black-1 border-y border-neutral-100 divide-y divide-neutral-700 *:pt-4 *:text-xl *:text-white pb-4`}
            >
              <li className=''>
                <button
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
                  {shopListMobile.map((item) => (
                    <li key={item + "shopListMobile"} className=''>
                      <Link to='/' className=''>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
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
                  {presetsList.map((item) => (
                    <li key={item + "headerlist"} className=''>
                      <Link to='/' className=''>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {["Collections", "About", "News"].map((item) => (
                <li key={item + "mobilemenu"} className=''>
                  <Link to='/' className='flex items-center gap-1'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* mobile navbar */}
          </div>

          {/* middle: logo */}
          <Logo />

          {/* right side */}
          <div className='flex items-center justify-end col-span-3'>
            {/* Search */}
            <button
              data-type='searchbar'
              onClick={(e) => {
                if (isOpenSidePreview === e.currentTarget.dataset.type)
                  return setIsOpenSidePreview(null);
                setIsOpenSidePreview(e.currentTarget.dataset.type);
              }}
              className='hover:text-black-4 flex items-center gap-2 p-2 transition-all'
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

            {/* account */}
            {!currentUser ? (
              <button
                data-type='accountbar'
                onClick={(e) => {
                  if (isOpenSidePreview === e.currentTarget.dataset.type)
                    return setIsOpenSidePreview(null);
                  setIsOpenSidePreview(e.currentTarget.dataset.type);
                }}
                className='hover:text-black-4 flex items-center gap-2 p-2 transition-all'
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
            ) : (
              <Link
                to='/profile'
                className='hover:text-black-4 flex items-center gap-2 p-2 transition-all'
              >
                <img
                  className='size-8 min-w-6 object-cover border-2 rounded-full cursor-pointer'
                  src={currentUser.avatar}
                />
              </Link>
            )}

            {/* BAGS/cart */}
            <button
              data-type='bagsbar'
              onClick={(e) =>
                setIsOpenSidePreview(e.currentTarget.dataset.type)
              }
              className='hover:text-black-4 group relative flex items-center gap-2 p-2 transition-all'
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
              {/* bags count */}
              <span className='group-hover:opacity-60 bg-opacity-60 text-[.75rem] size-4 -right-1 absolute top-0 inline-flex items-center justify-center text-black-1 rounded-full'>
                {bagsCount}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* SidePreview */}
      {/* Search */}
      {
        <div className={`overflow-hidden transition-all duration-300`}>
          <div
            onClick={() => setIsOpenSidePreview(null)}
            className={`bg-opacity-35 fixed inset-0 top-0 z-40 w-full h-full min-h-[120vh] bg-black transition-all duration-300  ${
              isOpenSidePreview === "searchbar"
                ? "translate-x-0 w-full opacity-100"
                : "translate-x-full w-0 opacity-0"
            }`}
          ></div>
          <div
            className={`fixed px-4 sm:px-8 py-10 top-0 bottom-0 right-0 w-full sm:max-w-[40rem] z-50 h-full min-h-[120vh] text-black bg-white transition-all duration-300  ${
              isOpenSidePreview === "searchbar"
                ? "translate-x-0 opacity-100"
                : "translate-x-full w-0 opacity-0"
            }`}
          >
            {/* top sideprewview */}
            <div className='flex items-center justify-between'>
              <h1 className='text-5xl font-extrabold'>Search</h1>
              {/* close btn */}
              <button
                className='hover:*:rotate-90 *:transition-transform *:duration-300'
                onClick={() => setIsOpenSidePreview(null)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            {/* main sidepreview */}
            <div className='flex flex-col w-full h-full mt-4 overflow-y-scroll'>
              {/* top */}
              <div className='flex-1 mb-8'>
                {/* search form */}
                <form>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='search'
                      className='ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-4 sm:text-sm sm:leading-6 text-black-1 block w-full px-5 py-4 pr-20 mt-4 transition-all bg-white border border-black outline-none'
                      placeholder='Search something...'
                    />
                  </div>
                  <button className='group hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all bg-black border border-black'>
                    <span className='text-sm font-bold tracking-tight'>
                      Search
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={3}
                      stroke='currentColor'
                      className='group-hover:rotate-0 w-4 h-4 transition-all -rotate-45'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                      />
                    </svg>
                  </button>
                </form>
                <div className='mt-6'>
                  <h3 className='text-black-2 py-2 font-extrabold tracking-tighter'>
                    Categories
                  </h3>
                  <div className='sm:gap-x-4 gap-x-2 gap-y-0 sm:gap-y-2 flex flex-wrap *:font-bold *:text-2xl *:tracking-widest'>
                    {navbarCollectionsList.map((item) => (
                      <Link
                        key={item?.id}
                        to={item?.href}
                        className='opacity-60 hover:opacity-100 hover:scale-110 block transition-all duration-300'
                      >
                        {item?.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* bottom */}
              <div className=' w-full'>
                {navbarCollectionsList.map((item) => (
                  <NavbarCollectionItem key={item?.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      {/* Search */}
      {/* account */}
      {
        <div className={`overflow-hidden`}>
          <div
            onClick={() => setIsOpenSidePreview(null)}
            className={`bg-opacity-35 fixed inset-0 top-0 z-40 w-full h-full min-h-[120vh] bg-black transition-all duration-300  ${
              isOpenSidePreview === "accountbar"
                ? "translate-x-0 w-full opacity-100"
                : "translate-x-full w-0 opacity-0"
            }`}
          ></div>
          <div
            className={`fixed px-4 sm:px-8 py-10 top-0 bottom-0 right-0 w-full sm:max-w-[40rem] z-50 h-full min-h-[120vh] text-black bg-white transition-all duration-300  ${
              isOpenSidePreview === "accountbar"
                ? "translate-x-0 opacity-100"
                : "translate-x-full w-0 opacity-0"
            }`}
          >
            {/* top sideprewview */}
            <div className='flex items-center justify-between'>
              <h1 className='text-5xl font-extrabold'>account</h1>
              {/* close btn */}
              <button
                className='hover:*:rotate-90 *:transition-transform *:duration-300'
                onClick={() => setIsOpenSidePreview(null)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            {/* main sidepreview */}
            <div className='flex flex-col w-full h-full mt-4 overflow-y-scroll'>
              {/* top */}
              <div className='flex-1 mb-8'>
                <Link
                  to='/login'
                  className='group hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all bg-black border border-black'
                >
                  <span className='text-sm font-bold tracking-tight'>
                    Login
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                    stroke='currentColor'
                    className='group-hover:rotate-0 w-4 h-4 transition-all -rotate-45'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
                <Link
                  to='/signup'
                  className='group hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all bg-black border border-black'
                >
                  <span className='text-sm font-bold tracking-tight'>
                    Sign Up
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                    stroke='currentColor'
                    className='group-hover:rotate-0 w-4 h-4 transition-all -rotate-45'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
                <div className='mt-6'>
                  <h3 className='text-black-2 py-2 font-extrabold tracking-tighter'>
                    Categories
                  </h3>
                  <div className='sm:gap-x-4 gap-x-2 gap-y-0 sm:gap-y-2 flex flex-wrap *:font-bold *:text-2xl *:tracking-widest'>
                    {navbarCollectionsList.map((item) => (
                      <Link
                        key={item?.id}
                        to={item?.href}
                        className='opacity-60 hover:opacity-100 hover:scale-110 block transition-all duration-300'
                      >
                        {item?.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* bottom */}
              <div className=' w-full'>
                {navbarCollectionsList.map((item) => (
                  <NavbarCollectionItem key={item?.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      {/* account */}
      {/* BAGS */}
      {
        <div className={`overflow-hidden transition-all duration-300`}>
          <div
            onClick={() => setIsOpenSidePreview(null)}
            className={`bg-opacity-35 fixed inset-0 top-0 z-40 w-full h-full min-h-[120vh] bg-black transition-all duration-300  ${
              isOpenSidePreview === "bagsbar"
                ? "translate-x-0 w-full opacity-100"
                : "translate-x-full w-0 opacity-0"
            }`}
          ></div>
          <div
            className={`fixed px-4 sm:px-8 py-10 top-0 bottom-0 right-0 w-full sm:max-w-[40rem] z-50 h-full min-h-[120vh] text-black bg-white transition-all duration-300  ${
              isOpenSidePreview === "bagsbar"
                ? "translate-x-0 opacity-100"
                : "translate-x-full w-0 opacity-0"
            }`}
          >
            {/* top sideprewview */}
            <div className='flex items-center justify-between'>
              <h1 className='text-5xl font-extrabold'>
                BAGS <span>({bagsCount})</span>
              </h1>
              {/* close btn */}
              <button
                className='hover:*:rotate-90 *:transition-transform *:duration-300'
                onClick={() => setIsOpenSidePreview(null)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            {/* main sidepreview */}
            <div
              className={`flex flex-col w-full h-auto max-h-[60%]  mt-4 overflow-y-auto`}
            >
              {/* top */}
              <div className='flex-1 mb-8'>
                {cartData.length > 0 && (
                  <div className='flex flex-col w-full border-t'>
                    {cartData.map((item, i) => (
                      <ProductInCart key={i} {...item} />
                    ))}
                  </div>
                )}
                {cartData.length === 0 && (
                  <>
                    <div>No item found...</div>
                    <div className='mt-6'>
                      <h3 className='text-black-2 py-2 font-extrabold tracking-tighter'>
                        Categories
                      </h3>
                      <div className='sm:gap-x-4 gap-x-2 gap-y-0 sm:gap-y-2 flex flex-wrap *:font-bold *:text-2xl *:tracking-widest'>
                        {navbarCollectionsList.map((item) => (
                          <Link
                            key={item?.id}
                            to={item?.href}
                            className='opacity-60 hover:opacity-100 hover:scale-110 block transition-all duration-300'
                          >
                            {item?.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* checkout btn */}
            {cartData.length !== 0 && (
              <>
                {/* Top Bags Total */}
                <div className='mt-6 *:flex *:justify-between *:flex-wrap *:mb-4'>
                  <div>
                    <p className='text-black-2 flex-1 text-lg font-bold'>
                      Discount
                    </p>
                    <p className='text-black-4 text-base font-bold normal-case'>
                      Calculated at checkout
                    </p>
                  </div>
                  <div>
                    <p className='text-black-2 flex-1 text-lg font-bold'>
                      Shipping
                    </p>
                    <p className='text-black-4 text-base font-bold normal-case'>
                      Calculated at checkout
                    </p>
                  </div>
                  <div>
                    <p className='text-black-2 flex-1 text-lg font-bold'>
                      Subtotal
                    </p>
                    <p className='text-black-1 text-base font-bold'>
                      {bagsTotalFormat}
                    </p>
                  </div>
                </div>
                {/* Bottom Bags Total */}
                <Link
                  to='/cart'
                  className='group hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all bg-black border border-black'
                >
                  <span className='text-sm font-bold tracking-tight'>
                    Check out
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                    stroke='currentColor'
                    className='group-hover:rotate-0 w-4 h-4 transition-all -rotate-45'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
              </>
            )}
            {/* collections preview */}
            {/* bottom */}
            {cartData.length === 0 && (
              <div className='w-full'>
                {navbarCollectionsList.map((item) => (
                  <NavbarCollectionItem key={item?.id} {...item} />
                ))}
              </div>
            )}
          </div>
        </div>
      }
      {/* BAGS */}
      {/* SidePreview */}
    </>
  );
};

export default memo(Header);
