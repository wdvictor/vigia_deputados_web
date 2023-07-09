import { useEffect, useState } from "react";

import { CanceledError } from "axios";
import perfilDeputadoService, { DeputadoPerfilResponse } from "../service/perfil-deputado-service";


const useDeputadosPerfil = (deputadoID: number) => {
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [perfil, setPerfil] = useState<DeputadoPerfilResponse>();


    useEffect(() => {



        const { request, cancel } = perfilDeputadoService.getPerfil<DeputadoPerfilResponse>(deputadoID);
        request
            .then((res) => {

                setPerfil(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            })
            .finally(() => setLoading(false));
        return () => cancel();
    }, []);

    return { perfil, isLoading, error };
}

export default useDeputadosPerfil;