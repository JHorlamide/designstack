import { axiosPrivate } from "../axios";

interface ISubscription {
  email: string;
  subscriptionType: string;
  amount: string;
}

export const subscribe = async (payload: ISubscription) => {
  const { data } = await axiosPrivate.post("/billing/subscription", payload);
  return data;
};

export const getSubDetails = async (options = {}) => {
  const { data } = await axiosPrivate.get(`/billing/subscription/details`, options);
  return data;
};

export const getSubManagementLink = async (options = {}) => {
  const { data } = await axiosPrivate.get("/billing/subscription/manage", options);
  return data;
};
