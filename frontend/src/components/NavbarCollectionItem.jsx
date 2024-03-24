import { Link } from "react-router-dom";

const navbarCollectionItem = (props) => {
  return (
    <Link
      to={props?.href}
      className='group/navcard relative block overflow-hidden'
    >
      {/* top card */}
      <img
        src={props?.imgUrl}
        alt={props?.title}
        className='group-hover/navcard:scale-125 object-cover w-full h-full max-w-full max-h-full transition-all duration-700'
      />
      <div className='bg-gradient-to-t from-black to-transparent absolute inset-0'></div>
      {/* body card */}
      <div className='bottom-6 left-8 absolute flex flex-col gap-1 *:drop-shadow-sm'>
        <h3 className=' text-neutral-100 text-3xl font-extrabold tracking-wide'>
          {props?.title}
        </h3>
      </div>
    </Link>
  );
};

export default navbarCollectionItem;
