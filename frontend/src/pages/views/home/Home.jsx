import Marquee from "react-fast-marquee";
import Carousel from "../components/Carousel";
import Popular from "../components/Popular";
import Arrivals from "../components/Arrivals";
import NewCollection from "../components/NewCollection";
const Home = () => {
  return (
    <>
      <div>
        <Carousel />
      </div>
      {/* popular */}
      <div>
        <Popular />
      </div>
      {/* marquee */}
      <div>
        <div className='bg-black-1 drop-shadow-md text-neutral-300 w-full py-4 text-2xl subpixel-antialiased font-bold leading-tight tracking-widest text-center uppercase shadow-md select-none'>
          <Marquee pauseOnHover={true} autoFill={true}>
            <span className='px-4'>·</span> UPTO 70% OFF
          </Marquee>
        </div>
      </div>

      {/* arrivals */}
      <div>
        <Arrivals />
      </div>
      {/* marquee */}
      <div>
        <div className='bg-black-1 drop-shadow-md text-neutral-300 w-full py-4 text-2xl subpixel-antialiased font-bold leading-tight tracking-widest text-center uppercase shadow-md select-none'>
          <Marquee pauseOnHover={true} autoFill={true}>
            <span className='px-4'>·</span> FREE SHIPPING ON ORDERS OVER €75
          </Marquee>
        </div>
      </div>
      {/* collection */}
      <NewCollection />
    </>
  );
};

export default Home;
