import { http } from "../../interceptors/requestInterceptor";
export const saveCandidature = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  resolve: (arg0: string) => void,
  reject: (arg0: string) => void
) => {
  http
    .post("/candidatures", data)
    .then((res) => {
      const data = res.data;
      if (data.OK) {
        resolve(data.message);
      } else {
        reject(data.err);
      }
    })
    .catch((err) => {
      reject(err);
    });
};
