import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
import GraficoDesespaTipo from "./GraficoDesespaTipo";
import { secondaryColor } from "../../custom-theme";
import GraficoDespesasBar from "./GraficoDespesasBar";

const DespesasTab = ({ deputadoID }: { deputadoID: number }) => {
  const year = new Date().getFullYear();

  const { data } = useDeputadoDespesa(deputadoID, year);

  return (
    <HStack align="start">
      <Box
        flex={1}
        maxH="95vh"
        border={`2px solid ${secondaryColor}`}
        borderRadius="20px"
      >
        <VStack h="90vh" overflowY="clip">
          <Text mt="5px" fontSize="1.5vw" fontFamily="inter-bold" color="gray">
            Distribuição de despesas
          </Text>
          <Box w="30vw">
            <GraficoDesespaTipo data={data!} />
          </Box>
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
