import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import DadosEleitorais from "./DadosEleitorais";
import DadosPessoaisContainer from "./DadosPessoaisContainer";
import DeputadoDespesasContainer from "./DeputadoDespesasContainer";
import GabineteContainer from "./Gabinete";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

interface Props {
  data: DeputadoPerfilResponse;

  deputadoID: number;
}

const DadosGerais = ({ data, deputadoID }: Props) => {
  return (
    <VStack overflow="hidden" h="100%" w="100%">
      <Box w="100%">
        <Flex
          direction={"row"}
          gap={5}
          h="100%"
          w="100%"
          alignItems="center"
          justifyContent="space-evenly"
          p="20px"
        >
          <DadosPessoaisContainer data={data} />
          <GabineteContainer gabinete={data?.dados.ultimoStatus.gabinete} />
          <DadosEleitorais data={data!} />
        </Flex>
      </Box>

      <DeputadoDespesasContainer deputadoID={deputadoID} />
    </VStack>
  );
};

export default DadosGerais;
