import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Link,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";

import { Dado } from "../../hooks/useDeputadoDespesas";
import { AiOutlineFilePdf } from "react-icons/ai";
const InfoRow = ({ title, dado }: { title: string; dado: string }) => {
  return (
    <HStack w="100%" pl="20px" pr="20px">
      <Box flex={1} fontFamily="inter-medium" color="gray">
        {title}:
      </Box>

      <Box
        flex={1}
        fontFamily="inter-light"
        color="black
      "
      >
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

    let day = date.getDate().toString();
    if (day.length === 1) {
      day = `0${day}`;
    }
    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) {
      month = `0${month}`;
    }
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

  function formatToReal(value: number): string {
    return (
      "R$ " +
      value
        .toFixed(2)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
    );
  }

  return (
    <Box
      boxShadow="0px 5px 10px gray"
      w="100%"
      borderRadius="10px"
      mt="10px"
      key={dado.codDocumento}
    >
      <VStack align="start" pt="10px">
        <Text
          mb="0"
          ml="20px"
          color="gray"
          fontFamily="inter-bold"
          fontSize="13px"
        >
          {formatDate(dado.dataDocumento)}
        </Text>
        <Divider m="0" />
        <InfoRow title="Valor" dado={formatToReal(dado.valorDocumento)} />
        <InfoRow
          title="Tipo da despesa"
          dado={dado.tipoDespesa.toLocaleLowerCase()}
        />
        <Link
          href={dado.urlDocumento}
          target="_blank"
          rel="noopener noreferrer"
          h="30px"
          w="100%"
          bg="red"
          borderRadius="0px 0px 10px 10px"
          p="5px 0px 5px 0px"
        >
          <Center>
            <Icon color="white" as={AiOutlineFilePdf} boxSize="20px" />
          </Center>
        </Link>
      </VStack>
    </Box>
  );
};

export default NotaFiscal;
