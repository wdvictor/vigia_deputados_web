
import useData from "./useData";


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

const usePartidos = (pagina: number) => useData<PartidosResponse>('/partidos', pagina, [`pagina=${pagina}`]);

export default usePartidos;