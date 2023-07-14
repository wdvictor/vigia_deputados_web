import useData from "./useData";

export interface DeputadoDespesaResponse {
    dados: Dado[];
    links: Link[];
}

export interface Dado {
    ano: number;
    mes: number;
    tipoDespesa: string;
    codDocumento: number;
    tipoDocumento: string;
    codTipoDocumento: number;
    dataDocumento: Date;
    numDocumento: string;
    valorDocumento: number;
    urlDocumento: string;
    nomeFornecedor: string;
    cnpjCpfFornecedor: string;
    valorLiquido: number;
    valorGlosa: number;
    numRessarcimento: string;
    codLote: number;
    parcela: number;
}


export interface Link {
    rel: string;
    href: string;
}


const useDeputadoDespesa = (deputadoID: number, ano: number) => useData<DeputadoDespesaResponse>(`/deputados/${deputadoID}/despesas`, null, [`ano=${ano}`, 'ordenarPor=mes', 'ordem=desc', 'itens=1000']);

export default useDeputadoDespesa;