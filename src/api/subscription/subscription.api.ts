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