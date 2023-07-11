import { Params, useLoaderData } from "react-router-dom";

import useDeputadosPerfil from "../hooks/useDeputadosPerfil";

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
  const paramsData = useLoaderData();
  const deputadoID = (paramsData as LoaderData).deputadoID;

  const { data, isLoading, error } = useDeputadosPerfil(deputadoID);

  return (
    <div className="perfil">
      <SideBar perfil={data!} />
      <div className="perfil-content">
        <div className="perfil-content-row">
          <DadosEleitorais perfil={data!} />
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
