import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollTop from "../_widgets/ScrollTop";
import Layout from "../_widgets/layout/Layout";
import Home from "../pages/views/home/Home";
import Products from "../pages/views/products/Products";
import ProductDetail from "../pages/views/product/ProductDetail";
import LookBook from "../pages/views/lookBook/LookBook";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedAdminPage from "./ProtectedAdminPage";
import AdminAllProducts from "../pages/admin/AdminAllProducts";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/views/profile/Profile";
import AdminLayout from "../pages/admin/AdminLayout";
import Login from "../pages/views/login/Login";
import Cart from "../pages/views/cart/Cart";
import Checkout from "../pages/views/checkout/Checkout";
import SignUp from "../pages/views/signup/SignUp";
import Orders from "../pages/views/orders/Orders";
import OrderDetail from "../pages/views/orders/OrderDetail";
import AdminAllOrder from "../pages/admin/AdminAllOrder.jsx";
import AdminOrderDetail from "../pages/admin/AdminOrderDetail.jsx";

const AppRouter = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        {/* user page */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/products/:collection/:category'
            element={<Products />}
          />
          <Route
            path='/products/:collection/:category/:productname/:_id'
            element={<ProductDetail />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/lookbook' element={<LookBook />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/orders' element={<Orders />} />
            <Route path='/profile/orders/:id' element={<OrderDetail />} />
          </Route>

          <Route path='/*' element={<NotFoundPage />} />
        </Route>
        {/* admin page */}
        <Route element={<ProtectedAdminPage />}>
          <Route path='/admin/' element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/allproducts' element={<AdminAllProducts />} />
            <Route path='/admin/allorders' element={<AdminAllOrder />} />
            <Route path='/admin/allorders/:id' element={<AdminOrderDetail />} />
          </Route>
        </Route>
      </Routes>
      {/* Toast container */}
      <div className=' normal-case'>
        <ToastContainer
          position='top-left'
          autoClose={2000}
          limit={10}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
          transition:Bounce
          stacked
        />
      </div>
    </Router>
  );
};

export default AppRouter;
