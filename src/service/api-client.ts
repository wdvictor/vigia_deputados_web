import axios, { AxiosError } from "axios"


export default axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',

});

export { AxiosError };