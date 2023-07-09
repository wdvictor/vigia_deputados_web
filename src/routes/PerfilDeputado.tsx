import { Params, useLoaderData } from "react-router-dom";

import "../css/DeputadoPerfil.css";
import useDeputadosPerfil from "../hooks/useDeputadosPerfil";
import { Avatar } from "@mui/material";

export async function loader({ params }: { params: Params<string> }) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}

interface LoaderData {
  deputadoID: number;
}

const PerfilDeputado = () => {
  const data = useLoaderData();
  const deputadoID = (data as LoaderData).deputadoID;

  const { perfil, isLoading, error } = useDeputadosPerfil(deputadoID);
  return (
    <div className="perfil">
      <div className="perfil-sidebar">
        <Avatar
          className="mb-3"
          src={perfil?.dados.ultimoStatus.urlFoto}
          sx={{ width: 100, height: 100 }}
        />
        <p className="fw-bold">{perfil?.dados.ultimoStatus.nomeEleitoral}</p>
        <p className="fw-bold">{perfil?.dados.nomeCivil.toLowerCase()}</p>
        <p className="fw-bold">{perfil?.dados.ultimoStatus.email}</p>
      </div>
      <div className="perfil-content">
        <div className="perfil-content-row">
          <div style={{ flex: 2 }}>Div 1</div>
          <div>Div 2</div>
        </div>
        <div className="perfil-content-row">
          <div>Div 3</div>
          <div>Div 4</div>
        </div>
      </div>
    </div>
  );
};

export default PerfilDeputado;
