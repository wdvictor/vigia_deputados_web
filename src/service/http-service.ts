import apiClient from "./api-client";




class HttpService {
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
        const request = apiClient.get<T>(this.endpoint + '?' + fullParams, { headers: { Accept: 'application/xml', } });
        return { request, cancel: () => controller.abort() }
    }

    getPerfil<T>(id: number) {
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint + '/' + `${id}`, { headers: { Accept: 'application/xml', } });
        return { request, cancel: () => controller.abort() }
    }


}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;