import { Center, Heading, VStack, Spacer, Box } from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";
import GabineteInfoRow from "./GabineteInfoRow";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";
import toTitleCase from "../../service/functions-services";

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
      h="350px"
      w="350px"
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      textColor="black"
      p="20px"
    >
      <Center h="20%">
        <Heading size="md">Dados Pessoais</Heading>
      </Center>
      <VStack h="70%" justifyContent="space-around">
        <GabineteInfoRow
          title="Nome Civíl"
          data={toTitleCase(data?.dados.nomeCivil!)}
        />
        <GabineteInfoRow
          title="Data Nascimento"
          data={getDataNascimento(data?.dados.dataNascimento.toString())}
        />
        <GabineteInfoRow title="Escolaridade" data={data?.dados.escolaridade} />
        <GabineteInfoRow
          title="Município Nascimento"
          data={data?.dados.municipioNascimento}
        />
        <GabineteInfoRow
          title="UF Nascimento"
          data={data?.dados.ufNascimento}
        />

        <Spacer />
      </VStack>
    </Box>
  );
};

export default DadosPessoaisContainer;
