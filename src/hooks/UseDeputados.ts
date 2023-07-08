import { useEffect, useState } from "react";
import deputadosService, { DeputadosResponse } from "../service/deputados-service";
import { AxiosError } from "axios";


const useDeputados = () => {
    const [deputadosError, setError] = useState("");
    const [isDeputadosLoading, setLoading] = useState(true);
    const [deputados, setDeputados] = useState<DeputadosResponse>();


    useEffect(() => {
        const { request, cancel } = deputadosService.getAll<DeputadosResponse>();
        request
            .then((res) => setDeputados(res.data))
            .catch((err: AxiosError) => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
        return () => cancel();
    }, []);

    return { deputados, isDeputadosLoading, deputadosError };
}

export default useDeputados;