import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Clock3 } from "lucide-react";

import AnimatedSection from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Project } from "@/lib/types";

const accentStyles: Record<Project["accent"], string> = {
  sky: "from-sky-500/35 via-cyan-400/10 to-neutral-950 text-sky-200",
  violet: "from-violet-500/35 via-fuchsia-400/10 to-neutral-950 text-violet-200",
  amber: "from-amber-500/35 via-orange-400/10 to-neutral-950 text-amber-200",
  emerald:
    "from-emerald-500/35 via-teal-400/10 to-neutral-950 text-emerald-200",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleTech = project.tech.slice(0, 5);

  return (
    <AnimatedSection animationType="fadeInUp" delay={`${index * 80}ms`}>
      <Card className="group flex h-full flex-col overflow-hidden border-neutral-800 bg-neutral-900/75 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-neutral-900">
        <CardHeader className="p-0">
          {project.image ? (
            <div className="relative aspect-[16/9] overflow-hidden border-b border-neutral-800">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
            </div>
          ) : (
            <div
              className={`flex aspect-[16/9] items-end border-b border-neutral-800 bg-gradient-to-br p-6 ${accentStyles[project.accent]}`}
              aria-hidden="true"
            >
              <span className="max-w-xs break-keep font-display text-3xl font-semibold">
                {project.title.split(" — ")[0]}
              </span>
            </div>
          )}

          <div className="space-y-4 p-6 pb-4">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
                {project.role}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight text-white">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-neutral-400">
              {project.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-5 p-6 pt-2">
          <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <p className="mb-1 text-xs font-medium text-neutral-400">
              주요 작업
            </p>
            <p className="text-sm leading-6 text-neutral-200">{project.impact}</p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="사용 기술">
            {visibleTech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border border-sky-500/20 bg-sky-500/10 text-sky-200"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > visibleTech.length && (
              <Badge
                variant="secondary"
                className="border border-neutral-700 bg-neutral-800 text-neutral-400"
              >
                +{project.tech.length - visibleTech.length}
              </Badge>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Button
              asChild
              size="sm"
              className="flex-1 bg-sky-500 text-neutral-950 hover:bg-sky-300"
            >
              <Link href={`/projects/${project.slug}`}>
                자세히 보기 <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            {project.demo && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                <a href={project.demo} target="_blank" rel="noreferrer">
                  데모 <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
