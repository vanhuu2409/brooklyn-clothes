import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminPage = ({ adminRole }) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  let redirectPath = "/";

  return adminRole === user?.currentUser?.email ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedAdminPage;
