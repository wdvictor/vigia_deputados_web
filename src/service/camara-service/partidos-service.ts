import create from "./http-camara-service";

export interface PartidosResponse {
    dados: Dado[];
    links: Link[];
}

export interface Dado {
    id: number;
    sigla: string;
    nome: string;
    uri: string;
}

export interface Link {
    rel: string;
    href: string;
}

export default create('/partidos')