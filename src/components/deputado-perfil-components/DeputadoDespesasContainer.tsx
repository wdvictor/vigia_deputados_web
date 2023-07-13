import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  bitter,
  mineralGreen,
  primaryColor,
  secondaryColor,
  spanishGreen,
  woodrush,
} from "../../custom-theme";

import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
import GraficoDespesasBar from "./GraficoDespesasBar";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DeputadoDespesasContainer = ({ deputadoID }: { deputadoID: number }) => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });

  const { data, isLoading, error } = useDeputadoDespesa(
    deputadoID,
    new Date().getFullYear()
  );

  let tipoDespesas: Map<string, number> = new Map();
  function createChartInfo() {
    if (data?.dados) {
      for (let d of data?.dados) {
        if (tipoDespesas.has(d.tipoDespesa)) {
          tipoDespesas.set(
            d.tipoDespesa,
            d.valorDocumento + tipoDespesas.get(d.tipoDespesa)!
          );
        } else {
          tipoDespesas.set(d.tipoDespesa, d.valorDocumento);
        }
      }
    }
  }
  createChartInfo();
  const chartColors = [
    spanishGreen,
    mineralGreen,
    bitter,
    woodrush,
    primaryColor,
    secondaryColor,
  ];

  const chartData = {
    labels: [...tipoDespesas.keys()],
    datasets: [
      {
        label: "Tipo de despesas",
        data: [...tipoDespesas.values()],
        backgroundColor: [...tipoDespesas.entries()].map(
          (v, index) => chartColors[index]
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    scale: 2,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <VStack
      mt="5%"
      h={isLargeScreen ? "100%" : "40%"}
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
        <Box flex={1}>
          <Center h="100%">
            <Pie data={chartData} options={options} />
          </Center>
        </Box>
      </Flex>
    </VStack>
  );
};

export default DeputadoDespesasContainer;
