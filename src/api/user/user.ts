import { LoginType,  IRegisterUser } from "../../types/types";
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