import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Github,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projectsData } from "../projectsData";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const socialImages = project.image
    ? [{ url: project.image, alt: `${project.title} 대표 이미지` }]
    : [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "서원호 Frontend / Hybrid Client Engineer 포트폴리오",
        },
      ];

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "website",
      title: project.title,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: socialImages,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8 lg:px-10">
      <Button
        asChild
        variant="ghost"
        className="mb-8 -ml-3 text-neutral-400 hover:bg-neutral-800 hover:text-white"
      >
        <Link href="/projects">
          <ArrowLeft aria-hidden="true" /> 전체 프로젝트
        </Link>
      </Button>

      <article>
        <header className="grid gap-10 border-b border-neutral-800 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              {project.type === "company" ? "Product case study" : "Personal case study"}
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-sky-300" aria-hidden="true" />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness
                  className="h-4 w-4 text-sky-300"
                  aria-hidden="true"
                />
                {project.role}
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.06] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Contribution
            </p>
            <p className="mt-3 text-base leading-7 text-white">{project.impact}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  className="border border-white/10 bg-neutral-900/60 text-neutral-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </aside>
        </header>

        {project.image && (
          <div className="relative mt-12 aspect-[16/7] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <Image
              src={project.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 to-transparent" />
          </div>
        )}

        <div className="mt-16 space-y-16">
          {project.features.map((feature, index) => (
            <section
              key={feature.id}
              aria-labelledby={feature.id}
              className="grid gap-7 lg:grid-cols-[0.36fr_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-sky-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  id={feature.id}
                  className="mt-2 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl"
                >
                  {feature.title}
                </h2>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/65">
                <div className="grid gap-px bg-neutral-800 sm:grid-cols-2">
                  <div className="bg-neutral-900 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                      Context
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">
                      {feature.situation}
                    </p>
                  </div>
                  <div className="bg-neutral-900 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                      Goal
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">
                      {feature.task}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    What I changed
                  </p>
                  <ul className="mt-4 space-y-3">
                    {feature.action.map((action) => (
                      <li
                        key={action}
                        className="flex gap-3 text-sm leading-7 text-neutral-200"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-sky-300"
                          aria-hidden="true"
                        />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-7 text-neutral-100">
                      {feature.result}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {(project.github || project.demo) && (
          <footer className="mt-16 flex flex-wrap gap-3 border-t border-neutral-800 pt-8">
            {project.github && (
              <Button
                asChild
                variant="outline"
                className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" /> GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild className="bg-sky-500 text-neutral-950 hover:bg-sky-300">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            )}
          </footer>
        )}

        <aside className="mt-16 rounded-2xl border border-sky-400/20 bg-sky-400/[0.05] p-7 sm:p-9">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
            더 살펴보시겠어요?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-400">
            경력 전체 요약과 연락처를 함께 정리해 두었습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="bg-sky-400 text-neutral-950 hover:bg-sky-300">
              <Link href="/resume">경력 요약 보기</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              <Link href="/contact">연락하기</Link>
            </Button>
          </div>
        </aside>
      </article>
    </main>
  );
}
