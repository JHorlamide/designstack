import axios, { AxiosRequestHeaders } from "axios";
import toast from "react-hot-toast";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

axiosPrivate.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("_token");

    config.headers = {
      Authorization: [`Bearer ${token}`] as string[] // cast Authorization header value as string[]
    } as AxiosRequestHeaders; // explicitly type headers as AxiosRequestHeaders

    return config;
  },

  (error) => Promise.reject(error)
);


axiosPrivate.interceptors.response.use(
  (response) => response,

  async (error) => {
    const prevRequest = error?.config;

    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;

      const token = localStorage.getItem("_token");
      const refreshToken = localStorage.getItem("_refreshToken");

      const payload = {
        accessToken: token,
        refreshToken: refreshToken
      };
      
      const apiResponse = await axios.post(`${baseUrl}/auth/refresh-token`, payload);
      localStorage.setItem("_token", apiResponse.data.accessToken);
      localStorage.setItem("_refreshToken", apiResponse.data.refreshToken);

      prevRequest.headers[
        "Authorization"
      ] = `Bearer ${apiResponse.data.accessToken}`;

      return axiosPrivate(prevRequest);
    }

    if (
      error?.response?.status === 403 &&
      error?.response?.message === "jwt expired"
    ) {
      alert("Session Expired");
      window.location.replace("/login");
      toast.error(`${error?.response?.message}`);
      return axiosPrivate(prevRequest);
    }

    return Promise.reject(error);
  }
);

export default api;