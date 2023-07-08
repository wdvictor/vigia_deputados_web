import { useEffect, useState } from "react";
import deputadosService, { DeputadosResponse } from "../service/deputados-service";
import { CanceledError } from "axios";


const useDeputados = () => {
    const [deputadosError, setError] = useState("");
    const [isDeputadosLoading, setLoading] = useState(true);
    const [deputados, setDeputados] = useState<DeputadosResponse>();


    useEffect(() => {
        const { request, cancel } = deputadosService.getAll<DeputadosResponse>(['itens=15', 'pagina=1']);
        request
            .then((res) => {

                setDeputados(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            })
            .finally(() => setLoading(false));
        return () => cancel();
    }, []);

    return { deputados, isDeputadosLoading, deputadosError };
}

export default useDeputados;