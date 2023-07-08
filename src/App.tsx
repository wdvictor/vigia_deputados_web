import { useState } from "react";
import "./App.css";

import AllDeputados from "./components/deputados/AllDeputados";
import ToggleMenu from "./components/ToggleMenu";
import NavBar from "./components/navbar/NavBar";
import AllPartidos from "./components/partidos/AllPartidos";

function App() {
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

      {selectedMenuOption == "Deputados" && <AllDeputados />}
      {selectedMenuOption == "Partidos" && <AllPartidos />}
    </>
  );
}

export default App;
