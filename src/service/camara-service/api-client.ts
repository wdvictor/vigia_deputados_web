import axios, { AxiosError } from "axios"


const apiCamara = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
});


export default apiCamara;
export { AxiosError };
