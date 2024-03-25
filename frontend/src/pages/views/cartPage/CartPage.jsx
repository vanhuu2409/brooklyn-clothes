import { useSelector } from "react-redux";
import LayoutView from "../components/LayoutView";
import { Link } from "react-router-dom";
import ProductInCart from "../../../components/ProductInCart";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.cart);
  // bag/cart flow
  const bagsCount = cartData.length;
  // const bagsTotal = cartData;

  return (
    <LayoutView>
      <div className='lg:block flex flex-col'>
        <div className='flex'>
          <h1 className='text-black-3 flex-1 text-6xl font-extrabold text-left'>
            Your Bag
          </h1>
          <Link
            to='/products'
            className='text-normal lg:after:h-[1px] lg:after:bg-black-3 hover:lg:after:w-0 lg:after:transition-all lg:after:duration-300 lg:after:w-full lg:after:block p-4 -m-4 font-semibold tracking-tighter leading-tight underline underline-offset-4 lg:no-underline'
          >
            continue shopping
          </Link>
        </div>
        <div className='gap-x-2 lg:grid-cols-4 grid grid-cols-1'>
          {/* preview product */}
          {bagsCount > 0 ? (
            <>
              <div className='border-x flex flex-col w-full col-span-3 border-t'>
                {cartData.map((item) => {
                  return <ProductInCart {...item} key={item?.id} />;
                })}
              </div>
              <div className='col-span-1'>Checkout</div>
            </>
          ) : (
            <div>Not found item</div>
          )}
        </div>
      </div>
    </LayoutView>
  );
};

export default CartPage;
