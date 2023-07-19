import {
  Heading,
  VStack,
  Spacer,
  Box,
  HStack,
  Divider,
} from "@chakra-ui/react";

import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";
import toTitleCase from "../../service/functions-services";
import InfoField from "./InfoField";

const DadosPessoaisContainer = ({
  data,
}: {
  data: DeputadoPerfilResponse | undefined;
}) => {
  function getDataNascimento(data: string | undefined): string {
    let newData = data?.split("-");
    if (newData) return `${newData[2]}/${newData[1]}/${newData[0]}`;
    return "-";
  }

  return (
    <Box flex={2} h="100%">
      <Heading size="md">Dados Pessoais</Heading>
      <Divider />
      <HStack h="100%" gap={5}>
        <Box flex={1} h="100%">
          <VStack>
            <InfoField
              title="Nome Civíl"
              data={toTitleCase(data?.dados.nomeCivil!)}
            />
            <InfoField
              title="Data Nascimento"
              data={getDataNascimento(data?.dados.dataNascimento.toString())}
            />
            <InfoField title="Escolaridade" data={data?.dados.escolaridade} />

            <Spacer />
          </VStack>
        </Box>
        <Box flex={1} h="100%">
          <VStack>
            <InfoField
              title="Município Nascimento"
              data={data?.dados.municipioNascimento}
            />
            <InfoField title="UF Nascimento" data={data?.dados.ufNascimento} />
            <Spacer />
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default DadosPessoaisContainer;
