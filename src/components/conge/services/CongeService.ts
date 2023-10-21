import { http } from "../../../interceptors/requestInterceptor"

export const findMyConges = () => {
    return http.get('/conges/mine');
}

export const findValidConges = () => {
    return http.get('/conges/valides');
}