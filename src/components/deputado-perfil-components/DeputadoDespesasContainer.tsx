import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Spinner,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { secondaryColor, whiteLilac } from "../../custom-theme";

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
    <Box flex={2} h="45%" w="100%" p="20px">
      <HStack alignItems="center" h="100%">
        <Box
          flex={1}
          bg={whiteLilac}
          borderRadius="10px"
          p="10px"
          h="100%"
          w="100%"
        >
          <GraficoDespesasBar data={data!} />
        </Box>

        <Box
          flex={1}
          bg={whiteLilac}
          borderRadius="10px"
          p="10px"
          h="100%"
          w="100%"
        >
          <GraficoDesespaTipo data={data!} />
        </Box>
      </HStack>
    </Box>
  );
};

export default DeputadoDespesasContainer;
