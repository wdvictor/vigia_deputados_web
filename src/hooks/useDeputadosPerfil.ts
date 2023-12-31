
import useData from "./useData";



export interface DeputadoPerfilResponse {
    dados: Dados;
    links: Link[];
}

export interface Dados {
    id: number;
    uri: string;
    nomeCivil: string;
    ultimoStatus: UltimoStatus;
    cpf: string;
    sexo: string;
    urlWebsite: null;
    redeSocial: string[];
    dataNascimento: Date;
    dataFalecimento: null;
    ufNascimento: string;
    municipioNascimento: string;
    escolaridade: string;
}

export interface UltimoStatus {
    id: number;
    uri: string;
    nome: string;
    siglaPartido: string;
    uriPartido: string;
    siglaUf: string;
    idLegislatura: number;
    urlFoto: string;
    email: string;
    data: string;
    nomeEleitoral: string;
    gabinete: Gabinete;
    situacao: string;
    condicaoEleitoral: string;
    descricaoStatus: null;
}

export interface Gabinete {
    nome: string;
    predio: string;
    sala: string;
    andar: string;
    telefone: string;
    email: string;
}

export interface Link {
    rel: string;
    href: string;
}


const useDeputadosPerfil = (deputadoID: number, params?: string[]) => useData<DeputadoPerfilResponse>(`/deputados/${deputadoID}`, null, params)

export default useDeputadosPerfil;