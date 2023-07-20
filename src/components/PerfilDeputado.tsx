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
import PerfilDeputadoMobile from "./deputado-perfil-components/mobile/PerfilDeputadoMobile";
import DespesasTab from "./deputado-perfil-components/DespesasTab";
import { useState } from "react";

export async function loader({ params }: { params: Params<string> }) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}

interface LoaderData {
  deputadoID: number;
}

const PerfilDeputado = () => {
  window.scrollTo(0, 0);
  const [aba, setAba] = useState(0);
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

  if (!isLargeScreen && data) {
    return <PerfilDeputadoMobile data={data} />;
  }
  console.log(`aba selecionada ${aba}`);
  return (
    <HStack h="100vh" w="100vw" alignItems="start" gap={0}>
      <SideBar
        selectedIndex={aba}
        onSelectIndex={setAba}
        nomeEleitoral={data?.dados.ultimoStatus.nomeEleitoral!}
        redesSociais={data?.dados.redeSocial}
        siglaPartido={data?.dados.ultimoStatus.siglaPartido!}
        urlFoto={data?.dados.ultimoStatus.urlFoto!}
      />
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
      {aba == 0 && !isLoading && <DadosGerais perfilData={data!} />}
      {aba == 1 && !isLoading && <DespesasTab deputadoID={deputadoID} />}
    </HStack>
  );
};

export default PerfilDeputado;
