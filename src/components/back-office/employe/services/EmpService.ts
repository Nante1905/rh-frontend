import { http } from "../../../../interceptors/requestInterceptor"

export const findAllEmployes = () => {
    return http.get('/employes');
}

export const findEmployesByMission = (pattern) => {
    return http.post('/employes/missions', { pattern });
}