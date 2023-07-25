import { Box, HStack, VStack } from "@chakra-ui/react";

import { Dado } from "../../hooks/useDeputadoDespesas";

const InfoRow = ({ title, dado }: { title: string; dado: string }) => {
  return (
    <HStack w="100%">
      <Box flex={1} fontFamily="inter-medium" color="gray">
        {title}:
      </Box>

      <Box flex={1} fontFamily="inter-medium">
        {dado}
      </Box>
    </HStack>
  );
};

const NotaFiscal = ({ dado }: { dado: Dado }) => {
  function formatDate(data: any): string {
    let date;
    if (data instanceof Date) {
      date = data;
    } else {
      date = new Date(data);
    }

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatCPForCNPJ(value: string): string {
    const cleaned = ("" + value).replace(/\D/g, "");

    let formatado = "";

    if (cleaned.length === 11) {
      formatado = cleaned.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    } else if (cleaned.length === 14) {
      formatado = cleaned.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    } else {
      formatado = value;
    }

    return formatado;
  }

  return (
    <Box
      boxShadow="0px 2px 5px gray"
      p="10px 20px 10px 20px "
      w="100%"
      borderRadius="10px"
      mt="10px"
    >
      <VStack align="start">
        <InfoRow
          title="CPF/CNPJ do fornecedor"
          dado={formatCPForCNPJ(dado.cnpjCpfFornecedor)}
        />
        <InfoRow title="Nome do fornecedor" dado={dado.nomeFornecedor} />
        <InfoRow
          title="Data do documento"
          dado={formatDate(dado.dataDocumento)}
        />
      </VStack>
    </Box>
  );
};

export default NotaFiscal;
