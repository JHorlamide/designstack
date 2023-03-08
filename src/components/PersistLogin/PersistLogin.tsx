import { useState, useEffect, Fragment } from "react";
import { Outlet } from "react-router-dom";
import useAuth, { useRefreshToken } from "../../hooks/useAuth";
import { AuthContextType } from "../../context/AuthProvider";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { authUser } = useAuth() as AuthContextType;
  const refresh = useRefreshToken();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    !authUser?.user ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <Fragment>
      {isLoading ? <p className="text-center py-10">Loading...</p> : <Outlet />}
    </Fragment>
  );
};

export default PersistLogin;
