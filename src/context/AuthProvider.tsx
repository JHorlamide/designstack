import React, { useState } from "react";

export interface IUser {
  name: string;
  email: string;
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
  };

  return (
    <AuthContext.Provider value={{ authUser, saveAuth, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
