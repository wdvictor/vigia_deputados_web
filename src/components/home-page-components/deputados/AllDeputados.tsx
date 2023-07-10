//cspell:disable

import { Avatar } from "@mui/material";
import AllDeputadosLoading from "./AllDeputadosLoading";
import Paginacao from "../Paginacao";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDeputados from "../../../hooks/UseDeputados";
const AllDeputados = () => {
  const [pagina, setPagina] = useState(1);
  const { deputados, isDeputadosLoading, deputadosError } =
    useDeputados(pagina);

  if (deputadosError)
    return <div className="error-message text-danger">{deputadosError}</div>;

  if (isDeputadosLoading)
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
        {deputados?.dados.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="card">
              <div className="deputado-card">
                <Avatar
                  sx={{ width: 70, height: 70 }}
                  src={item.urlFoto}
                  className="deputado-avatar"
                />
              </div>
              <div className="deputado-body">
                <h5 className="card-title">{item.nome}</h5>
                <p className="card-text fs-6 lh-1">{item.siglaUf}</p>
                <p className="card-text fw-bold">{item.siglaPartido}</p>
                <Link
                  to={`perfil-deputado/${item.id}`}
                  className="btn btn-primary"
                >
                  Visualizar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginacao
        onPrevious={() => setPagina(pagina - 1)}
        showNextButton={deputados?.dados.length !== 0}
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
      />
    </div>
  );
};

export default AllDeputados;
