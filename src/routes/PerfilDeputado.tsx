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
  Wrap,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Params, useLoaderData } from "react-router-dom";

import useDeputadosPerfil from "../hooks/useDeputadosPerfil";

import NavBar from "../components/NavBar";
import SideBar from "../components/deputado-perfil-components/SideBar";
import DadosGerais from "../components/deputado-perfil-components/DadosGerais";
import Orgaos from "../components/deputado-perfil-components/Orgaos";
import Frentes from "../components/deputado-perfil-components/Frentes";

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

  const contentPadding = isLargeScreen
    ? "20px 20px 20px 20px"
    : "0px 10px 20px 0px";
  return (
    <HStack h={"100vh"} w="100vw" alignItems="start">
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
        <Tabs variant="soft-rounded" colorScheme="green" w="100%" h="100%">
          <TabList justifyContent="center">
            <Tab>Dados Gerais</Tab>
            <Tab>Orgãos participantes</Tab>
          </TabList>
          <TabPanels w="100%" h="100%">
            <TabPanel w="100%" h="100%">
              <Flex w="100%" h="100%" direction="column">
                {!isLargeScreen && (
                  <NavBar showDrawerIcon={true} onClick={onOpen} />
                )}
                <DadosGerais
                  contentPadding={contentPadding}
                  data={data!}
                  deputadoID={deputadoID}
                />
                {/* <Orgaos deputadoID={deputadoID} />
          <Frentes deputadoID={deputadoID} /> */}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </HStack>
  );
};

export default PerfilDeputado;
