import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/views/home/Home";
import AllProducts from "../pages/views/all-products/AllProducts";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/admin/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* user page */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/all-products' element={<AllProducts />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
        {/* admin page */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
