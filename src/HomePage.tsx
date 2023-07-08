import { useState } from "react";
import ToggleMenu from "./components/ToggleMenu";
import AllDeputados from "./components/deputados/AllDeputados";
import NavBar from "./components/navbar/NavBar";
import AllPartidos from "./components/partidos/AllPartidos";

const HomePage = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState("Deputados");

  return (
    <>
      <NavBar />
      <div></div>
      <ToggleMenu
        handleMenuOption={(value: string) => setSelectedMenuOption(value)}
        selectedMenuOption={selectedMenuOption}
      />

      {selectedMenuOption == "Deputados" && <AllDeputados />}
      {selectedMenuOption == "Partidos" && <AllPartidos />}
    </>
  );
};

export default HomePage;
