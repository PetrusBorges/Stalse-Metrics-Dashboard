"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/Chart";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "../ui/Skeleton";

const chartConfig = {
  totalClientes: {
    label: "Total de Clientes",
    color: "#3B82F6",
  },
  receitaMensal: {
    label: "Receita Mensal",
    color: "#35d389",
  },
  taxaConversao: {
    label: "Taxa de Conversão",
    color: "#f65c8a",
  },
} satisfies ChartConfig;

interface IChartManagerProps {
  isLoading?: boolean;
  title: string;
  description: string;
  chartData: {
    date: string;
    totalClientes: number;
    receitaMensal: number;
    taxaConversao: number;
  }[];
}

export const ChartManager = ({
  isLoading,
  title,
  description,
  chartData,
}: IChartManagerProps) => {
  const [timeRange, setTimeRange] = useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  if (isLoading) return <Skeleton className="h-[350px] w-full" />;

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 border-b border-gray-300 dark:border-gray-700 pb-4">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Button className="text-xs" onClick={() => setTimeRange("90d")}>
            90 Dias
          </Button>
          <Button className="text-xs" onClick={() => setTimeRange("30d")}>
            30 Dias
          </Button>
          <Button className="text-xs" onClick={() => setTimeRange("7d")}>
            7 Dias
          </Button>
        </div>
      </div>

      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <AreaChart data={filteredData}>
          <defs>
            <linearGradient id="fillTotalClientes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
            </linearGradient>

            <linearGradient id="fillReceitaMensal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#35d389" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#35d389" stopOpacity={0.05} />
            </linearGradient>

            <linearGradient id="fillTaxaConversao" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f65c8a" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f65c8a" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                labelFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
                indicator="dot"
              />
            }
          />
          <Area
            dataKey="totalClientes"
            type="natural"
            fill="url(#fillTotalClientes)"
            stroke="#3B82F6"
            strokeWidth={1.5}
          />

          <Area
            dataKey="receitaMensal"
            type="natural"
            fill="url(#fillReceitaMensal)"
            stroke="#35d389"
            strokeWidth={1.5}
          />

          <Area
            dataKey="taxaConversao"
            type="natural"
            fill="url(#fillTaxaConversao)"
            stroke="#f65c8a"
            strokeWidth={1.5}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
};
