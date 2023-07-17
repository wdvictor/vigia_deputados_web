import useData from "./useData";

export interface DeputadoOrgaosResponse {
    dados: Dado[];
    links: Link[];
}

export interface Dado {
    idOrgao: number;
    uriOrgao: string;
    siglaOrgao: string;
    nomeOrgao: string;
    nomePublicacao: string;
    titulo: string;
    codTitulo: string;
    dataInicio: string;
    dataFim: string;
}

export interface Link {
    rel: string;
    href: string;
}

const useDeputadoOrgaos = (deputadoID: number) => useData<DeputadoOrgaosResponse>(`/deputados/${deputadoID}/orgaos`, null);

export default useDeputadoOrgaos;