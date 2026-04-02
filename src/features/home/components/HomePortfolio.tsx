import { PortfolioProjects } from "./portfolio/PortfolioProjects";

export function HomePortfolio({ q }: { q?: string }) {
  return (
    <div
      className="w-full min-h-screen py-20 px-5 sm:px-0 flex flex-col items-center justify-center"
      id="portfolio"
    >
      {/* <div className="w-full sm:w-150 p-6 sm:p-8 text-white rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(255,255,255,0.14)] shadow-[0px_8px_32px_rgba(0,0,0,0.15)] flex flex-col gap-8"> */}
      <PortfolioProjects q={q} />
      {/* </div> */}
    </div>
  );
}
