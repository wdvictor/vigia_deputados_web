import useData from "./useData";

export interface EventosResponse {
    dados: Dado[];
    links: Link[];
}

export interface Dado {
    id: number;
    uri: string;
    dataHoraInicio: string;
    dataHoraFim: null;
    situacao: string;
    descricaoTipo: string;
    descricao: string;
    localExterno: null | string;
    orgaos: Orgao[];
    localCamara: LocalCamara;
    urlRegistro: null;
}

export interface LocalCamara {
    nome: null | string;
    predio: null | string;
    sala: null | string;
    andar: null | string;
}

export interface Orgao {
    id: number;
    uri: string;
    sigla: string;
    nome: string;
    apelido: string;
    codTipoOrgao: number;
    tipoOrgao: string;
    nomePublicacao: string;
    nomeResumido: string;
}

export interface Link {
    rel: string;
    href: string;
}

const useEventos = (deputadoID: number) => useData<EventosResponse>(`/deputados/${deputadoID}/eventos`, null);


export default useEventos;