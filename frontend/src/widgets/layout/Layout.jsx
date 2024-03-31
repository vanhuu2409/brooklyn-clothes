import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";

const Layout = () => {
  return (
    <div className='relative overflow-hidden'>
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
