import usePartidos from "../../hooks/UsePartidos";
import AllDeputadosLoading from "../deputados/AllDeputadosLoading";

const AllPartidos = () => {
  const { partidos, isPartidosLoading, partidosError } = usePartidos();

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
      {partidos?.dados.map((partido) => (
        <div>{partido.nome}</div>
      ))}
    </div>
  );
};

export default AllPartidos;
