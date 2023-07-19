import { Box, Divider, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { Params, useLoaderData } from "react-router-dom";
import useData from "../../../hooks/useData";
import useDeputadosPerfil, {
  DeputadoPerfilResponse,
} from "../../../hooks/useDeputadosPerfil";
import { secondaryColor } from "../../../custom-theme";

export async function dadosGeraisLoader({
  params,
}: {
  params: Params<string>;
}) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}

interface LoaderData {
  deputadoID: number;
}
const DadosGeraisMobile = () => {
  const paramsData = useLoaderData();
  const deputadoID = (paramsData as LoaderData).deputadoID;
  const { data, isLoading } = useDeputadosPerfil(deputadoID);

  return (
    <VStack h="100vh" w="100vw" bg="white">
      <Box position="absolute" bg={secondaryColor} h="10vh" w="100vw"></Box>
      {isLoading && <Spinner />}

      <Text
        alignSelf="start"
        pl="20px"
        pt="15vh"
        fontSize="2xl"
        fontFamily="inter-bold"
      >
        Dados pessoais
      </Text>
    </VStack>
  );
};

export default DadosGeraisMobile;
