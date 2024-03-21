import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/views/home/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/admin/Dashboard";
import Checkouts from "../pages/views/checkouts/Checkouts";
import Products from "../pages/views/products/Products";
import Product from "../pages/views/product/Product";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* user page */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/checkouts' element={<Checkouts />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
        {/* admin page */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
