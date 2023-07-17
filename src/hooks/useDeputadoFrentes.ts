import useData from "./useData";

export interface DeputadoFrentesResponse {
    dados: Dado[];
    links: Link[];
}

export interface Dado {
    id: number;
    uri: string;
    titulo: string;
    idLegislatura: number;
}

export interface Link {
    rel: string;
    href: string;
}


const useDeputadosFrentes = (deputadoID: number) => useData<DeputadoFrentesResponse>(`/deputados/${deputadoID}/frentes`, null);


export default useDeputadosFrentes;