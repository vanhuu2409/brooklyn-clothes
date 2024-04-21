import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchAddCartFailure,
  fetchAddCartStart,
  fetchAddCartSuccess,
} from "../../../redux/cart/cartSlice";
import { toast } from "react-toastify";
import { debounce, formatPrice } from "../../../services/custom";
import { memo, useEffect, useState } from "react";
import Rating from "react-rating";
import axios from "axios";
import {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSuccess,
} from "../../../redux/product/productSlice.jsx";

const ProductDetail = () => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const breadcrumbData = location.pathname.split("/").splice(1, 3);
  const product = useSelector((state) => state.product.productDetail);
  const cartLength = useSelector((state) => state.cart.cart).length;

  const [selectSize, setSelectSize] = useState(product?.sizes[0]);
  const [selectColor, setSelectColor] = useState(product?.colors[0].name);
  const [selectPreviewImg, setSelectPreviewImg] = useState(
    product?.imageUrls[0]
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch(fetchProductStart());
        const response = await axios.get(`/api/product/getall/${params._id}`);
        dispatch(fetchProductSuccess(response.data));
        setSelectSize(response.data.sizes[0]);
        setSelectColor(response.data.colors[0].name);
        setSelectPreviewImg(response.data.imageUrls[0]);
      } catch (error) {
        dispatch(fetchProductFailure(error.message));
        throw new Error(error.message);
      }
    };
    fetchProduct();
  }, [params]);

  const handleOnAddToBag = debounce(async () => {
    try {
      const productData = {
        productId: product?._id,
        sizeSelected: selectSize,
        colorSelected: selectColor,
      };
      const response = await axios.put(`/api/cart/add`, productData);
      window.location.reload();
    } catch (error) {
      throw new Error(error.message);
    }
    dispatch(
      addToCart({
        ...product,
        colorSelected: selectColor,
        sizeSelected: selectSize,
        cartId: cartLength + 1,
      })
    ) & toast.success(`${product?.name} is added to Cart!`);
  }, 300);
  return (
    <section className='sm:py-16 py-12'>
      <div className='container px-4 mx-auto'>
        <nav className='flex'>
          <ol role='list' className='flex items-center'>
            <li className='text-left'>
              <div className='-m-1'>
                <Link
                  to='/'
                  className='focus:text-gray-900 focus:shadow hover:text-gray-800 p-1 text-sm font-medium text-gray-600 rounded-md'
                >
                  {" "}
                  Home{" "}
                </Link>
              </div>
            </li>

            <li className='text-left'>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <div className='-m-1'>
                  <Link
                    to={`/products?collections=${breadcrumbData[1]}`}
                    className='focus:text-gray-900 focus:shadow hover:text-gray-800 p-1 text-sm font-medium text-gray-600 rounded-md'
                  >
                    {" "}
                    {breadcrumbData[1]}{" "}
                  </Link>
                </div>
              </div>
            </li>
            <li className='text-left'>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <div className='-m-1'>
                  <Link
                    to={`/products?collections=${breadcrumbData[1]}&category=${breadcrumbData[2]}`}
                    className='focus:text-gray-900 focus:shadow hover:text-gray-800 p-1 text-sm font-medium text-gray-600 rounded-md'
                  >
                    {" "}
                    {breadcrumbData[2]}{" "}
                  </Link>
                </div>
              </div>
            </li>

            <li className='text-left select-none'>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <div className='-m-1'>
                  <span
                    // to='#'
                    className='focus:text-gray-900 focus:shadow hover:text-gray-800 p-1 text-sm font-medium text-gray-600 rounded-md'
                    aria-current='page'
                  >
                    {" "}
                    {product?.name}{" "}
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className='lg:col-gap-12 xl:col-gap-16 lg:mt-12 lg:grid-cols-5 lg:gap-16 grid grid-cols-1 gap-12 mt-8'>
          <div className='lg:col-span-3 lg:row-end-1'>
            <div className='lg:flex lg:items-start'>
              <div className='lg:order-2 lg:ml-5'>
                <div className='max-w-xl overflow-hidden rounded-lg'>
                  <img
                    className='object-cover w-full h-full max-w-full'
                    src={selectPreviewImg || product?.imageUrls[0]}
                    alt={product?.name}
                    draggable={false}
                  />
                </div>
              </div>

              <div className='lg:order-1 lg:w-32 lg:flex-shrink-0 w-full mt-2'>
                <div className='lg:flex-col flex flex-row items-start'>
                  {product?.imageUrls.map((url, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectPreviewImg(url)}
                        type='button'
                        className={`flex-0 aspect-square h-20 mb-3 overflow-hidden text-center border-2 rounded-lg ${
                          url === selectPreviewImg
                            ? "border-gray-900 "
                            : "border-transparent "
                        } `}
                      >
                        <img
                          className='object-cover w-full h-full'
                          src={url}
                          alt={product?.name}
                          draggable={false}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
            <h1 className='sm: sm:text-3xl text-2xl font-bold text-gray-900'>
              {product?.name}
            </h1>

            {/* star group */}
            <div className='flex mt-5'>
              <Rating
                emptySymbol={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='block w-4 h-4 text-yellow-500 align-middle'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>
                }
                placeholderRating={3.5}
                placeholderSymbol={
                  <svg
                    className='block w-4 h-4 text-yellow-500 align-middle'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      className=''
                    ></path>
                  </svg>
                }
                fullSymbol={
                  <svg
                    className='block w-4 h-4 text-yellow-500 align-middle'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                      className=''
                    ></path>
                  </svg>
                }
                start={0}
                stop={5}
                step={1}
                fractions={1}
              />
              <p className='ml-2 text-sm font-medium text-gray-500'>
                1,209 Reviews
              </p>
            </div>

            {/* star group */}

            <h2 className='mt-8 text-base text-gray-900'>Choose Color</h2>
            <div className='flex flex-wrap items-center gap-1 mt-3 select-none'>
              {product?.colors.map((color, i) => {
                {
                  /* setSelectColor(product.colors[0].name); */
                }
                return (
                  <div className='relative' key={i}>
                    <input
                      type='radio'
                      name='color'
                      // disabled={true}
                      value={color?.name}
                      id={color?.name + i}
                      onChange={() => setSelectColor(color?.name)}
                      className='peer sr-only'
                      defaultChecked={color?.name === product.colors[0].name}
                    />
                    <p className='peer-checked:bg-neutral-300 peer-disabled:bg-red-300 peer-disabled:text-white peer-checked:text-neutral-500 border-neutral-600 px-6 py-2 font-bold border rounded-lg'>
                      {color?.name}
                    </p>
                    <label
                      htmlFor={color?.name + i}
                      className='peer-disabled:cursor-not-allowed absolute inset-0 cursor-pointer'
                    ></label>
                  </div>
                );
              })}
            </div>

            <h2 className='mt-8 text-base text-gray-900'>Choose Size</h2>
            <div className='flex flex-wrap items-center gap-1 mt-3 select-none'>
              {product?.sizes.map((size, i) => {
                {
                  /* setSelectSize(product.sizes[0]); */
                }
                return (
                  <div className='relative' key={i}>
                    <input
                      type='radio'
                      name='size'
                      // disabled={true}
                      value={size}
                      id={size + i}
                      onChange={() => setSelectSize(size)}
                      className='peer sr-only'
                      defaultChecked={size === product.sizes[0]}
                    />
                    <p className='peer-checked:bg-neutral-300 peer-disabled:bg-red-300 peer-disabled:text-white peer-checked:text-neutral-500 border-neutral-600 px-6 py-2 font-bold border rounded-lg'>
                      {size}
                    </p>
                    <label
                      htmlFor={size + i}
                      className='peer-disabled:cursor-not-allowed absolute inset-0 cursor-pointer'
                    ></label>
                  </div>
                );
              })}
            </div>

            <div className='sm:flex-row sm:space-y-0 flex flex-col flex-wrap items-center justify-between gap-4 py-4 mt-10 space-y-4 border-t border-b'>
              <div className='flex flex-wrap items-end gap-2'>
                <h1 className='text-3xl font-bold'>
                  {" "}
                  {formatPrice(product?.price)}
                </h1>

                {product?.discountPrice !== 0 &&
                  product?.discountPrice !== null && (
                    <span className='text-black-3 text-base line-through'>
                      {" "}
                      {formatPrice(product?.discountPrice)}
                    </span>
                  )}
              </div>

              <button
                type='button'
                onClick={handleOnAddToBag}
                className='bg-none focus:shadow hover:bg-gray-800 max-h-fit max-w-fit inline-flex items-center justify-center px-12 py-3 text-base font-bold text-center text-white transition-all duration-200 ease-in-out bg-gray-900 border-2 border-transparent rounded-md'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='shrink-0 w-5 h-5 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                  />
                </svg>
                Add to Bag
              </button>
            </div>

            <ul className='mt-8 space-y-2'>
              <li className='flex items-center text-sm font-medium text-left text-gray-600'>
                <svg
                  className='block w-5 h-5 mr-2 text-gray-500 align-middle'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    className=''
                  ></path>
                </svg>
                Free shipping worldwide
              </li>

              <li className='flex items-center text-sm font-medium text-left text-gray-600'>
                <svg
                  className='block w-5 h-5 mr-2 text-gray-500 align-middle'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                    className=''
                  ></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div className='lg:col-span-3'>
            <div className='border-b border-gray-300'>
              <div className='flex gap-4'>
                <button className='hover:border-gray-400 hover:text-gray-800 py-4 text-sm font-medium text-gray-900 border-b-2 border-gray-900'>
                  {" "}
                  Description{" "}
                </button>

                <a
                  href='#reviews'
                  title=''
                  className='inline-flex items-center py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent'
                >
                  Reviews
                  <span className='block px-2 py-px ml-2 text-xs font-bold text-gray-100 bg-gray-500 rounded-full'>
                    {" "}
                    1,209{" "}
                  </span>
                </a>
              </div>
            </div>

            <div className='sm:mt-8 flow-root mt-6 space-y-6'>
              {/* description */}
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold'>Description</h1>
                <p className='text-black-2 text-base normal-case'>
                  {product?.description}
                </p>
              </div>
              {/* details */}
              <div className='space-y-2'>
                <h3 className='text-black-2 text-3xl font-bold'>Details</h3>
                <ul className='space-y-1 list-disc list-inside'>
                  {product?.details.map((item, i) => (
                    <li className='normal-case' key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* User Rating Preview */}
        <div id='reviews' className='mt-12'>
          <ul className=''>
            <li className='px-4 py-8 m-2 text-left border'>
              <div className='flex items-start'>
                <img
                  className='flex-shrink-0 block w-10 h-10 max-w-full align-middle border rounded-full'
                  src={product?.imageUrls[0]}
                  alt=''
                />

                <div className='ml-6'>
                  <Rating
                    initialRating={3}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='block w-4 h-4 text-yellow-500 align-middle'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        className='block w-4 h-4 text-yellow-500 align-middle'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                          className=''
                        ></path>
                      </svg>
                    }
                    start={0}
                    stop={5}
                  />
                  <p className='mt-5 text-base text-gray-900'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro blanditiis sapiente ab dolores, ad dignissimos
                    perspiciatis.
                  </p>
                  <p className='mt-5 text-sm font-bold text-gray-900'>
                    John Lester
                  </p>
                  <p className='mt-1 text-sm text-gray-600'>March 01, 2022</p>
                </div>
              </div>
            </li>
            <li className='px-4 py-8 m-2 text-left border'>
              <div className='flex items-start'>
                <img
                  className='flex-shrink-0 block w-10 h-10 max-w-full align-middle border rounded-full'
                  src={product?.imageUrls[0]}
                  alt=''
                />

                <div className='ml-6'>
                  <Rating
                    initialRating={3}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='block w-4 h-4 text-yellow-500 align-middle'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        className='block w-4 h-4 text-yellow-500 align-middle'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                          className=''
                        ></path>
                      </svg>
                    }
                    start={0}
                    stop={5}
                  />
                  <p className='mt-5 text-base text-gray-900'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro blanditiis sapiente ab dolores, ad dignissimos
                    perspiciatis.
                  </p>
                  <p className='mt-5 text-sm font-bold text-gray-900'>
                    John Lester
                  </p>
                  <p className='mt-1 text-sm text-gray-600'>March 01, 2022</p>
                </div>
              </div>
            </li>
            <li className='px-4 py-8 m-2 text-left border'>
              <div className='flex items-start'>
                <img
                  className='flex-shrink-0 block w-10 h-10 max-w-full align-middle border rounded-full'
                  src={product?.imageUrls[0]}
                  alt=''
                />

                <div className='ml-6'>
                  <Rating
                    initialRating={3}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='block w-4 h-4 text-yellow-500 align-middle'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        className='block w-4 h-4 text-yellow-500 align-middle'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                          className=''
                        ></path>
                      </svg>
                    }
                    start={0}
                    stop={5}
                  />
                  <p className='mt-5 text-base text-gray-900'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro blanditiis sapiente ab dolores, ad dignissimos
                    perspiciatis.
                  </p>
                  <p className='mt-5 text-sm font-bold text-gray-900'>
                    John Lester
                  </p>
                  <p className='mt-1 text-sm text-gray-600'>March 01, 2022</p>
                </div>
              </div>
            </li>
            <li className='px-4 py-8 m-2 text-left border'>
              <div className='flex items-start'>
                <img
                  className='flex-shrink-0 block w-10 h-10 max-w-full align-middle border rounded-full'
                  src={product?.imageUrls[0]}
                  alt=''
                />

                <div className='ml-6'>
                  <Rating
                    initialRating={3}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='block w-4 h-4 text-yellow-500 align-middle'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        className='block w-4 h-4 text-yellow-500 align-middle'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                          className=''
                        ></path>
                      </svg>
                    }
                    start={0}
                    stop={5}
                  />
                  <p className='mt-5 text-base text-gray-900'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro blanditiis sapiente ab dolores, ad dignissimos
                    perspiciatis.
                  </p>
                  <p className='mt-5 text-sm font-bold text-gray-900'>
                    John Lester
                  </p>
                  <p className='mt-1 text-sm text-gray-600'>March 01, 2022</p>
                </div>
              </div>
            </li>
            <li className='px-20 py-8 m-2 text-left border'>
              <div className='w-full mx-auto'>
                <div className='flex flex-col w-full'>
                  <div className='sm:flex-row flex flex-col items-center justify-center'>
                    <h1 className='text-black-2 max-w-sm text-3xl font-bold'>
                      What people think <br />
                      about this product
                    </h1>
                    <div className='sm:my-0 sm:ml-auto flex flex-col items-center justify-center px-4 py-2 my-4 bg-white'>
                      <div className='text-black-2 flex items-center h-16 text-2xl font-bold'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-10 h-10 text-yellow-400'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                        4.7
                      </div>
                      <p className='text-sm text-gray-500'>
                        Average User Rating
                      </p>
                    </div>
                  </div>
                  <div className='text-gray-700'>
                    <p className='font-medium'>Reviews</p>
                    <ul className='mt-2 mb-6 space-y-2'>
                      <li className='flex items-center text-sm font-medium'>
                        <span className='w-3'>5</span>
                        <span className='mr-4 text-yellow-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                        <div className='w-96 h-2 mr-4 overflow-hidden bg-gray-300 rounded-full'>
                          <div className='w-10/12 h-full bg-yellow-400'></div>
                        </div>
                        <span className='w-3'>56</span>
                      </li>
                      <li className='flex items-center text-sm font-medium'>
                        <span className='w-3'>4</span>
                        <span className='mr-4 text-yellow-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                        <div className='w-96 h-2 mr-4 overflow-hidden bg-gray-300 rounded-full'>
                          <div className='w-8/12 h-full bg-yellow-400'></div>
                        </div>
                        <span className='w-3'>12</span>
                      </li>
                      <li className='flex items-center text-sm font-medium'>
                        <span className='w-3'>3</span>
                        <span className='mr-4 text-yellow-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                        <div className='w-96 h-2 mr-4 overflow-hidden bg-gray-300 rounded-full'>
                          <div className='w-1/12 h-full bg-yellow-400'></div>
                        </div>
                        <span className='w-3'>4</span>
                      </li>
                      <li className='flex items-center text-sm font-medium'>
                        <span className='w-3'>2</span>
                        <span className='mr-4 text-yellow-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                        <div className='w-96 h-2 mr-4 overflow-hidden bg-gray-300 rounded-full'>
                          <div className='w-0 h-full bg-yellow-400'></div>
                        </div>
                        <span className='w-3'>0</span>
                      </li>
                      <li className='flex items-center text-sm font-medium'>
                        <span className='w-3'>1</span>
                        <span className='mr-4 text-yellow-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                        <div className='w-96 h-2 mr-4 overflow-hidden bg-gray-300 rounded-full'>
                          <div className='w-1/12 h-full bg-yellow-400'></div>
                        </div>
                        <span className='w-3'>5</span>
                      </li>
                    </ul>
                  </div>
                  <button className='w-36 bg-black-2 py-3 font-medium text-white rounded-full'>
                    Write a review
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(ProductDetail);
