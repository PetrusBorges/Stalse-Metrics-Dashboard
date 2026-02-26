import { CenterContainer } from "@/components/ui/CenterContainer";
import { Header } from "@/components/ui/Header";
import { Skeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";
import { ChartSection } from "./_components/ChartSection";
import { CampaignSection } from "./_components/CampaignSection";

export default async function Home() {
  return (
    <>
      <Header />
      <CenterContainer className="space-y-2">
        <Suspense fallback={<Skeleton className="h-[350px] w-full" />}>
          <ChartSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-[460px] w-full" />}>
          <CampaignSection />
        </Suspense>
      </CenterContainer>
    </>
  );
}
