import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import { spanishGreen } from "./custom-theme";
import DeputadosTab from "./components/home-page-components/deputados/DeputadoTab";
import PartidosTab from "./components/home-page-components/partidos/PartidosTab";

function App() {
  return (
    <>
      <VStack backgroundColor={`${spanishGreen}`} h="100%">
        <NavBar></NavBar>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList justifyContent="center">
            <Tab>Deputados</Tab>
            <Tab>Partidos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <DeputadosTab />
              </Box>
            </TabPanel>
            <TabPanel>
              <PartidosTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
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
