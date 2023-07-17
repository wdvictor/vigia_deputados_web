import { Pie } from "react-chartjs-2";
import {
  mineralGreen,
  bitter,
  woodrush,
  primaryColor,
  secondaryColor,
} from "../../custom-theme";
import { DeputadoDespesaResponse } from "../../hooks/useDeputadoDespesas";
import { Box, Flex, IconButton, Spacer, useToast } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const GraficoDesespaTipo = ({ data }: { data: DeputadoDespesaResponse }) => {
  const toast = useToast();

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
    woodrush,
    mineralGreen,
    bitter,
    primaryColor,
    secondaryColor,
    "#49625E",
    "red",
    "black",
  ];

  let tipoDespesasOrdenadas: Map<string, number> = new Map();
  function sortTipoDespesasData() {
    let dadosLength = [...tipoDespesas.entries()].length;
    let x = 0;
    let t = "";
    for (let i = 0; i < dadosLength; i++) {
      for (let value of tipoDespesas.entries()) {
        if (!tipoDespesasOrdenadas.has(value[0])) {
          if (value[1] > x) {
            x = value[1];
            t = value[0];
          }
        }
      }
      tipoDespesasOrdenadas.set(t, x);
      t = "";
      x = 0;
    }
  }
  sortTipoDespesasData();

  const chartData = {
    labels: [...tipoDespesasOrdenadas.keys()],

    datasets: [
      {
        label: "Tipo de despesas",
        data: [...tipoDespesasOrdenadas.values()],
        backgroundColor: [...tipoDespesasOrdenadas.entries()].map(
          (_, index) => chartColors[index]
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "start" as const,
      },
      title: {
        display: false,
      },
    },
  };
  return (
    <Flex w="100%" h="100%" alignItems="end">
      <IconButton
        m="10px"
        size="lg"
        icon={<AiOutlineInfoCircle />}
        aria-label="copy-icon"
        color={secondaryColor}
        border={`1px solid ${secondaryColor}`}
        onClick={() =>
          toast({
            position: "bottom",
            status: "info",
            render: () => (
              <Box
                color="white"
                m="50px"
                p={5}
                borderRadius="20px"
                bg={secondaryColor}
                fontFamily={"inter-bold"}
                textAlign="center"
              >
                Você pode clicar nas legendas do gráfico para manipular os dados
              </Box>
            ),
          })
        }
      />
      <Spacer />
      <Pie data={chartData} options={options} style={{ padding: "30px" }} />
      <Spacer />
    </Flex>
  );
};

export default GraficoDesespaTipo;
