import React, { useDebugValue } from "react";
import axios from "axios";
import AuthContext, {
  AuthContextType,
  AuthType,
} from "../context/AuthProvider";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useAuth = () => {
  const { authUser } = React.useContext(AuthContext) as AuthContextType;

  useDebugValue(authUser, (authUser) =>
    authUser?.user ? "Logged In" : "Logged Out"
  );

  return React.useContext(AuthContext);
};

export const useRefreshToken = () => {
  const { saveAuth } = useAuth() as AuthContextType;

  const refresh = async () => {
    const token = localStorage.getItem("_token");
    const refreshToken = localStorage.getItem("_refreshToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const body = JSON.stringify({ refreshToken });
    const { data } = await axios.post(
      `${baseUrl}/auth/refresh-token`,
      body,
      config
    );

    const authData: AuthType = {
      user: data.data.user,
      accessToken: data.data.accessToken,
      refreshToken: data.data.refreshToken,
    };

    saveAuth(authData);

    return data.data.accessToken;
  };

  return refresh;
};

export default useAuth;
