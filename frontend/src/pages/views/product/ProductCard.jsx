import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";

export function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div key={props?.id} className='group flex flex-col w-full'>
      <div className=' relative flex-1 w-full overflow-hidden bg-gray-200'>
        <Link className='' to={`/products/${props?.id}`}>
          <img
            src={props?.imageSrc}
            alt={props?.imageAlt}
            className='group-hover:opacity-75 group-hover:scale-125 object-cover object-center w-full h-full transition-transform duration-500'
          />
        </Link>
        <div className='top-4 left-4 absolute flex flex-col gap-1'>
          {props?.colors?.map((color, i) => (
            <div
              key={(color.class, i)}
              className={`${color?.class} size-6 border border-black-4`}
            >
              {/* {color?.name} */}
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            dispatch(addToCart(props)) &
            toast.success(`${props?.name} is added to Cart!`)
          }
          to='/'
          className='group/shopall group-hover:translate-y-0 hover:bg-opacity-100 hover:border bg-opacity-60 sm:translate-y-full absolute inset-x-0 bottom-[1px] inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black'
        >
          <span className=' text-sm font-bold tracking-tight'>add to cart</span>
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
        </button>
        {/* product status */}
        <div className='top-4 px-2 group-hover:-translate-y-[250%] translate-y-0 transition-transform overflow-hidden py-1 leading-tight bg-black text-white font-normal tracking-widest text-[.4rem] capitalize right-4 absolute *:drop-shadow-sm'>
          {props?.status}
        </div>
      </div>
      <div>
        <h4 className=' text-neutral-300 mt-4 font-normal tracking-widest text-[.6rem]'>
          BROOKLYN lifestyle
        </h4>
        <Link to={`/products/${props?.id}`}>
          <h3 className='mt-2 text-lg text-gray-700'>{props?.name}</h3>
          <p className='font-extralight inline-flex gap-2 mt-1 text-lg text-gray-900'>
            {props?.price}
            <span className='text-neutral-400 line-through'>
              {props?.salePrice}
            </span>
          </p>
        </Link>
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
    </div>
  );
}