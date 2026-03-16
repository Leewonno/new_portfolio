import { ScrollDirectionProvider } from "@/context/ScrollDirectionContext";
import { HomeIntro, HomeNavigation, HomePortfolio } from "@/features";

export default function Home() {
  return (
    <ScrollDirectionProvider>
      <HomeIntro />
      <HomePortfolio />
      <HomeNavigation />
    </ScrollDirectionProvider>
  );
}
