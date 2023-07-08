import { useState } from "react";

import NavBar from "../components/navbar/NavBar";
import ToggleMenu from "../components/homePageComponents/ToggleMenu";
import AllDeputados from "../components/homePageComponents/deputados/AllDeputados";
import AllPartidos from "../components/homePageComponents/partidos/AllPartidos";

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
