import { Box, Divider, HStack, VStack } from "@chakra-ui/react";
import DadosEleitorais from "./DadosEleitorais";
import DadosPessoaisContainer from "./DadosPessoaisContainer";
import GabineteContainer from "./Gabinete";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

interface Props {
  perfilData: DeputadoPerfilResponse;
}

const DadosGerais = ({ perfilData }: Props) => {
  return (
    <Box
      h="100vh"
      w="82vw"
      p="20px 50px 0px 50px"
      maxH="100vh"
      overflowY="scroll"
    >
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
