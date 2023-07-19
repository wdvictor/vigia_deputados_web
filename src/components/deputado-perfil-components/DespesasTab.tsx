import {
  Box,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
import GraficoDesespaTipo from "./GraficoDesespaTipo";
import { secondaryColor } from "../../custom-theme";
import GraficoDespesasBar from "./GraficoDespesasBar";

const DespesasTab = ({ deputadoID }: { deputadoID: number }) => {
  const year = new Date().getFullYear();

  const { data } = useDeputadoDespesa(deputadoID, year);

  return (
    <HStack w="100%" h="100%" align="start">
      <Box
        flex={1}
        maxH="90vh"
        border={`2px solid ${secondaryColor}`}
        borderRadius="20px"
      >
        <VStack h="100%" w="100%">
          <Text mt="5px" fontSize="1.5vw" fontFamily="inter-bold" color="gray">
            Distribuição de despesas
          </Text>
          <GraficoDesespaTipo data={data!} />
        </VStack>
      </Box>
      <Box flex={1} h="100%" maxH="100vh">
        <VStack h="90vh" w="100%">
          <Box
            flex={1}
            border={`2px solid ${secondaryColor}`}
            borderRadius="20px"
            w="100%"
            h="45vh"
          >
            <GraficoDespesasBar data={data!} />
          </Box>

          <Box
            flex={1}
            border={`2px solid ${secondaryColor}`}
            borderRadius="20px"
            w="100%"
            maxH="45vh"
            overflowY="scroll"
          >
            {data?.dados.map((d) => (
              <Box>{d.cnpjCpfFornecedor}</Box>
            ))}
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
};

export default DespesasTab;
