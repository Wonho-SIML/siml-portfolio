import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Clock3 } from "lucide-react";

import AnimatedSection from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Project } from "@/lib/types";

const accentStyles: Record<Project["accent"], string> = {
  sky: "from-sky-500/35 via-cyan-400/10 to-background text-sky-900 dark:text-sky-200",
  violet:
    "from-violet-500/35 via-fuchsia-400/10 to-background text-violet-900 dark:text-violet-200",
  amber:
    "from-amber-500/35 via-orange-400/10 to-background text-amber-900 dark:text-amber-200",
  emerald:
    "from-emerald-500/35 via-teal-400/10 to-background text-emerald-900 dark:text-emerald-200",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleTech = project.tech.slice(0, 5);

  return (
    <AnimatedSection animationType="fadeInUp" delay={`${index * 80}ms`}>
      <Card className="group flex h-full flex-col overflow-hidden bg-card/75 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-card">
        <CardHeader className="p-0">
          {project.image ? (
            <div className="relative aspect-[16/9] overflow-hidden border-b">
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
              className={`flex aspect-[16/9] items-end border-b bg-gradient-to-br p-6 ${accentStyles[project.accent]}`}
              aria-hidden="true"
            >
              <span className="max-w-xs break-keep font-display text-3xl font-semibold">
                {project.title.split(" — ")[0]}
              </span>
            </div>
          )}

          <div className="space-y-4 p-6 pb-4">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground-subtle">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
                {project.role}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-foreground-subtle">
              {project.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-5 p-6 pt-2">
          <div className="rounded-xl border border-foreground/5 bg-foreground/[0.03] p-4">
            <p className="mb-1 text-xs font-medium text-foreground-subtle">
              주요 작업
            </p>
            <p className="text-sm leading-6 text-foreground-soft">{project.impact}</p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="사용 기술">
            {visibleTech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border border-brand/20 bg-brand/10 text-brand"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > visibleTech.length && (
              <Badge
                variant="secondary"
                className="border border-input bg-muted text-foreground-subtle"
              >
                +{project.tech.length - visibleTech.length}
              </Badge>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Button
              asChild
              size="sm"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary-hover"
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
                className="border-input bg-transparent text-foreground-muted hover:bg-muted hover:text-foreground"
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
