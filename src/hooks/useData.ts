
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../service/api-client";



const useData = <T>(endpoint: string, effectHookData: any, params?: string[],) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);

        let urlParams = '?formato=json'
        if (params) {
            for (let param of params!) {
                urlParams += `&${param}`;
            }
        }
        console.warn('Requesting ' + endpoint, params);
        apiClient.get<T>(endpoint + urlParams)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;

                setError(err.message);
                setLoading(false);
            })
            .finally(() => setLoading(false));
        return () => controller.abort();
    }, [effectHookData]);

    return { data, isLoading, error };
}

export default useData;