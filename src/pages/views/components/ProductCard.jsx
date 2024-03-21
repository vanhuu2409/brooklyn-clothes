import { Link } from "react-router-dom";

export function ProductCard(props) {
  return (
    <Link key={props?.id} to={props?.href} className='group'>
      <div className=' relative w-full overflow-hidden bg-gray-200'>
        <img
          src={props?.imageSrc}
          alt={props?.imageAlt}
          className='group-hover:opacity-75 group-hover:scale-125 object-cover object-center w-full h-full transition-transform duration-500'
        />
        <button
          to='/'
          className='group/shopall group-hover:translate-y-0 hover:bg-opacity-100 hover:border bg-opacity-60 absolute inset-x-0 bottom-0 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-full bg-black'
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
      <h4 className=' text-neutral-300 mt-4 font-normal tracking-widest text-[.6rem]'>
        BROOKLYN lifestyle
      </h4>
      <h3 className='mt-2 text-lg text-gray-700'>{props?.name}</h3>
      <p className='font-extralight inline-flex gap-2 mt-1 text-lg text-gray-900'>
        {props?.price}
        <span className='text-neutral-400 line-through'>
          {props?.salePrice}
        </span>
      </p>
    </Link>
  );
}
