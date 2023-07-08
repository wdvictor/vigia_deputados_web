import NavBar from "../components/navbar/NavBar";
import { Params, useLoaderData } from "react-router-dom";

export async function loader({ params }: { params: Params<string> }) {
  let deputadoPerfilResponse = parseInt(params["deputadoID"]!);
  return { deputadoPerfilResponse };
}

interface LoaderData {
  deputadoPerfilResponse: number;
}

const PerfilDeputado = () => {
  const data = useLoaderData();
  const { deputadoPerfilResponse } = data as LoaderData;
  console.warn(deputadoPerfilResponse);
  return (
    <div>
      <NavBar />
      <div>
        <li>{deputadoPerfilResponse}</li>
      </div>
    </div>
  );
};

export default PerfilDeputado;
