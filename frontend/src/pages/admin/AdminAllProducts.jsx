import { fetchData } from "../../services/api";
import AdminProduct from "./AdminProduct";
import { Link } from "react-router-dom";

const AdminAllProducts = () => {
  const productsData = fetchData;

  return (
    <div className='flex flex-col items-center mt-20'>
      <div className=''>
        <Link to='/admin/dashboard' className='block text-xl underline'>
          Goto Dashboard
        </Link>
        <Link to='/' className='block text-xl underline'>
          Goto Home
        </Link>
        <div className='grid grid-cols-4'>
          <div className='col-span-1'>sidebar</div>
          <div className='flex flex-col col-span-3 border'>
            <div className='sm:rounded-lg relative overflow-x-auto'>
              <table className='rtl:text-right overflow-x-auto text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-white border-b'>
                  <tr className=''>
                    {/* <th scope='col' className='py-3'></th> */}
                    <th scope='col' className='px-6 py-3 text-center'>
                      Product
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Collections
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Size
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Color
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
    </div>
  );
};

export default AdminAllProducts;
