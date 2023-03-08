import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes/ROUTES_CONSTANT";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: {
    imageUrl: string;
  };
  isSubscribed: boolean;
  subscriptionType: string;
  address: string;
  postCode: string;
  language: string;
  currency: string;
  phoneNumber: string;
}

export interface AuthType {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthContextType {
  authUser: AuthType;
  saveAuth: (auth: AuthType) => void;
  logOutUser: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState<AuthType>({
    user: null,
    accessToken: null,
    refreshToken: null,
  });

  const saveAuth = (auth: AuthType) => {
    setAuthUser({
      ...authUser,
      user: auth.user,
      accessToken: auth.accessToken,
      refreshToken: auth.refreshToken,
    });
  };

  const logOutUser = () => {
    saveAuth({
      user: null,
      accessToken: "",
      refreshToken: "",
    });

    navigate(LOGIN);
  };

  return (
    <AuthContext.Provider value={{ authUser, saveAuth, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
