import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const fileIputRef = useRef();
  const [images, setImages] = useState(null);
  const defaultProductDetail = {
    name: "",
    price: "",
    collections: "",
    category: "",
    color: "",
    image: "",
    size: "",
    description: "",
    details: "",
  };
  const [productDetail, setProductDetail] = useState(defaultProductDetail);

  const handleImages = (e) => {
    console.log(e.target.files);
    setImages(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // if (name === "price") value = parseInt(value);
    setProductDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Form submitted:", productDetail);
    console.log(`images; ${images}`);

    let product = productDetail;
    let formData = new FormData();
    formData.append("products", images);
    console.log(formData);
    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          product.image = data.image_url;
          console.table(product, data, productDetail);
          // Handle success (e.g., update product image URL)
          console.log("File uploaded successfully:", data.image_url);
          await fetch("http://localhost:4000/addproduct", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                alert(data.name);
                fileIputRef.current.value = "";
                setProductDetail(defaultProductDetail);
              } else alert("File uploaded failed:", data.image);
            });
        } else {
          // Handle server response indicating failure
          console.error("File upload failed:", data.error);
        }
      } else {
        // Handle non-200 response (e.g., server error)
        console.error("Server error:", response.status, response.statusText);
      }
    } catch (error) {
      // Handle fetch error (e.g., network issue)
      console.error("Fetch error:", error.message);
    }
  };
  return (
    <div>
      <h1 className='text-7xl flex flex-col font-extrabold tracking-wide text-center'>
        Dashboard
        <Link to='/admin/allproducts' className='text-xl underline'>
          all products
        </Link>
      </h1>
      <section className=' bg-white'>
        <div className='lg:py-16 max-w-2xl px-4 py-8 mx-auto'>
          <h2 className='dark:text-white mb-4 text-xl font-bold text-gray-900'>
            Add a new product
          </h2>
          <form action='/upload/images' onSubmit={handleSubmit}>
            <div className='sm:grid-cols-2 sm:gap-6 grid gap-4'>
              {/* name */}
              <div className='sm:col-span-2'>
                <label
                  htmlFor='name'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Product Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={productDetail.name}
                  onChange={handleInputChange}
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='Product name'
                  required={true}
                />
              </div>
              {/* Brand */}
              {/* <div className='w-full'>
                <label
                  htmlFor='brand'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Brand
                </label>
                <input
                  type='text'
                  name='brand'
                  id='brand'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='Brooklyn Lifestyle'
                  required={true}
                />
              </div> */}
              {/* Price */}
              <div className='w-full'>
                <label
                  htmlFor='price'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Price
                </label>
                <input
                  value={productDetail.price}
                  onChange={handleInputChange}
                  type='number'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='1000000 ₫'
                  required={true}
                />
              </div>
              {/* images */}
              <div>
                <label
                  htmlFor='image-input'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Images
                </label>
                <input
                  type='file'
                  accept='image/png, image/jpeg, image/webp'
                  ref={fileIputRef}
                  // multiple={true}
                  // value={productDetail.image}
                  onChange={handleImages}
                  name='image'
                  id='image-input'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  required={true}
                />
                <p className='dark:text-gray-300 mt-1 text-sm text-gray-500'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              {/* collections */}
              <div>
                <label
                  htmlFor='collections'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Collections
                </label>
                <select
                  id='collections'
                  value={productDetail.collections}
                  onChange={handleInputChange}
                  required={true}
                  name='collections'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                >
                  <option value=''>Select Collections</option>
                  <option value='tops'>Tops</option>
                  <option value='bottoms'>Bottoms</option>
                  <option value='headwears'>Headwears</option>
                </select>
              </div>
              {/* category */}
              <div>
                <label
                  htmlFor='category'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Category
                </label>
                <select
                  id='category'
                  value={productDetail.category}
                  onChange={handleInputChange}
                  required={true}
                  name='category'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                >
                  <option value=''>Select Category</option>
                  <option value='shorts'>Shorts</option>
                  <option value='hoodies'>Hoodies</option>
                  <option value='t-shirts'>T-Shirts</option>
                </select>
              </div>
              {/* Colors */}
              <div>
                <label
                  htmlFor='color'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Color
                </label>
                <input
                  type='text'
                  name='color'
                  value={productDetail.color}
                  onChange={handleInputChange}
                  id='color'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='White, Black, Red,...'
                  required={true}
                />
              </div>
              {/* Sizes */}
              <div>
                <label
                  htmlFor='size'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Size
                </label>
                <input
                  type='text'
                  name='size'
                  value={productDetail.size}
                  onChange={handleInputChange}
                  id='size'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='M, XL,...'
                  required={true}
                />
              </div>

              {/* Description */}
              <div className='sm:col-span-2'>
                <label
                  htmlFor='description'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Description
                </label>
                <textarea
                  required={true}
                  name='description'
                  value={productDetail.description}
                  onChange={handleInputChange}
                  id='description'
                  rows='4'
                  className='block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 border border-gray-300 focus:ring-black-4 focus:border-black-4 '
                  placeholder='Your description here'
                ></textarea>
              </div>
              {/* Details */}
              <div className='sm:col-span-2'>
                <label
                  htmlFor='details'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Details
                </label>
                <textarea
                  name='details'
                  required={true}
                  value={productDetail.details}
                  onChange={handleInputChange}
                  id='details'
                  rows='4'
                  className='block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 border border-gray-300 focus:ring-black-4 focus:border-black-4 '
                  placeholder='Your details here'
                ></textarea>
              </div>
            </div>
            {/* submit form */}
            <button
              type='submit'
              className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-xl font-medium text-center text-white bg-black-2 focus:ring-4 focus:ring-black-4 hover:bg-black-3 w-full justify-center'
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
