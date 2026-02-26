import { getCampaigns } from "@/app/actions";
import { Table } from "@/components/ui/Table";

export const CampaignSection = async () => {
  const campaignsData = await getCampaigns();

  const campaignsColumns = [
    { header: "Nome", accessor: "nome" },
    { header: "Canal", accessor: "canal" },
    { header: "Status", accessor: "status" },
    { header: "Investimento", accessor: "investimento" },
  ];
  return (
    <Table
      title="Campanhas"
      description="Campanhas ativas e pausadas."
      data={campaignsData}
      columns={campaignsColumns}
    />
  );
};
