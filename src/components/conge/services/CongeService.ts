import { http } from "../../../interceptors/requestInterceptor"

export const findMyConges = () => {
    return http.get('/conges/mine');
}

export const findValidConges = () => {
    return http.get('/conges/valides');
}

export const findValidCongesUnderAuth = () => {
    return http.get('/conges/valides/services');
}

export const findTypeConge = () => {
    return http.get('/conges/types');
}

export const sendDemande = (form: any) => {
    return http.post('/conges', form);
}