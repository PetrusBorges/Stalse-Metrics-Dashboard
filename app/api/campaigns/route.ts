import { NextResponse } from "next/server";

export async function GET() {
  try {
    const mockData = [
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

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return NextResponse.json(mockData, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        error: "Failed to fetch campaigns",
      },
      { status: 500 },
    );
  }
}
