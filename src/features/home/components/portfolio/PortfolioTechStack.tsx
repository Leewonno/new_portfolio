type Category = "frontend" | "language" | "backend";

interface Tech {
  name: string;
  category: Category;
}

const TECH_STACK: Tech[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tanstack", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "JQuery", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "NestJS", category: "backend" },
];

const CATEGORY_STYLE: Record<Category, string> = {
  frontend: "bg-[rgba(96,165,250,0.15)] text-blue-200",
  language: "bg-[rgba(213,250,139,0.15)] text-yellow-200",
  backend: "bg-[rgba(52,211,153,0.15)] text-emerald-200",
};

export function PortfolioTechStack() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs text-white/40 tracking-widest uppercase">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {TECH_STACK.map((tech, index) => (
          <span
            key={`${tech.name}-${index}`}
            className={`px-3 py-1 mb-1 text-xs sm:text-sm rounded-full border ${CATEGORY_STYLE[tech.category]}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
