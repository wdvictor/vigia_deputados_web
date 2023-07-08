import { useEffect, useState } from "react"
import partidosService, { PartidosResponse } from "../service/partidos-service"
import { CanceledError } from "axios";


const usePartidos = () => {
    const [partidosError, setError] = useState('');
    const [isPartidosLoading, setLoading] = useState(false);
    const [partidos, setPartidos] = useState<PartidosResponse>();
    useEffect(() => {
        const { request, cancel } = partidosService.getAll<PartidosResponse>();
        setLoading(true);
        request
            .then((res) => setPartidos(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            })
            .finally(() => setLoading(false))

        return () => cancel();
    }, []);


    return { partidos, isPartidosLoading, partidosError }
}

export default usePartidos;