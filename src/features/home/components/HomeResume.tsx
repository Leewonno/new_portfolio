import { ResumeContact } from "./resume/ResumeContact";
import { ResumeEducation } from "./resume/ResumeEducation";
import { ResumeExperience } from "./resume/ResumeExperience";
import { ResumeIntro } from "./resume/ResumeIntro";
import { ResumeTechStack } from "./resume/ResumeTechStack";

export function HomeResume() {
  return (
    <div
      className="w-full min-h-screen py-20 px-5 sm:px-0 flex flex-col items-center justify-center"
      id="resume"
    >
      <div className="w-full sm:w-150 p-6 sm:p-8 text-white rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(255,255,255,0.14)] shadow-[0px_8px_32px_rgba(0,0,0,0.15)] flex flex-col gap-8">
        <ResumeIntro />
        <ResumeTechStack />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeContact />
      </div>
    </div>
  );
}
