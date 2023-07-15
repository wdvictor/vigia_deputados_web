import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Spacer,
  Spinner,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Params, useLoaderData } from "react-router-dom";

import useDeputadosPerfil from "../hooks/useDeputadosPerfil";

import NavBar from "../components/NavBar";
import SideBar from "../components/deputado-perfil-components/SideBar";
import GabineteContainer from "../components/deputado-perfil-components/Gabinete";
import DadosPessoaisContainer from "../components/deputado-perfil-components/DadosPessoaisContainer";
import DeputadoDespesasContainer from "../components/deputado-perfil-components/DeputadoDespesasContainer";
import { secondaryColor } from "../custom-theme";
import InfoRow from "../components/deputado-perfil-components/InfoRow";
import DadosEleitorais from "../components/deputado-perfil-components/DadosEleitorais";

export async function loader({ params }: { params: Params<string> }) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}

interface LoaderData {
  deputadoID: number;
}

const PerfilDeputado = () => {
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
    <HStack h={isLargeScreen ? "100vh" : "150vh"} w="100vw">
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
        <Flex
          w="100%"
          h={isLargeScreen ? "100%" : "150%"}
          p={contentPadding}
          direction={isLargeScreen ? "row" : "column"}
          overflow="hidden"
          gap="5"
        >
          {!isLargeScreen && <NavBar showDrawerIcon={true} onClick={onOpen} />}

          <Flex direction={"column"} gap={5} h="100%" alignItems="center">
            <DadosPessoaisContainer data={data} />
            <GabineteContainer gabinete={data?.dados.ultimoStatus.gabinete} />
            <DadosEleitorais data={data!} />
          </Flex>

          {isLargeScreen && <Spacer />}

          <DeputadoDespesasContainer deputadoID={deputadoID} />
          <Spacer />
        </Flex>
      )}
    </HStack>
  );
};

export default PerfilDeputado;
