import Arrivals from "../components/Arrivals";
import LayoutView from "../../../widgets/layout/LayoutView";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userDetail, setUserDetail] = useState({});

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }

    // console.log(data);
  };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.replace("/products");
  };

  const isLogin = localStorage.getItem("access_token");
  return (
    <LayoutView>
      {/* form */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black-2 mb-6 text-6xl font-extrabold'>Login</h1>
        <form onSubmit={handleSubmitLogin} className='w-full max-w-lg'>
          <div className='flex flex-wrap -mx-3'>
            <div className='md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-first-name'
              >
                Email
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none'
                id='grid-first-name'
                type='text'
                name='email'
                onChange={handleInputChange}
                placeholder='demo@gmail.com'
              />
              <p className='text-xs italic text-red-500'>
                Please fill out this field.
              </p>
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
                name='password'
                onChange={handleInputChange}
                type='password'
                placeholder='**********'
              />
            </div>
          </div>
          {isLogin && (
            <button
              type='button'
              className='text-6xl font-bold text-white bg-red-500'
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          <button
            type='submit'
            disabled={isLoading}
            className='hover:bg-opacity-100 group/login hover:border bg-opacity-60 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-white transition-all translate-y-0 bg-black'
          >
            <span className=' text-sm font-bold tracking-tight'>
              {isLoading ? "Loading..." : "Continue"}
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='group-hover/login:rotate-0 w-4 h-4 transition-all -rotate-45'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>
          </button>
        </form>
        <p className='text-normal mt-2 mb-6 italic text-center text-gray-600 *:text-cyan-600 *:font-bold'>
          Don`t have an account yet? <Link to='/signup'>Sign Up</Link>
        </p>
        {error && (
          <p className='text-normal mt-2 mb-6 italic text-center text-gray-600 *:text-cyan-600 *:font-bold'>
            {error}
          </p>
        )}
      </div>
      {/* form */}

      <Arrivals />
    </LayoutView>
  );
};

export default LoginPage;
