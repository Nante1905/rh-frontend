import axios, { InternalAxiosRequestConfig } from "axios";
import { env } from "../env";

export const http = axios.create({
  baseURL: env.apiUrl,
});

http.interceptors.request.use(
  (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: InternalAxiosRequestConfig<any>
  ) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
