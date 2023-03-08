export interface LoginType {
  email: string;
  password: string;
};

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  name: string;
  email: string;
  address: string;
  postCode: string;
  phoneNumber: string;
  language: string;
  currency: string;
  country: string;
  city: string | never[];
}