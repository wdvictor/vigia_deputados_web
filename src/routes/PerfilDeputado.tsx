import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Spacer,
  Spinner,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Params, useLoaderData } from "react-router-dom";

import useDeputadosPerfil from "../hooks/useDeputadosPerfil";

import NavBar from "../components/NavBar";
import SideBar from "../components/deputado-perfil-components/SideBar";
import GabineteContainer from "../components/deputado-perfil-components/Gabinete";
import DadosPessoaisContainer from "../components/deputado-perfil-components/DadosPessoaisContainer";

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
  const { data, isLoading, error } = useDeputadosPerfil(deputadoID);
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });

  return (
    <HStack display="flex" h="100vh" w="100vw">
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
      <Box w="100%" h="100%">
        {!isLargeScreen && <NavBar showDrawerIcon={true} onClick={onOpen} />}
        <Flex mt="5%" ml="2%" mr="2%" direction="column" h="100%">
          <DadosPessoaisContainer data={data} />
          <Box h="2%"></Box>
          <GabineteContainer gabinete={data?.dados.ultimoStatus.gabinete} />
        </Flex>
      </Box>
    </HStack>
  );
};

export default PerfilDeputado;
