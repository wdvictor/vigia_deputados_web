import { Params, useLoaderData } from "react-router-dom";

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

  //const { data, isLoading, error } = useDeputadosPerfil(deputadoID);

  return <div></div>;
};

export default PerfilDeputado;
