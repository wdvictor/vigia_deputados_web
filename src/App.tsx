import { useEffect, useState } from "react";
import "./App.css";
import deputadosService, {
  DeputadosResponse,
} from "./service/deputados-service";
import { AxiosError } from "axios";

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
      <div>
        {error && <p>{error}</p>}
        <div className="grid-container content-container">
          {deputados?.dados.map((item, index) => (
            <div key={index} className="grid-item deputado-card">
              <div className="card">
                <img src={item.urlFoto} className="card-img-top deputado-img" />
                <div className="deputado-body">
                  <h5 className="card-title">{item.nome}</h5>
                  <p className="card-text fs-6 lh-1">{item.email}</p>
                  <p className="card-text fw-bold">{item.siglaPartido}</p>
                  <a href="#" className="btn btn-primary">
                    Visualizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
