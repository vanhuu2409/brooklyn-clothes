import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminPage = () => {
  const user = useSelector((state) => state.user);
  let redirectPath = "/";
  console.log(user.currentUser.role);

  return user.currentUser.role === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedAdminPage;
