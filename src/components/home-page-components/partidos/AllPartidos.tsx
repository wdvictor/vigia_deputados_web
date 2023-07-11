//cspell:disable
import { useState } from "react";

import AllDeputadosLoading from "../deputados/DeputadosSkeleton";
import Paginacao from "../Paginacao";
import usePartidos from "../../../hooks/UsePartidos";

const AllPartidos = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = usePartidos(pagina);

  if (error) return <div className="error-message text-danger">{error}</div>;
  if (isLoading)
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
        {data?.dados.map((partido, index) => (
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
        showNextButton={data?.dados.length !== 0}
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
        onPrevious={() => setPagina(pagina - 1)}
      />
    </div>
  );
};

export default AllPartidos;
