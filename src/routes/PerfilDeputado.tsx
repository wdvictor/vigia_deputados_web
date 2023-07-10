import { Params, useLoaderData } from "react-router-dom";

import "../css/deputado-perfil/DeputadoPerfil.css";
import useDeputadosPerfil from "../hooks/useDeputadosPerfil";
import { Avatar } from "@mui/material";
import SideBar from "../components/deputado-perfil-components/SideBar";
import DadosEleitorais from "../components/deputado-perfil-components/DadosEleitorais";

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

  const { perfil } = useDeputadosPerfil(deputadoID);

  return (
    <div className="perfil">
      <SideBar perfil={perfil!} />
      <div className="perfil-content">
        <div className="perfil-content-row">
          <DadosEleitorais perfil={perfil!} />
          <div
            style={{
              flex: 1.5,
            }}
          >
            Div 2
          </div>
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
