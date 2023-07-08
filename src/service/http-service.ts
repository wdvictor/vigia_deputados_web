import apiClient from "./api-client";




class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }


    getAll<T>(params?: string[]) {
        console.log('Requesting get all', this.endpoint)
        let fullParams = '';
        if (params)
            for (let i = 0; i < params.length; i++) {
                if (i !== 0) fullParams += '&'
                fullParams += params[i];

            }
        console.warn(this.endpoint + '?' + fullParams);
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint + '?' + fullParams, { headers: { Accept: 'application/xml', } });
        return { request, cancel: () => controller.abort() }
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;