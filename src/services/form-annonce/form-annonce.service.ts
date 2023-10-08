import { Service } from "../../components/form-annonce/types/JobCriteria";
import { http } from "../../interceptors/requestInterceptor";

export const getCurrentService = (
  resolve: (arg0: Service | string) => void,
  reject: (arg0: Service | string) => void
) => {
  http
    .get("/session/service")
    .then((res) => {
      const data = res.data;
      if (data?.OK) {
        resolve(data.service);
      } else {
        reject(data.err);
      }
    })
    .catch((err) => {
      reject(err);
    });
};
