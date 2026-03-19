import { ScrollDirectionProvider } from "@/context/ScrollDirectionContext";
import { HomeIntro, HomeNavigation, HomePortfolio } from "@/features";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <ScrollDirectionProvider>
      <HomeIntro />
      <HomePortfolio q={q} />
      <HomeNavigation />
    </ScrollDirectionProvider>
  );
}
