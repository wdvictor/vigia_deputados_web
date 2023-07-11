
import useData from "./useData";


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



const useDeputados = (pagina: number) => useData<DeputadosResponse>('/deputados', pagina, ['itens=15', `pagina=${pagina}`])


export default useDeputados;