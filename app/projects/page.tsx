import type { Metadata } from "next";
import { Building2, UserRound } from "lucide-react";

import AnimatedSection from "@/components/animated-section";
import { buildPageMetadata } from "@/lib/metadata";
import ProjectCard from "./projectCard";
import { projectsData } from "./projectsData";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "실시간 협업, 대용량 PDF, 오프라인 동기화, 하이브리드 앱과 브라우저 SDK를 개발한 서원호의 주요 프로젝트입니다.",
  path: "/projects",
});

const companyProjects = projectsData.filter(
  (project) => project.type === "company"
);
const personalProjects = projectsData.filter(
  (project) => project.type === "personal"
);

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl break-keep px-5 pb-24 pt-14 sm:px-8 lg:px-10">
      <AnimatedSection className="mb-16 max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Projects
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          웹 서비스와 하이브리드 앱에서
          <br className="hidden sm:block" /> 맡아 온 프로젝트
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
          회사에서 개발한 프로젝트와 개인적으로 만든 프로젝트를 함께
          정리했습니다. 각 프로젝트에서 맡은 기능과 해결한 문제를 자세히 볼 수
          있습니다.
        </p>
      </AnimatedSection>

      <section aria-labelledby="company-projects" className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-lg border border-sky-400/20 bg-sky-400/10 p-2 text-sky-300">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2
              id="company-projects"
              className="font-display text-2xl font-semibold text-white"
            >
              Company projects
            </h2>
            <p className="mt-1 text-sm text-neutral-400">
              회사에서 맡은 주요 프로젝트
            </p>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {companyProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section aria-labelledby="personal-projects">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-300">
            <UserRound className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2
              id="personal-projects"
              className="font-display text-2xl font-semibold text-white"
            >
              Personal projects
            </h2>
            <p className="mt-1 text-sm text-neutral-400">
              개인적으로 기획하고 개발한 프로젝트
            </p>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
