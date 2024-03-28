import { ProductCard } from "../product/ProductCard";
import { fetchData } from "../../../services/api";
import { Link } from "react-router-dom";
const Products = () => {
  const products = fetchData;
  return (
    <div className='sm:px-6 sm:py-10 lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
      {/* Breadcrumb */}

      <nav className='flex items-center *:normal-case' aria-label='Breadcrumb'>
        <ol className='md:space-x-2 rtl:space-x-reverse inline-flex items-center space-x-1'>
          <li className='inline-flex items-center'>
            <Link
              to='/'
              className='hover:text-black-2 text-black-3 inline-flex items-center text-base font-medium'
            >
              <svg
                className='w-3 h-3 me-2.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                className='rtl:rotate-180 text-black-4 size-3 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <Link
                to='#'
                className='ms-1 hover:text-black-2 md:ms-2 text-black-3 text-base font-medium'
              >
                Projects
              </Link>
            </div>
          </li>
        </ol>
      </nav>

      {/* Heading */}
      <h2 className='sm:text-6xl my-6 text-3xl font-extrabold'>PRODUCTS</h2>
      {/* Sidebar / filterbar */}
      <form className='mb-10'>
        <ul>
          <li>
            <label htmlFor='filter-cap'>Cap</label>
            <input type='checkbox' name='' className='hidden' id='filter-cap' />
          </li>
        </ul>
      </form>
      {/* Products preview */}
      <div className='gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 grid w-full h-full grid-cols-1'>
        {/* <!-- Your content --> */}
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
