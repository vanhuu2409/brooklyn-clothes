import ProductCard from "../product/ProductCard";
import { fetchData } from "../../../services/api";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProducts,
  updateProducts,
} from "../../../redux/product/productSlice.jsx";

const sortOptions = [
  { name: "Price: Low to High", value: "asc", current: false },
  { name: "Price: High to Low", value: "desc", current: false },
];
const subCategories = [
  { name: "Everyday Essentials", href: "#" },
  { name: "Carefree Classics", href: "#" },
  { name: "Mellow Outfits", href: "#" },
];
const filters = [
  {
    id: "collections",
    name: "Collections",
    options: [
      { value: "tops", label: "Top", checked: false },
      { value: "bottoms", label: "Bottom", checked: false },
      { value: "other", label: "Other", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "hats", label: "Hat", checked: false },
      { value: "bags", label: "Bag", checked: false },
      { value: "t-shirts", label: "T-shirt", checked: false },
      { value: "hoodies", label: "Hoodie", checked: false },
      { value: "sweaters", label: "Sweater", checked: false },
      { value: "jackets", label: "Jacket", checked: false },
      { value: "shorts", label: "Short", checked: false },
      { value: "pants", label: "Pant", checked: false },
      { value: "denims", label: "Denim", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "White", label: "White", checked: false },
      { value: "Black", label: "Black", checked: false },
      { value: "Beige", label: "Beige", checked: false },
      { value: "Blue", label: "Blue", checked: false },
      { value: "Brown", label: "Brown", checked: false },
      { value: "Green", label: "Green", checked: false },
      { value: "Purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS", checked: false },
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
      { value: "XL", label: "XL", checked: false },
      { value: "XXL", label: "XXL", checked: false },
      { value: "OS", label: "OS", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "allPrice", label: "All", checked: false },
      { value: "smallPrice", label: "0 - 1.000.000", checked: false },
      { value: "mediumPrice", label: "1.000.000 - 2.000.000", checked: false },
      { value: "largePrice", label: "Above 2.000.000", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products.products);
  const totalPages = useSelector((state) => state.product.products.totalPages);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const searchParams = new URLSearchParams(location.search);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  useEffect(() => {
    try {
      dispatch(fetchProducts(searchParams.toString()));
    } catch (error) {
      throw new Error(error.message);
    }

    // Clear filters when component mounts
  }, [location.search]);

  const handleFilter = (value, section) => {
    if (searchParams.toString().includes("sort")) {
      searchParams.delete("sort");
    }
    if (searchParams.toString().includes("pageNumber")) {
      searchParams.delete("pageNumber");
    }
    if (searchParams.toString().includes("price")) {
      searchParams.delete("price");
    }
    let filterValue = searchParams.getAll(section);
    const isFilterValue =
      filterValue?.length > 0 && filterValue[0].split(",").includes(value);
    if (isFilterValue) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      if (filterValue?.length === 0) {
        searchParams.delete(section);
      }
    } else {
      filterValue.push(value);
    }
    if (filterValue?.length > 0) {
      searchParams.set(section, filterValue.join(","));
    }
    const query = searchParams.toString();
    // setQueries(query);
    if (!searchParams) {
      dispatch(fetchProducts(""));
    } else {
      dispatch(fetchProducts(query)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          dispatch(updateProducts(result.payload));
          localStorage.setItem("products", JSON.stringify(result.payload));
        }
      });
    }
    navigate({ search: query });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='sm:px-6 sm:py-10 lg:max-w-[110rem] w-full lg:px-8 px-4 mx-auto'>
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

            <li className='text-left select-none'>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <div className='-m-1'>
                  <span
                    // to='#'
                    className='focus:text-gray-900 focus:shadow hover:text-gray-800 p-1 text-sm font-medium text-gray-600 rounded-md'
                    aria-current='page'
                  >
                    {"Products"}
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </nav>
        {/* Heading */}
        <h2 className='sm:text-7xl my-6 text-6xl font-extrabold'>PRODUCTS</h2>
        {/* Sidebar / filterbar */}
        <form name='search-form' onSubmit={handleSubmitForm} className='mb-16'>
          {/* top filter */}
          <ul className='flex flex-wrap *:px-2 '>
            {filters[0].options.map((option, optionIdx) => (
              <li key={option.value} className='flex items-center'>
                <input
                  id={`filter-bar-${filters[0].id}-${optionIdx}`}
                  onChange={() => handleFilter(option.value, filters[0].id)}
                  name={`${filters[0].id}[]`}
                  defaultValue={option.value}
                  type='checkbox'
                  checked={
                    searchParams
                      .get(filters[0].id)
                      ?.split(",")
                      .includes(option.value) || false
                  }
                  // defaultChecked={option.checked}
                  className='focus:ring-neutral-500 peer text-neutral-600 hidden w-4 h-4 border-gray-300 rounded cursor-pointer'
                />
                <label
                  htmlFor={`filter-bar-${filters[0].id}-${optionIdx}`}
                  className='hover:text-black-2 peer-checked:text-black-1 text-black-4 text-2xl font-bold leading-snug tracking-normal transition-colors duration-300 cursor-pointer select-none'
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
          <ul className='flex flex-wrap *:px-2 '>
            {filters[1].options.map((option, optionIdx) => (
              <li key={option.value} className='flex items-center'>
                <input
                  id={`filter-bar-${filters[1].id}-${optionIdx}`}
                  onChange={() => handleFilter(option.value, filters[1].id)}
                  name={`${filters[1].id}[]`}
                  defaultValue={option.value}
                  type='checkbox'
                  checked={
                    searchParams
                      .get(filters[1].id)
                      ?.split(",")
                      .includes(option.value) || false
                  }
                  // defaultChecked={option.checked}
                  className='focus:ring-neutral-500 peer text-neutral-600 hidden w-4 h-4 border-gray-300 rounded cursor-pointer'
                />
                <label
                  htmlFor={`filter-bar-${filters[1].id}-${optionIdx}`}
                  className='hover:text-black-2 peer-checked:text-black-1 text-black-4 text-2xl font-bold leading-snug tracking-normal transition-colors duration-300 cursor-pointer select-none'
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
          {/* bottom filter */}
          <div className='border-y flex items-center w-full mt-10'>
            <div
              onClick={() => setMobileFiltersOpen(true)}
              className='flex items-center gap-2 pr-8 text-sm font-bold cursor-pointer select-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
                />
              </svg>
              Filter
            </div>
            <div className='border-x text-black-4 sm:opacity-100 flex-1 h-full py-6 text-sm font-normal text-center normal-case opacity-0 select-none'>
              Showing {products?.length || 0} of 12 products
            </div>
            {/* Sort by: */}
            <div className='flex items-center pl-8 text-sm font-bold'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='group hover:text-gray-900 inline-flex justify-center text-sm font-medium text-gray-700'>
                    Sort
                    <ChevronDownIcon
                      className='group-hover:text-gray-500 flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white shadow-2xl'>
                    <div className='py-1'>
                      {filters[4].options.map((option, optionIdx) => (
                        <Menu.Item key={option.label}>
                          {({ active }) => (
                            <li
                              key={option.label}
                              className='flex items-center'
                            >
                              <input
                                id={`filter-bar-${option.label}-${optionIdx}`}
                                onChange={() =>
                                  handleFilter(option.value, "price")
                                }
                                name={`${option.value}[]`}
                                defaultValue={option.value}
                                type='checkbox'
                                checked={searchParams.get("price") || false}
                                // defaultChecked={option.checked}
                                className='focus:ring-neutral-500 peer text-neutral-600 hidden w-4 h-4 border-gray-300 rounded cursor-pointer'
                              />
                              <label
                                htmlFor={`filter-bar-${option.label}-${optionIdx}`}
                                className={classNames(
                                  option.checked
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 w-full cursor-pointer py-2 text-sm"
                                )}
                              >
                                Price: {option.value.split("Price")}
                              </label>
                            </li>
                          )}
                        </Menu.Item>
                      ))}
                      {sortOptions.map((option, optionIdx) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <li key={option.name} className='flex items-center'>
                              <input
                                id={`filter-bar-${option.name}-${optionIdx}`}
                                onChange={() =>
                                  handleFilter(option.value, "sort")
                                }
                                name={`${option.name}[]`}
                                defaultValue={option.name}
                                type='checkbox'
                                checked={searchParams.get("sort") || false}
                                // defaultChecked={option.checked}
                                className='focus:ring-neutral-500 peer text-neutral-600 hidden w-4 h-4 border-gray-300 rounded cursor-pointer'
                              />
                              <label
                                htmlFor={`filter-bar-${option.name}-${optionIdx}`}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block w-full cursor-pointer px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </label>
                            </li>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className='text-black-4 sm:hidden flex-1 h-full py-4 text-sm font-normal text-center normal-case border-b select-none'>
            Showing {products?.length || 0} of 12 products
          </div>
        </form>
        {/* filter */}
        <div className='bg-white'>
          <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as='div'
                className='relative z-40'
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter='transition-opacity ease-linear duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition-opacity ease-linear duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 z-40 flex'>
                  <Transition.Child
                    as={Fragment}
                    enter='transition ease-in-out duration-300 transform'
                    enterFrom='-translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition ease-in-out duration-300 transform'
                    leaveFrom='translate-x-0'
                    leaveTo='-translate-x-full'
                  >
                    <Dialog.Panel className='relative flex flex-col w-full h-full max-w-xs py-4 pb-12 mr-auto overflow-y-auto bg-white shadow-xl'>
                      <div className='flex items-center justify-between px-4'>
                        <h2 className='text-3xl font-extrabold text-gray-900'>
                          Filters
                        </h2>
                        <button
                          type='button'
                          className='flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md'
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <span className='sr-only'>Close menu</span>
                          <XMarkIcon className='w-6 h-6' aria-hidden='true' />
                        </button>
                      </div>

                      {/* Filters */}
                      <form className='mt-4 border-t border-gray-200'>
                        <h3 className='sr-only'>Categories</h3>
                        <ul
                          role='list'
                          className='text-black-3 px-2 py-3 text-lg font-bold'
                        >
                          {subCategories.map((category) => (
                            <li key={category.name}>
                              <a
                                href={category.href}
                                className='block px-2 py-3'
                              >
                                {category.name}
                              </a>
                            </li>
                          ))}
                        </ul>

                        {filters.map((section) => (
                          <Disclosure
                            as='div'
                            key={section.id}
                            className='px-4 py-6 border-t border-gray-200'
                          >
                            {({ open }) => (
                              <>
                                <h3 className='flow-root -mx-2 -my-3'>
                                  <Disclosure.Button className='hover:text-gray-500 flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white'>
                                    <span className='font-medium text-gray-900'>
                                      {section.name}
                                    </span>
                                    <span className='flex items-center ml-6'>
                                      {open ? (
                                        <MinusIcon
                                          className='w-5 h-5'
                                          aria-hidden='true'
                                        />
                                      ) : (
                                        <PlusIcon
                                          className='w-5 h-5'
                                          aria-hidden='true'
                                        />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className='pt-6'>
                                  <div className='space-y-6'>
                                    {section.options.map(
                                      (option, optionIdx) => {
                                        return (
                                          <div
                                            key={option.value}
                                            className='flex items-center'
                                          >
                                            <input
                                              id={`filter-mobile-${section.id}-${optionIdx}`}
                                              onChange={() =>
                                                handleFilter(
                                                  option.value,
                                                  section.id
                                                )
                                              }
                                              name={`${section.id}[]`}
                                              defaultValue={option.value}
                                              type='checkbox'
                                              checked={
                                                searchParams
                                                  .get(section.id)
                                                  ?.split(",")
                                                  .includes(option.value) ||
                                                false
                                              }
                                              // defaultChecked={option.checked}
                                              className='focus:ring-neutral-500 text-neutral-600 w-4 h-4 border-gray-300 rounded cursor-pointer'
                                            />
                                            <label
                                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                              className='flex-1 min-w-0 ml-3 text-gray-500 cursor-pointer select-none'
                                            >
                                              {option.label}
                                            </label>
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>

        {/* Products preview */}
        <div className='gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 grid w-full h-full grid-cols-1 cursor-pointer select-none'>
          {products?.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
        <div className='flex items-center justify-center w-full mt-10'>
          {[...Array(totalPages).keys()].map((option, optionIdx) => {
            return (
              <div key={optionIdx} className='flex items-center'>
                <input
                  id={`filter-pageNumber-${optionIdx}`}
                  onChange={() => handleFilter(option + 1, "pageNumber")}
                  name={`pageNumber`}
                  defaultValue={option}
                  type='radio'
                  disabled={+searchParams.get("pageNumber") === option + 1}
                  checked={
                    searchParams
                      .get("pageNumber")
                      ?.split(",")
                      .includes(option) || false
                  }
                  // defaultChecked={option.checked}
                  className='focus:ring-neutral-500 peer text-neutral-600 w-4 h-4 border-gray-300 rounded cursor-pointer sr-only'
                />
                <label
                  htmlFor={`filter-pageNumber-${optionIdx}`}
                  className='bg-neutral-700 peer-disabled:bg-opacity-60 peer-disabled:cursor-default peer-disabled:hover:opacity-100 size-10 hover:opacity-80 flex items-center justify-center text-gray-100 border border-white cursor-pointer'
                >
                  {option + 1}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
