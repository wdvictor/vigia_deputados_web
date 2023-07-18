import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Params, useLoaderData } from "react-router-dom";

import useDeputadosPerfil from "../hooks/useDeputadosPerfil";

import NavBar from "./NavBar";
import SideBar from "./deputado-perfil-components/SideBar";
import DadosGerais from "./deputado-perfil-components/DadosGerais";
import Orgaos from "./deputado-perfil-components/Orgaos";
import Frentes from "./deputado-perfil-components/Frentes";

export async function loader({ params }: { params: Params<string> }) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}

interface LoaderData {
  deputadoID: number;
}

const PerfilDeputado = () => {
  window.scrollTo(0, 0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const paramsData = useLoaderData();
  const deputadoID = (paramsData as LoaderData).deputadoID;
  const { data, isLoading } = useDeputadosPerfil(deputadoID);

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  return (
    <HStack h={isLargeScreen ? "100vh" : "300vh"} w="100vw" alignItems="start">
      {isLargeScreen ? (
        <SideBar
          isLargeScreen={isLargeScreen}
          nomeEleitoral={data?.dados.ultimoStatus.nomeEleitoral!}
          redesSociais={data?.dados.redeSocial}
          siglaPartido={data?.dados.ultimoStatus.siglaPartido!}
          urlFoto={data?.dados.ultimoStatus.urlFoto!}
        />
      ) : (
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay padding="0px">
            <DrawerContent padding="0px">
              <DrawerBody padding="0px">
                <SideBar
                  isLargeScreen={isLargeScreen!}
                  nomeEleitoral={data?.dados.ultimoStatus.nomeEleitoral!}
                  redesSociais={data?.dados.redeSocial}
                  siglaPartido={data?.dados.ultimoStatus.siglaPartido!}
                  urlFoto={data?.dados.ultimoStatus.urlFoto!}
                />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
      {isLoading && (
        <Box
          display="flex"
          h="100%"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Box>
      )}

      {!isLoading && (
        <Flex direction={isLargeScreen ? "row" : "column"} w="100%" h="100%">
          {!isLargeScreen && <NavBar showDrawerIcon={true} onClick={onOpen} />}
          <Tabs
            isFitted
            variant="enclosed"
            colorScheme="green"
            w="100%"
            h="100%"
          >
            <TabList justifyContent="center" mt="20px" mb="20px">
              <Tab>Dados Gerais</Tab>
              <Tab>Orgãos participantes</Tab>
              <Tab>Frentes</Tab>
            </TabList>
            <TabPanels w="100%" h="90%">
              <TabPanel w="100%" h="100%" p="0px">
                <Flex w="100%" h="100%" direction="column">
                  <DadosGerais data={data!} deputadoID={deputadoID} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Orgaos deputadoID={deputadoID} />
              </TabPanel>
              <TabPanel>
                <Frentes deputadoID={deputadoID} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      )}
    </HStack>
  );
};

export default PerfilDeputado;
