import { fetchData } from "../../../services/api";
import LayoutView from "../../../_widgets/layout/LayoutView";
import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";
import { RandomProducts } from "../../../services/custom";
const Popular = () => {
  const products = RandomProducts(fetchData, 4);
  return (
    <div className='bg-white'>
      <LayoutView>
        <div className='pb-8'>
          <p className='text-black-4 mt-4 font-normal tracking-widest text-[.8rem] sm:text-[1rem]'>
            BEST SELLERS
          </p>
          <div className=' lg:justify-between lg:flex-row lg:items-center flex flex-col gap-2'>
            <h2 className='sm:text-5xl text-3xl font-extrabold leading-snug'>
              COMFORT EVERY DAY
            </h2>
            <Link
              to='/products'
              className='text-normal lg:after:h-[1px] lg:after:bg-black-3 hover:lg:after:w-0 lg:after:transition-all lg:after:duration-300 lg:after:w-[80%] lg:after:ml-auto lg:after:block p-4 -m-4 font-semibold tracking-tighter leading-tight underline underline-offset-4 lg:no-underline'
            >
              SHOP BEST SELLERS
            </Link>
          </div>
        </div>

        <div className='gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 grid grid-cols-1'>
          {products.map((product, i) => (
            <ProductCard {...product} key={i} />
          ))}
        </div>
      </LayoutView>
    </div>
  );
};

export default Popular;
