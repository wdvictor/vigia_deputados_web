import apiCamaraClient from "./api-client";




class DeputadosHttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }


    getAll<T>(params?: string[]) {

        let fullParams = '';
        if (params)
            for (let i = 0; i < params.length; i++) {
                if (i !== 0) fullParams += '&'
                fullParams += params[i];

            }
        fullParams += '&formato=json';
        const controller = new AbortController();
        const request = apiCamaraClient.get<T>(this.endpoint + '?' + fullParams, { headers: { Accept: 'application/xml', } });
        return { request, cancel: () => controller.abort() }
    }

    getPerfil<T>(id: number) {
        const controller = new AbortController();
        const request = apiCamaraClient.get<T>(this.endpoint + '/' + `${id}`, { headers: { Accept: 'application/xml', } });
        return { request, cancel: () => controller.abort() }
    }


}

const create = (endpoint: string) => new DeputadosHttpService(endpoint);

export default create;