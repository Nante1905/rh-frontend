import { http } from "../../../interceptors/requestInterceptor";

export const findAllDemandeConge = () => {
  return http.get("/conges/demandes");
};

export const accepter = (id: number) => {
  return http.get(`/conges/accept/${id}`);
}

export const decliner = (id: number) => {
  return http.get(`/conges/decline/${id}`);
}
