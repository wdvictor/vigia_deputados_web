import axios, { AxiosError } from "axios"

const api = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
});

api.interceptors.request.use(config => {
    config.url += '?formato=json';
    return config;
});

export default api;
export { AxiosError };
