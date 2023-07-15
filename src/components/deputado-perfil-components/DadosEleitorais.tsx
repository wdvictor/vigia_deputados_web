import {
  Center,
  Heading,
  VStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";
import InfoRow from "./InfoRow";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

const DadosEleitorais = ({ data }: { data: DeputadoPerfilResponse }) => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });
  return (
    <Box
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      w="350px"
      h={isLargeScreen ? "100%" : "350px"}
      p="20px"
    >
      <Center mb="20px">
        <Heading size="md">Dados Eleitorais</Heading>
      </Center>
      <VStack justifyContent="space-between">
        <InfoRow
          title="Condição Eleitoral"
          data={data?.dados.ultimoStatus.condicaoEleitoral}
        />
        <InfoRow title="Situação" data={data?.dados.ultimoStatus.situacao} />
      </VStack>
    </Box>
  );
};

export default DadosEleitorais;
