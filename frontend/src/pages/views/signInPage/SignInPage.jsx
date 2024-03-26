import { useState } from "react";
import LayoutView from "../../../widgets/layout/LayoutView";
import NewCollection from "../components/NewCollection";

const SignInPage = () => {
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      }).then((res) => res.json());
      if (response.success) {
        console.log(response);
        window.location.replace("/");
        localStorage.setItem("auth-token", response.token);
      } else alert("Cannot Sign Up");
    } catch (error) {
      // Handle fetch error (e.g., network issue)
      console.error("Fetch error:", error.message);
    }
  };
  return (
    <LayoutView>
      {/* form */}

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black-2 mb-6 text-6xl font-extrabold'>Sign In</h1>
        <form onSubmit={handleSubmitSignup} className='w-full max-w-lg'>
          <div className='flex flex-wrap mb-6 -mx-3'>
            <div className='md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-first-name'
              >
                Username
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none'
                id='grid-first-name'
                type='text'
                name='username'
                onChange={handleInputChange}
                placeholder='username'
              />
              <p className='text-xs italic text-red-500'>
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap mb-6 -mx-3'>
            <div className='md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-gmail'
              >
                Email
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none'
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
          <div className='flex flex-wrap mb-6 -mx-3'>
            <div className='w-full px-3'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-password'
              >
                Password
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none'
                id='grid-password'
                type='password'
                onChange={handleInputChange}
                name='password'
                placeholder='******************'
              />
              <p className='text-xs italic text-gray-600'>
                Make it as long and as crazy as you&#39;d like
              </p>
            </div>
          </div>
          <button
            type='submit'
            className='hover:bg-opacity-100 group/signin hover:border bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black'
          >
            <span className=' text-sm font-bold tracking-tight'>Sign In</span>
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
        </form>
      </div>
      {/* form */}

      <NewCollection />
    </LayoutView>
  );
};

export default SignInPage;
