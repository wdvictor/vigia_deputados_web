import { useEffect, useState } from "react"
import partidosService, { PartidosResponse } from "../service/partidos-service"
import { AxiosError } from "axios";


const usePartidos = () => {
    const [partidosError, setError] = useState('');
    const [isPartidosLoading, setLoading] = useState(false);
    const [partidos, setPartidos] = useState<PartidosResponse>();
    useEffect(() => {
        const { request, cancel } = partidosService.getAll<PartidosResponse>();
        setLoading(true);
        request
            .then((res) => {
                console.warn(res.data);
                setPartidos(res.data);
            }
            )
            .catch((err: AxiosError) => setError(err.message))
            .finally(() => setLoading(false))

        return () => cancel();
    }, []);


    return { partidos, isPartidosLoading, partidosError }
}

export default usePartidos;