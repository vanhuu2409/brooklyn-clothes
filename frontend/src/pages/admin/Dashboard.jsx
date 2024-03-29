import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

const Dashboard = () => {
  const fileIputRef = useRef();
  const [images, setImages] = useState([]);
  const [imagesUploading, setImagesUploading] = useState(false);
  const [imagesUploadErr, setImagesUploadErr] = useState(null);
  console.log(images);
  const defaultProductDetail = {
    name: "",
    price: "",
    discountPrice: "",
    category: "",
    collections: "",
    description: "",
    details: "",
    imageUrls: [],
    sizes: [
      {
        name: "XL",
        inStock: true,
      },
    ],
    colors: [
      {
        name: "White",
        class: "#fff",
        inStock: true,
      },
    ],
    available: true,
  };
  const [productDetail, setProductDetail] = useState({ imageUrls: [] });
  console.log(productDetail);

  // images handle
  const handleImages = (e) => {
    setImages(e.target.files);
    setImagesUploadErr(null);
  };
  const handleImagesSubmit = () => {
    if (
      images.length > 0 &&
      images.length + productDetail.imageUrls.length <= 4
    ) {
      setImagesUploadErr(false);
      setImagesUploading(true);
      const promises = [];
      for (let i = 0; i < images.length; i++) {
        promises.push(storeImages(images[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setProductDetail({
            ...productDetail,
            imageUrls: productDetail.imageUrls.concat(urls),
          });
          setImagesUploadErr(false);
          setImagesUploading(false);
        })
        .catch((err) => {
          setImagesUploadErr("Image upload failed (2MB max per image)");
          setImagesUploading(false);
        });
    } else {
      setImagesUploadErr("You can only upload 4 images per product");
      setImagesUploading(false);
    }
  };

  const storeImages = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Uploading ${progress}% done!`);
        },
        (err) => {
          reject(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
            resolve(downloadURL)
          );
        }
      );
    });
  };

  const handleRemoveImage = (i) => {
    const newUrls = productDetail.imageUrls.filter((_, index) => index !== i);
    setProductDetail({ ...productDetail, imageUrls: newUrls });
  };

  // product detail
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
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
                  maxLength={62}
                  minLength={10}
                  value={productDetail.name}
                  onChange={handleInputChange}
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='Product name'
                  required={true}
                />
              </div>
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
              {/* Discount Price */}
              <div className='w-full'>
                <label
                  htmlFor='discountPrice'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Discount Price
                </label>
                <input
                  value={productDetail.discountPrice}
                  onChange={handleInputChange}
                  type='number'
                  name='discountPrice'
                  id='discountPrice'
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
                  multiple={true}
                  // value={productDetail.image}
                  onChange={handleImages}
                  name='image'
                  id='image-input'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  required={true}
                />
                <p className='dark:text-gray-300 mt-1 text-sm text-gray-500'>
                  The first images will be cover (max 4)
                </p>
              </div>
              {/*  Upload Images Button */}
              <div className='flex flex-col justify-center'>
                <div className='flex items-center'>
                  <button
                    onClick={handleImagesSubmit}
                    type='button'
                    disabled={imagesUploading}
                    className='h-fit w-fit hover:opacity-80 px-4 py-3 font-bold text-white bg-green-800 border'
                  >
                    {imagesUploading ? "Uploading..." : "Upload Images"}
                  </button>
                </div>
                {imagesUploadErr && (
                  <p className='dark:text-red-300 mt-1 text-sm text-red-500'>
                    {imagesUploadErr && imagesUploadErr}
                  </p>
                )}
              </div>
              {/* preview image upload */}
              <div className='flex gap-2'>
                {productDetail.imageUrls &&
                  productDetail.imageUrls.map((imageUrl, i) => {
                    return (
                      <div
                        key={i}
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => handleRemoveImage(i)}
                      >
                        <img
                          src={imageUrl}
                          className='size-16 max-w-full max-h-full border'
                          alt='Delete Product Image'
                        />
                      </div>
                    );
                  })}
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
                  placeholder='White #fff, Black #000, ...'
                  required={true}
                />
              </div>
              {/* Sizes */}
              <div>
                <label
                  htmlFor='sizes'
                  className='dark:text-white block mb-2 text-sm font-medium text-gray-900'
                >
                  Sizes
                </label>
                <input
                  type='text'
                  name='sizes'
                  value={productDetail.sizes}
                  onChange={handleInputChange}
                  id='sizes'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black-4 focus:border-black-4 block w-full p-2.5 '
                  placeholder='XS, M, XL, ...'
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
