import { Heading, VStack, Box, Divider, Spacer } from "@chakra-ui/react";

import InfoField from "./InfoField";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

const DadosEleitorais = ({ data }: { data: DeputadoPerfilResponse }) => {
  return (
    <Box flex={1} h="100%">
      <Heading size="md">Dados Eleitorais</Heading>
      <Divider />
      <VStack h="100%">
        <InfoField
          title="Condição Eleitoral"
          data={data?.dados.ultimoStatus.condicaoEleitoral}
        />
        <InfoField title="Situação" data={data?.dados.ultimoStatus.situacao} />
        <Spacer />
      </VStack>
    </Box>
  );
};

export default DadosEleitorais;
