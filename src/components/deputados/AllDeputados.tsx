import useDeputados from "../../hooks/UseDeputados";

import { Avatar } from "@mui/material";
import AllDeputadosLoading from "./AllDeputadosLoading";
const AllDeputados = () => {
  const { deputados, isDeputadosLoading, deputadosError } = useDeputados();

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
  );
};

export default AllDeputados;
