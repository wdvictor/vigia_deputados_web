import {
  Box,
  Center,
  Heading,
  Spinner,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

import useDeputadoDespesa, {
  DeputadoDespesaResponse,
} from "../../hooks/useDeputadoDespesas";

const DeputadoDespesasContainer = ({ deputadoID }: { deputadoID: number }) => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });
  const currentYear: number = new Date().getFullYear();
  const { data, isLoading, error } = useDeputadoDespesa(
    deputadoID,
    currentYear
  );

  let chartLabels = new Set();
  let chartData: Map<number, number> = new Map();
  function createChartLabels() {
    if (data?.dados) {
      for (let d of data.dados) {
        if (chartData.has(d.mes)) {
          chartData.set(d.mes, d.valorDocumento + chartData.get(d.mes)!);
        } else {
          chartData.set(d.mes, d.valorDocumento);
        }
      }
    }

    console.warn(chartData);
  }
  createChartLabels();
  return (
    <Box
      mt="5%"
      h={isLargeScreen ? "90%" : "25%"}
      w={isLargeScreen ? "70%" : "350px"}
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      textColor="black"
      alignSelf={isLargeScreen ? "start" : "center"}
    >
      {isLoading && (
        <Box
          display="flex"
          h="100%"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Box>
      )}
      <Center h="2%">
        <Heading size="md" mt="30px">
          Despesas
        </Heading>
      </Center>
      <VStack h="70%" justifyContent="space-around"></VStack>
    </Box>
  );
};

export default DeputadoDespesasContainer;
