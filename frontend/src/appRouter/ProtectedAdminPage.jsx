import { Navigate, useNavigate } from "react-router-dom";

const ProtectedAdminPage = ({ role, children }) => {
  let redirectPath = "/";

  if (role !== "admin") return <Navigate to={redirectPath} replace />;

  return children;
};

export default ProtectedAdminPage;
