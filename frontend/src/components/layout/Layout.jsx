import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Headroom from "react-headroom";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className='relative'>
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
