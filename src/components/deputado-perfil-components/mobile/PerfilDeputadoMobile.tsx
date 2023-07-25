import {
  VStack,
  Center,
  Avatar,
  Box,
  Text,
  Badge,
  Icon,
  Link as ChakraLink,
  Spacer,
  Flex,
} from "@chakra-ui/react";

import { secondaryColor } from "../../../custom-theme";
import { DeputadoPerfilResponse } from "../../../hooks/useDeputadosPerfil";
import { IconType } from "react-icons";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

const PerfilDeputadoMobile = ({ data }: { data: DeputadoPerfilResponse }) => {
  const IconMap: { [key: string]: IconType } = {
    twitter: BsTwitter,
    facebook: BsFacebook,
    instagram: BsInstagram,
    youtube: BsYoutube,
  };

  function getRede(urlRede: string): string {
    let rede = urlRede.replace("https://", "");
    rede = rede.replace("http://", "");
    rede = rede.replace("www.", "");
    let urlRedeList: string[] = rede.split(".");

    return urlRedeList[0];
  }

  return (
    <VStack h="100vh" w="100vw" spacing="0">
      <Box flex={1} w="100%" bg={secondaryColor}>
        <Link to="/">
          <Icon as={SlArrowLeft} color="white" boxSize="25px" m="20px" />
        </Link>
      </Box>
      <Box flex={2} h="100%" w="100%" bg="white"></Box>
      <Box
        w="90%"
        h="90vh"
        mt="10vh"
        bg="white"
        position="absolute"
        borderRadius="20px"
      >
        <Center>
          <Avatar
            src={data?.dados.ultimoStatus.urlFoto}
            mt="20px"
            boxSize="100px"
          />
        </Center>
        <Center>
          <Text fontFamily="inter-bold" mt="20px">
            {data.dados.ultimoStatus.nomeEleitoral}
          </Text>
        </Center>
        <Center>
          <Badge bg={secondaryColor} color="white" p="2px 10px 2px 10px">
            {data.dados.ultimoStatus.siglaPartido}
          </Badge>
        </Center>
        <Center>
          {data.dados.redeSocial.map((r) => (
            <Box key={r} p="20px">
              <ChakraLink href={r} target="_blank" rel="noopener noreferrer">
                <Icon
                  color={secondaryColor}
                  as={IconMap[getRede(r)]}
                  boxSize="25px"
                />
              </ChakraLink>
            </Box>
          ))}
        </Center>
        {data.dados.redeSocial && <Box mt="100px"></Box>}
        <Flex direction="column">
          <MenuButton
            title="Dados Gerais"
            path={`/perfil-deputado/${data.dados.id}/dados-gerais`}
          />
          <Box h="20px"></Box>
          <MenuButton
            title="Despesas"
            path={`/perfil-deputado/${data.dados.id}/despesas`}
          />
          <Box h="20px"></Box>
          <MenuButton
            title="Orgãos"
            path={`/perfil-deputado/${data.dados.id}/orgaos`}
          />

          {/* <MenuButton title="Despesas" onClick={() => {}} />
          <MenuButton title="Orgãos participantes" onClick={() => {}} />
          <MenuButton title="Frentes" onClick={() => {}} /> */}
        </Flex>

        <Spacer />
      </Box>
    </VStack>
  );
};

export default PerfilDeputadoMobile;
