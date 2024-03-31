import LayoutView from "../../../widgets/layout/LayoutView";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { fetchData } from "../../../services/api";
import { formatPrice } from "../../../services/custom";
import { memo, useState } from "react";

const ProductDetail = () => {
  const data = fetchData;
  const params = useParams();
  const { _id } = params;
  const product = data.find((i) => {
    return i._id.toString() === _id;
  });
  const dispatch = useDispatch();
  const [selectSize, setSelectSize] = useState(product?.sizes[0]);
  const [selectColor, setSelectColor] = useState(product?.colors[0].name);

  console.log({ selectColor, selectSize });
  const handleOnAddToBag = () => {
    dispatch(
      addToCart({
        ...product,
        colorSelected: selectColor,
        sizeSelected: selectSize,
      })
    ) & toast.success(`${product?.name} is added to Cart!`);
  };
  return (
    <LayoutView>
      <div className='bg-white'>
        <div className=''>
          {/* Image gallery */}
          <div className='sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 max-w-2xl mx-auto'>
            <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
              <img
                src={product?.imageUrls[0]}
                alt={product?.name}
                draggable={false}
                className='object-cover object-center w-full h-full'
              />
            </div>
            <div className='lg:grid lg:grid-cols-1 lg:gap-y-8 hidden'>
              <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                <img
                  src={product?.imageUrls[1]}
                  alt={product?.name}
                  draggable={false}
                  className='object-cover object-center w-full h-full'
                />
              </div>
              <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                <img
                  src={product?.imageUrls[2]}
                  alt={product?.name}
                  draggable={false}
                  className='object-cover object-center w-full h-full'
                />
              </div>
            </div>
            <div className='aspect-h-4 aspect-w-3 lg:block hidden overflow-hidden rounded-lg'>
              <img
                src={product?.imageUrls[3]}
                alt={product?.name}
                draggable={false}
                className='object-cover object-center w-full h-full'
              />
            </div>
          </div>

          {/* Product info */}
          <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
            <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
              <h1 className=' text-black-3 text-3xl font-bold tracking-tight'>
                Product Infomations
              </h1>
            </div>

            {/* Options */}
            <div className='lg:row-span-3 lg:mt-0 mt-4'>
              <h2 className='sm:text-3xl text-black-2 text-2xl font-bold tracking-tight'>
                {product?.name}
              </h2>
              <p className='font-extralight inline-flex gap-3 mt-1 text-lg text-gray-900'>
                {formatPrice(product?.price)}
                {product?.discountPrice !== 0 &&
                  product?.discountPrice !== null && (
                    <span className='text-neutral-400 line-through'>
                      {formatPrice(product?.discountPrice)}
                    </span>
                  )}
              </p>

              <div className='mt-10'>
                {/* Colors */}
                <div className='flex items-center gap-4'>
                  <h3 className='text-black-2 text-lg font-medium'>Colors</h3>
                  <select
                    className='border'
                    onChange={(e) => setSelectColor(e.target.value)}
                  >
                    {product?.colors.map((color, i) => (
                      <option
                        key={i}
                        // disabled={!color?.inStock}
                        value={color?.name}
                      >
                        {color?.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sizes */}
                <div className='mt-10'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <h3 className='text-black-2 text-lg font-medium'>Size</h3>
                      <select
                        className='border'
                        onChange={(e) => setSelectSize(e.target.value)}
                      >
                        {product?.sizes.map((size, i) => (
                          <option
                            key={i}
                            // disabled={!size.inStock}
                            value={size}
                          >
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                    <a
                      href='/side-guide'
                      className='hover:text-neutral-500 text-neutral-600 text-sm font-medium'
                    >
                      Size guide
                    </a>
                  </div>
                </div>

                <button
                  type='submit'
                  onClick={handleOnAddToBag}
                  className='hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 bg-neutral-600 flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent'
                >
                  Add to bag
                </button>
              </div>
            </div>

            <div className='lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6 py-10'>
              {/* Description and details */}
              <div>
                <h3 className='text-black-2 text-xl font-bold'>Description</h3>

                <div className=' mb-4 space-y-6'>
                  <p className='text-black-2 text-base'>
                    {product?.description}
                  </p>
                </div>
                {/* details */}
                <div>
                  <h3 className='text-black-2 text-xl font-bold'>Details</h3>
                  <ul className='space-y-2 list-disc list-inside'>
                    {product.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast container */}
      <div className='normal-case'>
        <ToastContainer
          position='top-left'
          autoClose={2000}
          limit={10}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
          transition:Bounce
          stacked
        />
      </div>
    </LayoutView>
  );
};

export default memo(ProductDetail);
