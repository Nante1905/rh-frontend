import { http } from "../../../interceptors/requestInterceptor";

export const findAllDemandeConge = () => {
  return http.get("/conges/demandes");
};
