import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../../../firebase/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutStart,
  signOutFailure,
  signOutSuccess,
} from "../../../redux/user/userSlice";
import LayoutView from "../../../_widgets/layout/LayoutView";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const {
    currentUser: user,
    loading,
    error,
  } = useSelector((state) => state.user);
  const currentUser = user.user ?? user;
  const [userDetail, setUserDetail] = useState({});
  const { username, email } = currentUser;
  const [file, setFile] = useState(null);
  const [uploadFileErr, setUploadFileErr] = useState(false);
  const [filePerc, setFilePerc] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // allow read;
  // allow write: if
  // request.resource.size < 2*1024*1024 &&
  // request.resource.contentType.matches('image/.*');

  useEffect(() => {
    if (file) {
      handleUploadFile(file);
    }
  }, [file]);

  const handleUploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_change",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => setUploadFileErr(false),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserDetail({ ...userDetail, avatar: downloadURL });
        });
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message)) &
          toast.error(`Delete User Failure!`);
        return;
      }
      dispatch(deleteUserSuccess()) &
        toast.success(`Delete User Successfully!`);
    } catch (error) {
      dispatch(deleteUserFailure(error.message)) &
        toast.error(`Delete User Failure!`);
    }
  };
  const handleOnSignout = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch("/api/auth/signout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess(data.message)) &
        toast.success(`User has been logged out!`);
      navigate("/login");
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetail),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message)) &
          toast.error(`Update User Failure!`);
        return;
      }
      dispatch(updateUserSuccess(data)) &
        toast.success(`Update User Successfully!`);
    } catch (error) {
      dispatch(updateUserFailure(error.message)) &
        toast.error(`Update User Failure!`);
    }
  };
  return (
    <LayoutView>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black-2 mb-8 text-6xl font-extrabold'>Profile</h1>
        {/* avatar */}
        <label htmlFor='avatar-input'>
          <img
            src={userDetail.avatar || currentUser.avatar}
            className='size-32 object-cover border-2 rounded-full cursor-pointer'
            alt=''
          />
        </label>
        <input
          type='file'
          onChange={(e) => setFile(e.target.files[0])}
          accept='image/png, image/jpeg, image/webp'
          name='avatar'
          id='avatar-input'
          className='hidden'
        />
        <p className='dark:text-green-300 my-2 text-sm text-green-500'>
          {uploadFileErr ? (
            <span className='text-red-700'>Upload Image Failure...</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            `Uploading...`
          ) : filePerc === 100 ? (
            "Upload image successfully!"
          ) : (
            ""
          )}
        </p>
        {/* form */}
        <form onSubmit={handleSubmitSignup} className='w-full max-w-lg'>
          <div className='flex flex-wrap -mx-3'>
            <div className='md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-first-name'
              >
                Username
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                id='grid-first-name'
                type='text'
                defaultValue={username}
                name='username'
                onChange={handleInputChange}
                placeholder='username'
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3'>
            <div className='md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-gmail'
              >
                Email
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                id='grid-gmail'
                type='text'
                defaultValue={email}
                onChange={handleInputChange}
                name='email'
                placeholder='demo@gmail.com'
              />
              {/* <p className='text-xs italic text-red-500'>
                Please fill out this field.
              </p> */}
            </div>
          </div>
          <div className='flex flex-wrap -mx-3'>
            <div className='w-full px-3'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-password'
              >
                Password
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:ring-0 focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 appearance-none'
                id='grid-password'
                type='password'
                onChange={handleInputChange}
                name='password'
                placeholder='**********'
              />
              <p className='text-xs italic text-gray-600'>
                Make it as long and as crazy as you&#39;d like
              </p>
            </div>
          </div>
          <button
            disabled={loading}
            type='submit'
            className='hover:bg-opacity-100 group/signin hover:border-black-4 bg-opacity-60 disabled:opacity-80 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black border'
          >
            <span className=' text-sm font-bold tracking-tight'>
              {loading ? "Loading..." : "Update"}
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='group-hover/signin:rotate-0 w-4 h-4 transition-all -rotate-45'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>
          </button>
          <Link
            to='/profile/orders'
            className='hover:bg-opacity-100 group/signin hover:border-black-4 bg-opacity-60 disabled:opacity-80 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black border'
          >
            <span className=' text-sm font-bold tracking-tight'>
              Goto Order
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='group-hover/signin:rotate-0 w-4 h-4 transition-all -rotate-45'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>
          </Link>
          {email === "huuvanhoang5588@gmail.com" && (
            <Link
              to='/admin/allproducts'
              className='hover:bg-opacity-100 group/signin hover:border-black-4 bg-opacity-60 disabled:opacity-80 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black border'
            >
              <span className=' text-sm font-bold tracking-tight'>
                Goto Admin Page
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='group-hover/signin:rotate-0 w-4 h-4 transition-all -rotate-45'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          )}
          <div className='flex flex-row justify-between mt-4'>
            <p
              onClick={handleOnDeleteAccount}
              className='text-normal hover:text-red-500 mt-2 mb-6 italic font-semibold text-center text-red-800 transition-all cursor-pointer'
            >
              Delete Account
            </p>
            <p
              onClick={handleOnSignout}
              className='text-normal hover:text-red-500 mt-2 mb-6 italic font-semibold text-center text-red-800 transition-all cursor-pointer'
            >
              Sign out
            </p>
          </div>
        </form>
      </div>
      {/* form */}
      {/* Toast container */}
      <div className=' normal-case'>
        <ToastContainer
          position='top-left'
          autoClose={2000}
          limit={10}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
          transition:Bounce
          stacked
          containerId={"profile-container"}
        />
      </div>
    </LayoutView>
  );
};

export default Profile;
