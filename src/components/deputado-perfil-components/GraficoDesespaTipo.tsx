import { Bar, Pie } from "react-chartjs-2";
import {
  spanishGreen,
  mineralGreen,
  bitter,
  woodrush,
  primaryColor,
  secondaryColor,
} from "../../custom-theme";
import { DeputadoDespesaResponse } from "../../hooks/useDeputadoDespesas";

const GraficoDesespaTipo = ({ data }: { data: DeputadoDespesaResponse }) => {
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
        align: "start" as const,
      },
      title: {
        display: false,
      },
    },
  };
  return <Pie data={chartData} options={options} />;
};

export default GraficoDesespaTipo;