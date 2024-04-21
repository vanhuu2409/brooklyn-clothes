import { useState } from "react";
import LayoutView from "../../../_widgets/layout/LayoutView";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../../_widgets/OAuth";
import { ToastContainer, toast } from "react-toastify";
import { handleUserApiPost } from "../../../services/api.jsx";

const SignUp = () => {
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    const usernameRegex = /^[^\W_](?!.*?[._]{2})[\w.]{6,18}[^\W_]$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    try {
      setLoading(true);
      if (!userDetail.username || !usernameRegex.test(userDetail.username))
        return (
          setLoading(false) &
          toast.error(
            "Please enter a valid username\n(6-18 character can be use '_' and '.')!"
          )
        );
      if (!userDetail.email || !emailRegex.test(userDetail.email))
        return setLoading(false) & toast.error("Please enter a valid email!");
      if (!userDetail.password)
        return (
          setLoading(false) & toast.error("Please enter a valid password!")
        );
      // const res = await fetch("/api/auth/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userDetail),
      // });
      // const data = await res.json();
      const data = await handleUserApiPost("/api/auth/signup", userDetail);
      if (data.success === false) {
        setLoading(false) & toast.error("Cannot sign up!");
        return;
      }
      setLoading(false);
      navigate("/login") & toast.success("Sign in successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false) & toast.error("Cannot sign up!");
    }
  };
  return (
    <LayoutView>
      {/* form */}

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black-2 mb-8 text-6xl font-extrabold'>Sign Up</h1>
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
            className='hover:bg-opacity-100 group/signin hover:border-black-4 disabled:opacity-50 bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black border'
          >
            <span className=' text-sm font-bold tracking-tight'>
              {loading ? "Loading..." : "Sign Up"}
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
          {/* login with google */}
          <OAuth />
          <p className='text-normal mt-2 mb-6 italic text-center text-gray-600 *:text-cyan-600 *:font-bold'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </p>
        </form>
      </div>
      {/* form */}

      {/* Toast container */}
      <div className='normal-case'>
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
          containerId={"signup-page-container"}
        />
      </div>
    </LayoutView>
  );
};

export default SignUp;
