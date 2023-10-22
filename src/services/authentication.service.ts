import axios, { AxiosResponse } from "axios";
import { Auth, AuthResponse } from "../types/AuthInterface";
import { env } from "../env";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleResponse = (res: AxiosResponse, accept: any, reject: any) => {
  const data: AuthResponse = {
    OK: res.data?.OK,
    token: res.data?.token,
    err: res.data?.err,
  };

  if (data.OK) {
    accept(data.token);
  } else {
    reject(data.err);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authenticate = (auth: Auth, accept: any, reject: any) => {
  axios
    .post(`${env.apiUrl}/auth/login`, auth)
    .then((res) => handleResponse(res, accept, reject))
    .catch((err) => reject(err));
};
