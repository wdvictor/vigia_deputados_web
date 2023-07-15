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
import { DeputadoDespesaResponse } from "../../hooks/useDeputadoDespesas";
import { primaryColor } from "../../custom-theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

const GraficoDespesasBar = ({ data }: { data: DeputadoDespesaResponse }) => {
  const currentYear: number = new Date().getFullYear();
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

  const labels: string[] = [...chartData.keys()].reverse();
  const chartInfo = {
    labels,
    datasets: [
      {
        label: `Despesas ${currentYear}`,
        data: [...chartData.values()]
          .map((value) => parseFloat(value.toFixed(2)))
          .reverse(),
        backgroundColor: primaryColor,
      },
    ],
  };
  return <Bar data={chartInfo} options={options} />;
};

export default GraficoDespesasBar;
