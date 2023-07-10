import create from "./http-camara-service";
export interface DeputadosResponse {
    dados: Dado[];
    links: Link[];
}

export interface Dado {
    id: number;
    uri: string;
    nome: string;
    siglaPartido: string;
    uriPartido: string;
    siglaUf: string;
    idLegislatura: number;
    urlFoto: string;
    email: string;
}


export interface Link {
    rel: string;
    href: string;
}

export default create('/deputados')