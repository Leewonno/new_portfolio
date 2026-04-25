const EXPERIENCES = [
  {
    company: "이로운소프트",
    role: "Frontend",
    period: "2025.12 ~ 2026.03",
    description: "ERP 서비스 개발",
  },
  {
    company: "서울소프트",
    role: "Fullstack",
    period: "2024.04 ~ 2025.11",
    description: "ERP 서비스 개발",
  },
];

export function ResumeExperience() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs text-white/40 tracking-widest uppercase">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.company}
            className="p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex flex-col gap-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{exp.company}</span>
              <span className="text-xs text-white/40">{exp.period}</span>
            </div>
            <span className="text-xs sm:text-sm text-white/50 uppercase">
              {exp.role}
              {/*  · {exp.description} */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
