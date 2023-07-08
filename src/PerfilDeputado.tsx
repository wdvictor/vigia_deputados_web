import React from "react";
import NavBar from "./components/navbar/NavBar";

const PerfilDeputado = ({ deputadoID }: { deputadoID: number }) => {
  return (
    <div>
      <NavBar />
      <div>{deputadoID}</div>
    </div>
  );
};

export default PerfilDeputado;
