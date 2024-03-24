import LayoutView from "../components/LayoutView";
import Popular from "../components/Popular";

const SignInPage = () => {
  return (
    <LayoutView>
      <div className='flex flex-col items-center justify-center'>
        SignInPage
        <form className='w-full max-w-lg'>
          <div className='flex flex-wrap mb-6 -mx-3'>
            <div className='md:w-1/2 md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-first-name'
              >
                First Name
              </label>
              <input
                className='focus:outline-none focus:bg-white block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none'
                id='grid-first-name'
                type='text'
                placeholder='Jane'
              />
              <p className='text-xs italic text-red-500'>
                Please fill out this field.
              </p>
            </div>
            <div className='md:w-1/2 w-full px-3'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-last-name'
              >
                Last Name
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none'
                id='grid-last-name'
                type='text'
                placeholder='Doe'
              />
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
                placeholder='******************'
              />
              <p className='text-xs italic text-gray-600'>
                Make it as long and as crazy as you&#39;d like
              </p>
            </div>
          </div>
          <div className='flex flex-wrap mb-2 -mx-3'>
            <div className='md:w-1/3 md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-city'
              >
                City
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none'
                id='grid-city'
                type='text'
                placeholder='Albuquerque'
              />
            </div>
            <div className='md:w-1/3 md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-state'
              >
                State
              </label>
              <div className='relative'>
                <select
                  className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none'
                  id='grid-state'
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'>
                  <svg
                    className='w-4 h-4 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 md:mb-0 w-full px-3 mb-6'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
                htmlFor='grid-zip'
              >
                Zip
              </label>
              <input
                className='focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none'
                id='grid-zip'
                type='text'
                placeholder='90210'
              />
            </div>
          </div>
        </form>
        <Popular />
      </div>
    </LayoutView>
  );
};

export default SignInPage;
