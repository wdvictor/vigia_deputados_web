//cspell:disable
import { useState } from "react";
import usePartidos from "../../hooks/UsePartidos";
import AllDeputadosLoading from "../deputados/AllDeputadosLoading";
import Paginacao from "../Paginacao";

const AllPartidos = () => {
  const { partidos, isPartidosLoading, partidosError } = usePartidos();
  const [pagina, setPagina] = useState(1);
  if (partidosError)
    return <div className="error-message text-danger">{partidosError}</div>;
  if (isPartidosLoading)
    return (
      <div className="grid-container content-container">
        {Array.from({ length: 30 }, (_, index) => (
          <AllDeputadosLoading index={index} />
        ))}
      </div>
    );
  return (
    <div>
      <div className="grid-container content-container">
        {partidos?.dados.map((partido, index) => (
          <div key={index} className="grid-item">
            <div className="card">
              <div className="deputado-body">
                <h5 className="card-title">{partido.sigla}</h5>
                <p className="card-text fs-6 lh-1">{partido.nome}</p>

                <a href={partido.uri} className="btn btn-primary">
                  Visualizar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginacao
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
        onPrevious={() => setPagina(pagina - 1)}
      />
    </div>
  );
};

export default AllPartidos;
