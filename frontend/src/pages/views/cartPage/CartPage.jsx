import { useSelector } from "react-redux";
import { formatPrice } from "../../../services/custom";
import { Link } from "react-router-dom";
import ProductInCart from "../product/ProductInCart";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.cart);
  // bag/cart flow
  const bagsTotal = cartData.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const bagsTotalFormat = formatPrice(bagsTotal);

  return (
    <div className='sm:px-6 h-screen lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
      <div className='lg:block flex flex-col py-4'>
        <div className='lg:py-8 md:flex-row flex flex-col items-center py-4'>
          <h1 className='text-black-3 flex-1 text-6xl font-extrabold text-left'>
            Your Bag
          </h1>
          <Link
            to='/products'
            className='md:text-normal text-sm lg:after:h-[1px] lg:after:bg-black-3 hover:lg:after:w-0 lg:after:transition-all lg:after:duration-300 lg:after:w-full lg:after:block p-4 -m-4 font-semibold tracking-tighter leading-tight underline mb-1 md:mb-0 underline-offset-4 lg:no-underline'
          >
            continue shopping
          </Link>
        </div>
        {/* preview product */}
        {cartData.length > 0 ? (
          <div className='lg:grid-cols-12 grid grid-cols-1'>
            <div className=' flex flex-col w-full col-span-8 border'>
              <div className='sm:rounded-lg relative overflow-x-auto'>
                <table className='rtl:text-right w-full text-sm text-left text-gray-500'>
                  <thead className='text-xs text-gray-700 uppercase bg-white border-b'>
                    <tr className=''>
                      {/* <th scope='col' className='py-3'></th> */}
                      <th scope='col' className='px-6 py-3 text-center'>
                        Product
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Size
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Color
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Quantity
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((item, i) => {
                      return (
                        <ProductInCart
                          isCartPage={true}
                          {...item}
                          key={item?._id + i}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-span-4'>
              {/* preview product */}
              {true ? (
                <>
                  <div className='border-y border-x lg:border-r w-full h-full col-span-1'>
                    {cartData.length !== 0 && (
                      <div className='flex flex-col w-full h-full'>
                        {/* Top Bags Total */}
                        <div className='mt-6 *:flex px-4 *:justify-between flex-1 *:flex-wrap *:mb-4'>
                          <div>
                            <h3 className='w-full pb-4 mb-4 text-2xl font-bold text-center border-b'>
                              Cart Totals
                            </h3>
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
                          className='group hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 mr-4 text-white transition-all bg-black border border-black'
                        >
                          <span className='text-sm font-bold tracking-tight'>
                            Proceed to checkout
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
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div>Not found item</div>
              )}
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <p className='text-2xl'>Not found item in your cart</p> <br />
            <Link
              to='/products'
              className='group/shopall hover:bg-opacity-100 hover:border-black-4 bg-opacity-60 inline-flex items-center justify-center w-full max-w-sm gap-2 px-5 py-4 text-center text-white transition-all bg-black border border-black'
            >
              <span className='w-full text-sm font-bold tracking-tight text-center'>
                shop all
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='group-hover/shopall:rotate-0 w-4 h-4 transition-all -rotate-45'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
