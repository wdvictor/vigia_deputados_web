import React from "react";
import { PartidosResponse } from "../../service/partidos-service";

const AllPartidos = ({ partidos }: { partidos: PartidosResponse }) => {
  return (
    <div>
      {partidos.dados.map((partido) => (
        <div>{partido.nome}</div>
      ))}
    </div>
  );
};

export default AllPartidos;
