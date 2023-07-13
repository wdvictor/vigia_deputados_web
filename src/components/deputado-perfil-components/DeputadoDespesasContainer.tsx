import {
  Box,
  Center,
  Heading,
  Spinner,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { primaryColor, secondaryColor } from "../../custom-theme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
export const options = {
  // responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

const chartLabels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

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

  let chartData: Map<string, number> = new Map();
  function createChartInfo() {
    let despesasMap: Map<number, number> = new Map();
    if (data?.dados) {
      for (let d of data.dados) {
        if (despesasMap.has(d.mes)) {
          despesasMap.set(d.mes, d.valorDocumento + despesasMap.get(d.mes)!);
        } else {
          despesasMap.set(d.mes, d.valorDocumento);
        }
      }
    }
    for (let d of despesasMap) {
      chartData.set(chartLabels[d[0] - 1], d[1]);
    }
  }
  createChartInfo();

  const labels: string[] = [...chartData.keys()];
  const d: number[] = [...chartData.values()].map((value) =>
    parseFloat(value.toFixed(2))
  );
  console.log(d);
  const chartInfo = {
    labels,
    datasets: [
      {
        label: `Despesas ${currentYear}`,
        data: d,
        backgroundColor: primaryColor,
      },
    ],
  };

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

      <Bar data={chartInfo} options={options} />
    </Box>
  );
};

export default DeputadoDespesasContainer;
