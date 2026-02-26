import { ChartManager } from "@/components/ChartManager";
import { CenterContainer } from "@/components/ui/CenterContainer";
import { Header } from "@/components/ui/Header";
import { Table } from "@/components/ui/Table";

export default function Home() {
  const chartData = [
    {
      date: "2024-04-01",
      totalClientes: 222,
      receitaMensal: 150,
      taxaConversao: 2.4,
    },
    {
      date: "2024-04-02",
      totalClientes: 97,
      receitaMensal: 180,
      taxaConversao: 2.1,
    },
    {
      date: "2024-04-03",
      totalClientes: 167,
      receitaMensal: 120,
      taxaConversao: 1.8,
    },
    {
      date: "2024-04-04",
      totalClientes: 242,
      receitaMensal: 260,
      taxaConversao: 1.5,
    },
    {
      date: "2024-04-05",
      totalClientes: 373,
      receitaMensal: 290,
      taxaConversao: 1.2,
    },
    {
      date: "2024-04-06",
      totalClientes: 301,
      receitaMensal: 340,
      taxaConversao: 1.2,
    },
    {
      date: "2024-04-07",
      totalClientes: 245,
      receitaMensal: 180,
      taxaConversao: 0.9,
    },
    {
      date: "2024-04-08",
      totalClientes: 409,
      receitaMensal: 320,
      taxaConversao: 0.6,
    },
    {
      date: "2024-04-09",
      totalClientes: 59,
      receitaMensal: 110,
      taxaConversao: 0.6,
    },
    {
      date: "2024-04-10",
      totalClientes: 261,
      receitaMensal: 190,
      taxaConversao: 0.3,
    },
    {
      date: "2024-04-11",
      totalClientes: 327,
      receitaMensal: 350,
      taxaConversao: 0.1,
    },
    {
      date: "2024-04-12",
      totalClientes: 292,
      receitaMensal: 210,
      taxaConversao: 0.2,
    },
    {
      date: "2024-04-13",
      totalClientes: 342,
      receitaMensal: 380,
      taxaConversao: 0.4,
    },
    {
      date: "2024-04-14",
      totalClientes: 137,
      receitaMensal: 220,
      taxaConversao: 0.5,
    },
    {
      date: "2024-04-15",
      totalClientes: 120,
      receitaMensal: 170,
      taxaConversao: 0.6,
    },
    {
      date: "2024-04-16",
      totalClientes: 138,
      receitaMensal: 190,
      taxaConversao: 1.1,
    },
    {
      date: "2024-04-17",
      totalClientes: 446,
      receitaMensal: 360,
      taxaConversao: 0.7,
    },
    {
      date: "2024-04-18",
      totalClientes: 364,
      receitaMensal: 410,
      taxaConversao: 0.8,
    },
    {
      date: "2024-04-19",
      totalClientes: 243,
      receitaMensal: 180,
      taxaConversao: 1.6,
    },
    {
      date: "2024-04-20",
      totalClientes: 89,
      receitaMensal: 150,
      taxaConversao: 0.9,
    },
    {
      date: "2024-04-21",
      totalClientes: 137,
      receitaMensal: 200,
      taxaConversao: 1.3,
    },
    {
      date: "2024-04-22",
      totalClientes: 224,
      receitaMensal: 170,
      taxaConversao: 1.0,
    },
    {
      date: "2024-04-23",
      totalClientes: 138,
      receitaMensal: 230,
      taxaConversao: 1.1,
    },
    {
      date: "2024-04-24",
      totalClientes: 387,
      receitaMensal: 290,
      taxaConversao: 2.2,
    },
    {
      date: "2024-04-25",
      totalClientes: 215,
      receitaMensal: 250,
      taxaConversao: 1.2,
    },
    {
      date: "2024-04-26",
      totalClientes: 75,
      receitaMensal: 130,
      taxaConversao: 0.8,
    },
    {
      date: "2024-04-27",
      totalClientes: 383,
      receitaMensal: 420,
      taxaConversao: 2.5,
    },
    {
      date: "2024-04-28",
      totalClientes: 122,
      receitaMensal: 180,
      taxaConversao: 1.4,
    },
    {
      date: "2024-04-29",
      totalClientes: 315,
      receitaMensal: 240,
      taxaConversao: 1.9,
    },
    {
      date: "2024-04-30",
      totalClientes: 454,
      receitaMensal: 380,
      taxaConversao: 2.7,
    },

    {
      date: "2024-05-01",
      totalClientes: 165,
      receitaMensal: 220,
      taxaConversao: 1.5,
    },
    {
      date: "2024-05-02",
      totalClientes: 293,
      receitaMensal: 310,
      taxaConversao: 2.0,
    },
    {
      date: "2024-05-03",
      totalClientes: 247,
      receitaMensal: 190,
      taxaConversao: 1.3,
    },
    {
      date: "2024-05-04",
      totalClientes: 385,
      receitaMensal: 420,
      taxaConversao: 2.8,
    },
    {
      date: "2024-05-05",
      totalClientes: 481,
      receitaMensal: 390,
      taxaConversao: 3.1,
    },
    {
      date: "2024-05-06",
      totalClientes: 498,
      receitaMensal: 520,
      taxaConversao: 3.4,
    },
    {
      date: "2024-05-07",
      totalClientes: 388,
      receitaMensal: 300,
      taxaConversao: 2.2,
    },
    {
      date: "2024-05-08",
      totalClientes: 149,
      receitaMensal: 210,
      taxaConversao: 1.0,
    },
    {
      date: "2024-05-09",
      totalClientes: 227,
      receitaMensal: 180,
      taxaConversao: 1.4,
    },
    {
      date: "2024-05-10",
      totalClientes: 293,
      receitaMensal: 330,
      taxaConversao: 2.3,
    },
    {
      date: "2024-05-11",
      totalClientes: 335,
      receitaMensal: 270,
      taxaConversao: 2.0,
    },
    {
      date: "2024-05-12",
      totalClientes: 197,
      receitaMensal: 240,
      taxaConversao: 1.6,
    },
    {
      date: "2024-05-13",
      totalClientes: 197,
      receitaMensal: 160,
      taxaConversao: 1.2,
    },
    {
      date: "2024-05-14",
      totalClientes: 448,
      receitaMensal: 490,
      taxaConversao: 3.3,
    },
    {
      date: "2024-05-15",
      totalClientes: 473,
      receitaMensal: 380,
      taxaConversao: 2.9,
    },
    {
      date: "2024-05-16",
      totalClientes: 338,
      receitaMensal: 400,
      taxaConversao: 2.4,
    },
    {
      date: "2024-05-17",
      totalClientes: 499,
      receitaMensal: 420,
      taxaConversao: 3.6,
    },
    {
      date: "2024-05-18",
      totalClientes: 315,
      receitaMensal: 350,
      taxaConversao: 2.1,
    },
    {
      date: "2024-05-19",
      totalClientes: 235,
      receitaMensal: 180,
      taxaConversao: 1.4,
    },
    {
      date: "2024-05-20",
      totalClientes: 177,
      receitaMensal: 230,
      taxaConversao: 1.3,
    },
    {
      date: "2024-05-21",
      totalClientes: 82,
      receitaMensal: 140,
      taxaConversao: 0.7,
    },
    {
      date: "2024-05-22",
      totalClientes: 81,
      receitaMensal: 120,
      taxaConversao: 0.6,
    },
    {
      date: "2024-05-23",
      totalClientes: 252,
      receitaMensal: 290,
      taxaConversao: 1.8,
    },
    {
      date: "2024-05-24",
      totalClientes: 294,
      receitaMensal: 220,
      taxaConversao: 1.7,
    },
    {
      date: "2024-05-25",
      totalClientes: 201,
      receitaMensal: 250,
      taxaConversao: 1.5,
    },
    {
      date: "2024-05-26",
      totalClientes: 213,
      receitaMensal: 170,
      taxaConversao: 1.1,
    },
    {
      date: "2024-05-27",
      totalClientes: 420,
      receitaMensal: 460,
      taxaConversao: 3.0,
    },
    {
      date: "2024-05-28",
      totalClientes: 233,
      receitaMensal: 190,
      taxaConversao: 1.4,
    },
    {
      date: "2024-05-29",
      totalClientes: 78,
      receitaMensal: 130,
      taxaConversao: 0.5,
    },
    {
      date: "2024-05-30",
      totalClientes: 340,
      receitaMensal: 280,
      taxaConversao: 2.2,
    },
    {
      date: "2024-05-31",
      totalClientes: 178,
      receitaMensal: 230,
      taxaConversao: 1.3,
    },

    {
      date: "2024-06-01",
      totalClientes: 178,
      receitaMensal: 200,
      taxaConversao: 1.1,
    },
    {
      date: "2024-06-02",
      totalClientes: 470,
      receitaMensal: 410,
      taxaConversao: 3.2,
    },
    {
      date: "2024-06-03",
      totalClientes: 103,
      receitaMensal: 160,
      taxaConversao: 0.9,
    },
    {
      date: "2024-06-04",
      totalClientes: 439,
      receitaMensal: 380,
      taxaConversao: 2.8,
    },
    {
      date: "2024-06-05",
      totalClientes: 88,
      receitaMensal: 140,
      taxaConversao: 0.7,
    },
    {
      date: "2024-06-06",
      totalClientes: 294,
      receitaMensal: 250,
      taxaConversao: 1.9,
    },
    {
      date: "2024-06-07",
      totalClientes: 323,
      receitaMensal: 370,
      taxaConversao: 2.4,
    },
    {
      date: "2024-06-08",
      totalClientes: 385,
      receitaMensal: 320,
      taxaConversao: 2.5,
    },
    {
      date: "2024-06-09",
      totalClientes: 438,
      receitaMensal: 480,
      taxaConversao: 3.4,
    },
    {
      date: "2024-06-10",
      totalClientes: 155,
      receitaMensal: 200,
      taxaConversao: 1.2,
    },
    {
      date: "2024-06-11",
      totalClientes: 92,
      receitaMensal: 150,
      taxaConversao: 0.6,
    },
    {
      date: "2024-06-12",
      totalClientes: 492,
      receitaMensal: 420,
      taxaConversao: 3.7,
    },
    {
      date: "2024-06-13",
      totalClientes: 81,
      receitaMensal: 130,
      taxaConversao: 0.5,
    },
    {
      date: "2024-06-14",
      totalClientes: 426,
      receitaMensal: 380,
      taxaConversao: 2.9,
    },
    {
      date: "2024-06-15",
      totalClientes: 307,
      receitaMensal: 350,
      taxaConversao: 2.1,
    },
    {
      date: "2024-06-16",
      totalClientes: 371,
      receitaMensal: 310,
      taxaConversao: 2.3,
    },
    {
      date: "2024-06-17",
      totalClientes: 475,
      receitaMensal: 520,
      taxaConversao: 3.8,
    },
    {
      date: "2024-06-18",
      totalClientes: 107,
      receitaMensal: 170,
      taxaConversao: 0.9,
    },
    {
      date: "2024-06-19",
      totalClientes: 341,
      receitaMensal: 290,
      taxaConversao: 2.0,
    },
    {
      date: "2024-06-20",
      totalClientes: 408,
      receitaMensal: 450,
      taxaConversao: 3.1,
    },
    {
      date: "2024-06-21",
      totalClientes: 169,
      receitaMensal: 210,
      taxaConversao: 1.2,
    },
    {
      date: "2024-06-22",
      totalClientes: 317,
      receitaMensal: 270,
      taxaConversao: 2.1,
    },
    {
      date: "2024-06-23",
      totalClientes: 480,
      receitaMensal: 530,
      taxaConversao: 3.9,
    },
    {
      date: "2024-06-24",
      totalClientes: 132,
      receitaMensal: 180,
      taxaConversao: 1.0,
    },
    {
      date: "2024-06-25",
      totalClientes: 141,
      receitaMensal: 190,
      taxaConversao: 1.3,
    },
    {
      date: "2024-06-26",
      totalClientes: 434,
      receitaMensal: 380,
      taxaConversao: 2.7,
    },
    {
      date: "2024-06-27",
      totalClientes: 448,
      receitaMensal: 490,
      taxaConversao: 3.3,
    },
    {
      date: "2024-06-28",
      totalClientes: 149,
      receitaMensal: 200,
      taxaConversao: 1.1,
    },
    {
      date: "2024-06-29",
      totalClientes: 103,
      receitaMensal: 160,
      taxaConversao: 0.8,
    },
    {
      date: "2024-06-30",
      totalClientes: 446,
      receitaMensal: 400,
      taxaConversao: 3.0,
    },
  ];

  const campaignsData = [
    {
      nome: "Black Friday 2026",
      canal: "Google Ads",
      status: "Ativa",
      investimento: 15000,
    },
    {
      nome: "Lançamento Produto X",
      canal: "Instagram",
      status: "Ativa",
      investimento: 8000,
    },
    {
      nome: "Retargeting Fevereiro",
      canal: "Facebook Ads",
      status: "Pausada",
      investimento: 5000,
    },
    {
      nome: "Campanha Influenciadores",
      canal: "TikTok",
      status: "Ativa",
      investimento: 12000,
    },
    {
      nome: "Promoção Carnaval",
      canal: "Email",
      status: "Pausada",
      investimento: 2000,
    },
    {
      nome: "Branding Institucional",
      canal: "YouTube",
      status: "Ativa",
      investimento: 18000,
    },
    {
      nome: "Remarketing E-commerce",
      canal: "Google Ads",
      status: "Ativa",
      investimento: 9500,
    },
    {
      nome: "Leads B2B Março",
      canal: "LinkedIn",
      status: "Pausada",
      investimento: 7000,
    },
    {
      nome: "Cupom Primeira Compra",
      canal: "Instagram",
      status: "Ativa",
      investimento: 6000,
    },
    {
      nome: "Teste A/B Landing Page",
      canal: "Google Ads",
      status: "Pausada",
      investimento: 4000,
    },
    {
      nome: "Expansão Regional Nordeste",
      canal: "Facebook Ads",
      status: "Ativa",
      investimento: 11000,
    },
    {
      nome: "Campanha Datas Comemorativas",
      canal: "TikTok",
      status: "Ativa",
      investimento: 9000,
    },
    {
      nome: "Reativação de Clientes",
      canal: "Email",
      status: "Pausada",
      investimento: 3000,
    },
    {
      nome: "Awareness Nova Marca",
      canal: "YouTube",
      status: "Ativa",
      investimento: 14000,
    },
    {
      nome: "Parceria Estratégica 2026",
      canal: "LinkedIn",
      status: "Pausada",
      investimento: 10000,
    },
  ];

  const campaignsColumns = [
    { header: "Nome", accessor: "nome" },
    { header: "Canal", accessor: "canal" },
    { header: "Status", accessor: "status" },
    { header: "Investimento", accessor: "investimento" },
  ];

  return (
    <>
      <Header />
      <CenterContainer className="space-y-2">
        <ChartManager
          title="Desempenho de Clientes"
          description="Evolução de clientes, receita mensal e taxa de conversão nos últimos 90 dias."
          chartData={chartData}
          isLoading={false}
        />

        <Table
          title="Campanhas"
          description="Campanhas ativas e pausadas."
          data={campaignsData}
          columns={campaignsColumns}
          isLoading={false}
        />
      </CenterContainer>
    </>
  );
}
