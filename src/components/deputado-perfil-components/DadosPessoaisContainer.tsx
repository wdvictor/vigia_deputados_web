import { Center, Heading, VStack, Spacer, Box } from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";
import toTitleCase from "../../service/functions-services";
import InfoRow from "./InfoRow";

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
    <Box
      w="350px"
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      textColor="black"
      p="20px"
    >
      <Center pb="20px">
        <Heading size="md">Dados Pessoais</Heading>
      </Center>
      <VStack h="70%" justifyContent="space-around">
        <InfoRow
          title="Nome Civíl"
          data={toTitleCase(data?.dados.nomeCivil!)}
        />
        <InfoRow
          title="Data Nascimento"
          data={getDataNascimento(data?.dados.dataNascimento.toString())}
        />
        <InfoRow title="Escolaridade" data={data?.dados.escolaridade} />
        <InfoRow
          title="Município Nascimento"
          data={data?.dados.municipioNascimento}
        />
        <InfoRow title="UF Nascimento" data={data?.dados.ufNascimento} />

        <Spacer />
      </VStack>
    </Box>
  );
};

export default DadosPessoaisContainer;
