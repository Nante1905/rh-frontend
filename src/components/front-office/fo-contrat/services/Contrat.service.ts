import { http } from "../../../../interceptors/requestInterceptor";

export const findAll = (idContrat: string) => {
    return http
        .get(`/contrats/${idContrat}`);
}

export const accept = (idContrat: string) => {
    return http.get(`/contrats/${idContrat}/accept`);
}

export const decline = (idContrat: string) => {
    return http.get(`/contrats/${idContrat}/decline`);
}