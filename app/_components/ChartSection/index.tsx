import { getCharts } from "@/app/actions";
import { ChartManager } from "@/components/ChartManager";

export const ChartSection = async () => {
  const chartData = await getCharts();

  return (
    <ChartManager
      title="Desempenho de Clientes"
      description="Evolução de clientes, receita mensal e taxa de conversão nos últimos 90 dias."
      chartData={chartData}
    />
  );
};
