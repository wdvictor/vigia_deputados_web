import { useState } from "react";

import ToggleMenu from "../components/home-page-components/ToggleMenu";
import AllDeputados from "../components/home-page-components/deputados/AllDeputados";
import AllPartidos from "../components/home-page-components/partidos/AllPartidos";
import NavBar from "../components/NavBar";

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
