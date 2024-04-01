import ProductCard from "../product/ProductCard";
import { fetchData } from "../../../services/api";
import { useState } from "react";
const Products = () => {
  const products = fetchData;
  const [filterList, setFilterList] = useState([]);
  const handleOnChange = (e) => {
    if (!filterList.includes(e.target.name)) {
      setFilterList([...filterList, e.target.name]);
    } else {
      const unCheck = filterList.filter((item) => item !== e.target.name);
      setFilterList(unCheck);
    }
  };

  return (
    <div className='sm:px-6 sm:py-10 lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
      {/* Heading */}
      <h2 className='sm:text-6xl my-6 text-3xl font-extrabold'>PRODUCTS</h2>
      {/* Sidebar / filterbar */}
      <form className='mb-10'>
        <ul className='flex gap-2'>
          <li>
            <label
              className={`${
                filterList.includes("filter-cap") && "text-red-500"
              }`}
              htmlFor='filter-cap'
            >
              <button type='submit'>Cap</button>
            </label>
            <input
              type='checkbox'
              name='filter-cap'
              className='hidden'
              onChange={handleOnChange}
              id='filter-cap'
            />
          </li>
          <li>
            <label
              className={`${
                filterList.includes("filter-bag") && "text-red-500"
              }`}
              htmlFor='filter-bag'
            >
              Bag
            </label>
            <input
              type='checkbox'
              name='filter-bag'
              className='hidden'
              onChange={handleOnChange}
              id='filter-bag'
            />
          </li>
          <li>
            <label
              className={`${
                filterList.includes("filter-hoodie") && "text-red-500"
              }`}
              htmlFor='filter-hoodie'
            >
              Hoodie
            </label>
            <input
              type='checkbox'
              name='filter-hoodie'
              className='hidden'
              onChange={handleOnChange}
              id='filter-hoodie'
            />
          </li>
          <li>
            <label
              className={`${
                filterList.includes("filter-short") && "text-red-500"
              }`}
              htmlFor='filter-short'
            >
              Short
            </label>
            <input
              type='checkbox'
              name='filter-short'
              className='hidden'
              onChange={handleOnChange}
              id='filter-short'
            />
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
