import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Headroom from "react-headroom";

const Layout = () => {
  return (
    <div className=''>
      <Headroom>
        <Header />
      </Headroom>
      <div className='h-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
