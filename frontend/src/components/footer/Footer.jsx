import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import { presetsList, shopList, serviceList } from "../../constants";
import { Logo } from "../Logo";

const Footer = () => {
  return (
    <footer className=' bg-white'>
      <div className='min-w-screen pt-12 pb-4 mx-auto'>
        <hr className='md:my-8 my-6 border-gray-200' />

        {/* subscribe mail */}
        <div className='sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5 grid grid-cols-1 gap-6 sm:px-6 lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
          <div className='sm:col-span-2'>
            <h1 className='xl:text-2xl max-w-lg text-xl font-bold tracking-tight text-gray-800'>
              Subscribe our newsletter to get update.
            </h1>

            <div className='md:space-y-0 md:flex-row flex flex-col mx-auto mt-6 space-y-3'>
              <input
                id='email'
                type='text'
                className=' focus:borde -blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 px-4 py-2 text-gray-700 bg-white border rounded-md'
                placeholder='Email Address'
              />

              <button className='w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'>
                Subscribe
              </button>
            </div>
          </div>

          {/* footer links */}
          <FooterLinks list={presetsList} title='Presets' />
          <FooterLinks list={shopList} title='Shop' />
          <FooterLinks list={serviceList} title='Service' />
        </div>

        <hr className='md:my-8 my-6 border-gray-200' />

        {/* brand */}
        <div className='flex items-center justify-between sm:px-6 lg:max-w-[90rem] lg:px-8 max-w-2xl px-4 mx-auto'>
          <Logo textPosition='text-left' />

          {/* social link */}
          <div className='flex -mx-2'>
            <Link
              to='/'
              className=' hover:text-black-2 text-black-4 inline-flex items-center gap-2 mx-2 transition-colors duration-300'
              aria-label='Facebook'
            >
              <svg
                className='w-5 h-5 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z'></path>
              </svg>
              Facebook
            </Link>

            <Link
              to='/'
              className=' hover:text-black-2 text-black-4 inline-flex items-center gap-2 mx-2 transition-colors duration-300'
              aria-label='Github'
            >
              <svg
                className='w-5 h-5 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
              </svg>
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
