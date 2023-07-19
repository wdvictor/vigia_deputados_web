import { Box, Flex, Spacer } from "@chakra-ui/react";
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
    <Flex w="100%" h="100%" direction="column" overflow="hidden" gap="5">
      <Flex
        direction={"row"}
        gap={5}
        h="100%"
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        p="20px"
        flex={1}
      >
        <DadosPessoaisContainer data={data} />
        <GabineteContainer gabinete={data?.dados.ultimoStatus.gabinete} />
        <DadosEleitorais data={data!} />
      </Flex>
      <Box flex={2}>
        <DeputadoDespesasContainer deputadoID={deputadoID} />
      </Box>
      <Spacer />
    </Flex>
  );
};

export default DadosGerais;
