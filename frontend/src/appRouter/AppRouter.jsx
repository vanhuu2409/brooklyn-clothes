import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/views/home/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/views/products/Products";
import ProductDetail from "../pages/views/product/ProductDetail";
import ScrollTop from "../components/ScrollTop";
import LoginPage from "../pages/views/loginPage/LoginPage";
import SignInPage from "../pages/views/signInPage/SignInPage";
import { ToastContainer } from "react-toastify";
import CartPage from "../pages/views/cartPage/CartPage";
import LookBook from "../pages/views/lookBook/LookBook";

const AppRouter = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        {/* user page */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/lookbook' element={<LookBook />} />
          {/* <Route path='/checkouts' element={<Checkouts />} /> */}
          <Route path='/cart' element={<CartPage />} />

          <Route path='/*' element={<NotFoundPage />} />
        </Route>
        {/* admin page */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
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
