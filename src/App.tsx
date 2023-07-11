import { useState } from "react";

import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GridDeputados from "./components/home-page-components/deputados/GridDeputados";

function App() {
  const [selectedMenuOption, setSelectedMenuOption] = useState("Deputados");

  return (
    <>
      <VStack backgroundColor="white" h="100vh">
        <NavBar></NavBar>
        <Box w="100vw" h="100vh">
          {selectedMenuOption == "Deputados" && <GridDeputados />}
        </Box>
      </VStack>
      {/* <div
        style={{ backgroundColor: "white", height: "100vh", width: "100vw" }}
      >
        <ToggleMenu
          handleMenuOption={(value: string) => setSelectedMenuOption(value)}
          selectedMenuOption={selectedMenuOption}
        />
        {selectedMenuOption == "Deputados" && <AllDeputados />}
        {selectedMenuOption == "Partidos" && <AllPartidos />}
      </div> */}
    </>
  );
}

export default App;
