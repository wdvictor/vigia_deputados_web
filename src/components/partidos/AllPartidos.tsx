import { useState } from "react";
import usePartidos from "../../hooks/UsePartidos";
import AllDeputadosLoading from "../deputados/AllDeputadosLoading";

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
      <nav aria-label="Page navigation">
        <ul className="pagination custom-pagination">
          {pagina > 1 && (
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  setPagina(pagina - 1);
                }}
              >
                Anterior
              </a>
            </li>
          )}

          <li className="page-item">
            <a className="page-link" href="#">
              {pagina}
            </a>
          </li>

          <li className="page-item">
            <a
              className="page-link"
              onClick={() => setPagina(pagina + 1)}
              href="#"
            >
              Próximo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllPartidos;
