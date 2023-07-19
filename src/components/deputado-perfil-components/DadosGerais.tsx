import { Box, HStack, VStack } from "@chakra-ui/react";
import DadosEleitorais from "./DadosEleitorais";
import DadosPessoaisContainer from "./DadosPessoaisContainer";
import GabineteContainer from "./Gabinete";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

interface Props {
  perfilData: DeputadoPerfilResponse;
}

const DadosGerais = ({ perfilData }: Props) => {
  console.log(perfilData);
  return (
    <Box m="25px">
      <VStack gap={10}>
        <Box flex={1} h="100%" w="100%">
          <HStack gap={10} align="start">
            <Box flex={1} h="100%" w="100%">
              <DadosPessoaisContainer data={perfilData} />
            </Box>
            <Box flex={1} h="100%" w="100%">
              <DadosEleitorais data={perfilData!} />
            </Box>
          </HStack>
        </Box>
        <Box flex={1} h="100%" w="100%">
          <HStack gap={10}>
            <Box flex={1} h="100%" w="100%">
              <GabineteContainer
                gabinete={perfilData?.dados.ultimoStatus.gabinete}
              />
            </Box>
            <Box flex={1}></Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default DadosGerais;
