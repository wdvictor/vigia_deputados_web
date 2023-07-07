import { useEffect, useState } from "react";
import "./App.css";
import deputadosService, {
  DeputadosResponse,
} from "./service/deputados-service";
import { AxiosError } from "axios";
import AllDeputados from "./components/AllDeputados";

function App() {
  const [deputados, setDeputados] = useState<DeputadosResponse>();
  const [error, setError] = useState("");
  useEffect(() => {
    const { request, cancel } = deputadosService.getAll<DeputadosResponse>();

    request
      .then((res) => setDeputados(res.data))
      .catch((err: AxiosError) => {
        setError(err.message);
      });
    return () => cancel();
  }, []);

  return (
    <>
      <div>{error && <p>{error}</p>}</div>
      {deputados && <AllDeputados deputados={deputados} />}
    </>
  );
}

export default App;
