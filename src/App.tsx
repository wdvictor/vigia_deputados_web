import { useEffect, useState } from "react";
import "./App.css";

import AllDeputados from "./components/deputados/AllDeputados";
import ToggleMenu from "./components/ToggleMenu";
import AllDeputadosLoading from "./components/deputados/AllDeputadosLoading";
import NavBar from "./components/navbar/NavBar";
import useDeputados from "./hooks/UseDeputados";
import AllPartidos from "./components/partidos/AllPartidos";

import usePartidos from "./hooks/UsePartidos";

function App() {
  const { deputados, isDeputadosLoading, deputadosError } = useDeputados();
  const { partidos, isPartidosLoading, partidosError } = usePartidos();
  const [selectedMenuOption, setSelectedMenuOption] = useState("Deputados");

  const handleMenuOption = (menuOption: string) => {
    setSelectedMenuOption(menuOption);
  };

  return (
    <>
      <NavBar />
      <div></div>
      <ToggleMenu
        handleMenuOption={(value: string) => handleMenuOption(value)}
        selectedMenuOption={selectedMenuOption}
      />
      {deputadosError && (
        <div className="error-message text-danger">{deputadosError}</div>
      )}
      {partidosError && (
        <div className="error-message text-danger">{partidosError}</div>
      )}

      {isDeputadosLoading ||
        (isPartidosLoading && (
          <div className="grid-container content-container">
            {Array.from({ length: 30 }, (_, index) => (
              <AllDeputadosLoading index={index} />
            ))}
          </div>
        ))}
      {selectedMenuOption == "Deputados" && deputados && (
        <AllDeputados deputados={deputados} />
      )}
      {selectedMenuOption == "Partidos" && partidos && (
        <AllPartidos partidos={partidos} />
      )}
    </>
  );
}

export default App;
