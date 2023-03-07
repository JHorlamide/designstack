import { useLocation, NavLink, Outlet } from "react-router-dom";
import { AuthContextType } from "../../context/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { LOGIN } from "../../routes/ROUTES_CONSTANT";

const AuthLayout = () => {
  const { authUser } = useAuth() as AuthContextType;

  const token = authUser?.accessToken;
  const user = authUser?.user;
  const location = useLocation();

  if (token === null && user === null) {
    return <NavLink to={LOGIN} state={{ from: location, }} replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
