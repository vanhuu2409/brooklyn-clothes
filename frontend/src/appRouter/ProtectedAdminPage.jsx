import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminPage = ({ role }) => {
  let redirectPath = "/";

  return role == "admin" ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedAdminPage;
