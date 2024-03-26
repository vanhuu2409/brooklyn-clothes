import React, { useEffect, useState } from "react";
import AdminProduct from "./AdminProduct";
import { Link } from "react-router-dom";

const AdminAllProducts = () => {
  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  };
  console.log(productsData);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <div className=''>
        <Link to='/admin/dashboard' className='text-xl underline'>
          all products
        </Link>
        <div className=' flex flex-col w-full border'>
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
                {productsData.map((item, i) => (
                  <AdminProduct key={i} {...item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllProducts;
