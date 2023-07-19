import { Heading, VStack, Box, Divider, HStack } from "@chakra-ui/react";

import InfoField from "./InfoField";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

const DadosEleitorais = ({ data }: { data: DeputadoPerfilResponse }) => {
  return (
    <Box>
      <Heading size="md" fontFamily="inter-bold" color="gray">
        Dados Eleitorais
      </Heading>
      <Divider />
      <HStack h="100%" gap={5} align="start">
        <Box flex={1}>
          <VStack>
            <InfoField
              title="Condição Eleitoral"
              data={data?.dados.ultimoStatus.condicaoEleitoral}
            />
            <InfoField
              title="Situação"
              data={data?.dados.ultimoStatus.situacao}
            />
          </VStack>
        </Box>
        <Box flex={1}></Box>
      </HStack>
    </Box>
  );
};

export default DadosEleitorais;
