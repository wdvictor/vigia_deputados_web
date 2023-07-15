import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
import GraficoDespesasBar from "./GraficoDespesasBar";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import GraficoDesespaTipo from "./GraficoDesespaTipo";

ChartJS.register(ArcElement, Tooltip, Legend);

const DeputadoDespesasContainer = ({ deputadoID }: { deputadoID: number }) => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  const { data, isLoading } = useDeputadoDespesa(
    deputadoID,
    new Date().getFullYear()
  );

  return (
    <VStack
      h={isLargeScreen ? "100%" : "100%"}
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
      <Flex direction="column" h="100%" width="100%">
        <Box flex={1}>
          <Center h="100%" w="100%">
            <GraficoDespesasBar data={data!} />
          </Center>
        </Box>
        <Box flex={2}>
          <Center h="100%">
            <GraficoDesespaTipo data={data!} />
          </Center>
        </Box>
      </Flex>
    </VStack>
  );
};

export default DeputadoDespesasContainer;
