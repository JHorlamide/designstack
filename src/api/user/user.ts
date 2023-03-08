import { LoginType,  IRegisterUser, IUpdateUser } from "../../types/types";
import api, { axiosPrivate } from "../axios";

export const registerUser = async (registerPayload: IRegisterUser) => {
  const { data } = await api.post("/users/register", registerPayload);
  return data;
};

export const loginUser = async (loginData: LoginType) => {
  const { data } = await api.post("/auth", loginData);
  return data;
};

export const uploadImage = async (uploadFormData: FormData) => {
  const { data } = await axiosPrivate.post("/file/upload", uploadFormData);
  return data;
};

export const updateUserDetails = async (userId: string, payload: IUpdateUser) => {
  const { data } = await axiosPrivate.put(`/users/${userId}/update`, payload);
  return data;
}

export interface IPasswordReset {
  userId: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const resetPassword = async (payload: IPasswordReset) => {
  const { data } = await axiosPrivate.put("/auth/reset-password", payload);
  return data;
};

export const fetchCountries = async (options = {}) => {
  const { data } = await api.get("/countries", options);
  return data;
}

export const updateUserAvatar = async (userId: string, payload: any) => {
  const { data } = await axiosPrivate.put(`user/${userId}/avatar/update`, payload);
  return data;
}

export const fetchCities = async (countryCode: string, options = {}) => {
  const { data } = await api.get(`/cities/${countryCode}`, options);
  return data;
}