# Stalse Metrics Dashboard

Painel de métricas construído com Next.js, React 19 e Tailwind CSS. Exibe gráficos de desempenho de clientes e dados de campanhas em uma interface responsiva com suporte a tema claro/escuro.

🚀 **Demo ao vivo:** [https://stalse-metrics-dashboard.vercel.app/](https://stalse-metrics-dashboard.vercel.app/)

## Tecnologias

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2
- **Estilização:** Tailwind CSS 4
- **Gráficos:** Recharts
- **Componentes UI:** Radix UI, Lucide React
- **Linguagem:** TypeScript

## Pré-requisitos

Antes de rodar este projeto, certifique-se de ter:

- **Node.js** 18.18 ou superior (ou 20.9+)
- **npm** 10+ (ou **pnpm**, **yarn**, **bun**)

Para verificar suas versões:

```bash
node --version
npm --version
```

## Passo a passo: Como rodar

### 1. Clone o repositório

```bash
git clone <url-do-repositório>
cd Stalse-Metrics-Dashboard
```

### 2. Instale as dependências

```bash
npm install
```

Ou com outro gerenciador de pacotes:

```bash
pnpm install
# ou
yarn install
# ou
bun install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Ou:

```bash
pnpm dev
# ou
yarn dev
# ou
bun dev
```

### 4. Abra o app

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

O painel roda na porta `3000` por padrão. O servidor de desenvolvimento usa hot reload, então alterações no código atualizam a página automaticamente.

## Scripts disponíveis

| Comando         | Descrição                                         |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento (hot reload) |
| `npm run build` | Gera o build de produção otimizado                |
| `npm run start` | Roda o build de produção (rode `build` antes)     |
| `npm run lint`  | Executa o ESLint                                  |

## Estrutura do projeto

```
├── app/
│   ├── _components/     # Componentes de página (ChartSection, CampaignSection)
│   ├── api/             # Rotas de API (charts, campaigns)
│   ├── simulate/        # Página de simulação de erro
│   ├── actions.ts       # Server actions
│   ├── page.tsx         # Página inicial
│   └── error.tsx        # Error boundary
├── components/
│   ├── ChartManager/    # Componente de gráficos
│   └── ui/              # Componentes UI reutilizáveis (Header, Table, Button, etc.)
```

## Funcionalidades

- **Gráficos:** Métricas de desempenho de clientes (evolução em 90 dias)
- **Tabela de campanhas:** Campanhas ativas e pausadas
- **Alternar tema:** Alternar entre modo claro e escuro
- **Error boundary:** Tratamento de erros com página de simulação em `/simulate`

## Build para produção

```bash
npm run build
npm run start
```

Depois acesse [http://localhost:3000](http://localhost:3000).

## Deploy

Este projeto está hospedado na Vercel:

🔗 **Produção:** [https://stalse-metrics-dashboard.vercel.app/](https://stalse-metrics-dashboard.vercel.app/)
