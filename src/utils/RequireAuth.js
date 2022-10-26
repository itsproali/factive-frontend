import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useSelector((state) => state);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
