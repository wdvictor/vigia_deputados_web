import { Params, useLoaderData } from "react-router-dom";
import useDeputadosPerfil from "../hooks/useDeputadosPerfil";
import NavBar from "../components/NavBar";
import "../css/DeputadoPerfil.css";

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
    <div>
      <NavBar />
      <div className="perfil-deputado">
        <h2>{perfil?.dados.nomeCivil}</h2>
        <p>
          <strong>Nome Civil:</strong> {perfil?.dados.nomeCivil}
        </p>
        <p>
          <strong>CPF:</strong> {perfil?.dados.cpf}
        </p>
        <p>
          <strong>Sexo:</strong> {perfil?.dados.sexo}
        </p>
        <p>
          <strong>Data de Nascimento:</strong>{" "}
          {perfil && new Date(perfil.dados.dataNascimento).toLocaleDateString()}
        </p>
        <p>
          <strong>UF Nascimento:</strong> {perfil?.dados.ufNascimento}
        </p>
        <p>
          <strong>Município de Nascimento:</strong>{" "}
          {perfil?.dados.municipioNascimento}
        </p>
        <p>
          <strong>Escolaridade:</strong> {perfil?.dados.escolaridade}
        </p>
      </div>
    </div>
  );
};

export default PerfilDeputado;
