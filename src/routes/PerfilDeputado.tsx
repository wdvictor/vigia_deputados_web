import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  Link,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Params, useLoaderData } from "react-router-dom";
import { secondaryColor } from "../custom-theme";

import useDeputadosPerfil from "../hooks/useDeputadosPerfil";
import { IconType } from "react-icons";
import NavBar from "../components/NavBar";

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
  const IconMap: { [key: string]: IconType } = {
    twitter: BsTwitter,
    facebook: BsFacebook,
    instagram: BsInstagram,
    youtube: BsYoutube,
  };

  function getRede(urlRede: string): string {
    let rede = urlRede.replace("https://", "");
    rede = rede.replace("www.", "");
    let urlRedeList: string[] = rede.split(".");
    console.warn(urlRedeList[0]);
    return urlRedeList[0];
  }

  const SidebarContent = () => (
    <VStack
      backgroundColor={secondaryColor}
      h="100%"
      w={isLargeScreen ? "15%" : "100%"}
    >
      <Avatar
        margin="10px"
        boxSize="100px"
        src={data?.dados.ultimoStatus.urlFoto}
      />
      <Text color="white" fontWeight="bold">
        {data?.dados.ultimoStatus.nomeEleitoral}
      </Text>

      <Text color="white">{data?.dados.ultimoStatus.siglaPartido}</Text>
      <HStack>
        {data?.dados.redeSocial &&
          data?.dados.redeSocial.map((r) => (
            <Box key={r} p="10px">
              <Link href={r} target="_blank" rel="noopener noreferrer">
                <Spacer />
                <Icon color="white" as={IconMap[getRede(r)]} />
              </Link>
            </Box>
          ))}
      </HStack>
    </VStack>
  );

  return (
    <VStack display="flex" alignItems="start" h="100vh" w="100vw">
      {!isLargeScreen && <NavBar showDrawerIcon={true} onClick={onOpen} />}

      {isLargeScreen ? (
        <SidebarContent />
      ) : (
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay padding="0px">
            <DrawerContent padding="0px">
              <DrawerBody padding="0px">
                <SidebarContent />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}

      {/* Aqui vai o restante do conteúdo da sua página de perfil */}
    </VStack>
  );
};

export default PerfilDeputado;
