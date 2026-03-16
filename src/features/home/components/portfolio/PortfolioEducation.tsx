const EDUCATION = [
  {
    school: "남서울대학교",
    major: "컴퓨터소프트웨어학과",
    period: "2018.03 ~ 2024.02",
    gpa: "3.83 / 4.5",
  },
];

export function PortfolioEducation() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs text-white/40 tracking-widest uppercase">
        Education
      </h2>
      <div className="flex flex-col gap-2">
        {EDUCATION.map((edu) => (
          <div
            key={edu.school}
            className="p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex flex-col gap-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{edu.school}</span>
              <span className="text-xs text-white/40">{edu.period}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/50">{edu.major}</span>
              <span className="text-sm text-white/40">{edu.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
