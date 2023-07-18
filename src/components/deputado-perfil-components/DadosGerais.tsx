import { Flex, Spacer, useBreakpointValue } from "@chakra-ui/react";
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
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });
  return (
    <Flex
      w="100%"
      h="100%"
      direction={isLargeScreen ? "row" : "column"}
      overflow="hidden"
      gap="5"
    >
      <Flex direction={"column"} gap={5} h="100%" alignItems="center">
        <DadosPessoaisContainer data={data} />
        <GabineteContainer gabinete={data?.dados.ultimoStatus.gabinete} />
        <DadosEleitorais data={data!} />
      </Flex>

      <DeputadoDespesasContainer deputadoID={deputadoID} />
      <Spacer />
    </Flex>
  );
};

export default DadosGerais;
