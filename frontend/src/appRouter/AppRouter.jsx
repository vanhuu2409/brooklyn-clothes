import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollTop from "../widgets/ScrollTop";
import Layout from "../widgets/layout/Layout";
import Home from "../pages/views/home/Home";
import Products from "../pages/views/products/Products";
import ProductDetail from "../pages/views/product/ProductDetail";
import LoginPage from "../pages/views/loginPage/LoginPage";
import SignUpPage from "../pages/views/signUpPage/SignUpPage";
import LookBook from "../pages/views/lookBook/LookBook";
import CartPage from "../pages/views/cartPage/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedAdminPage from "./ProtectedAdminPage";
import AdminAllProducts from "../pages/admin/AdminAllProducts";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/views/profile/Profile";

const AppRouter = () => {
  const adminRole = "huuvanhoang5588@gmail.com";
  return (
    <Router>
      <ScrollTop />
      <Routes>
        {/* user page */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/products/:productname/:_id'
            element={<ProductDetail />}
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/lookbook' element={<LookBook />} />
          {/* <Route path='/checkouts' element={<Checkouts />} /> */}
          <Route path='/cart' element={<CartPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/*' element={<NotFoundPage />} />
        </Route>
        {/* admin page */}
        <Route element={<ProtectedAdminPage adminRole={adminRole} />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/allproducts' element={<AdminAllProducts />} />
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
