import ProductCard from "../product/ProductCard";
import { fetchData } from "../../../services/api";
const Products = () => {
  const products = fetchData;

  return (
    <div className='sm:px-6 sm:py-10 lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
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
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
