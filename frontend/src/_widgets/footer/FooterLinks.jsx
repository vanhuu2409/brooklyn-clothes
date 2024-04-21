import { Link } from "react-router-dom";

const FooterLinks = ({ title, list }) => {
  return (
    <div className='sm:text-left text-center'>
      <p className=' font-bold text-gray-800'>{title}</p>

      <div className='flex flex-col items-start mt-5 space-y-2 *:sm:text-left *:text-center *:w-full *:capitalize'>
        {list.map((item) => (
          <Link
            to='/'
            key={item + "footerItem"}
            className=' hover:text-black-2 text-black-4 transition-colors duration-300'
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
