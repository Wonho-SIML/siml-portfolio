"use client";
import { useState } from "react";
import { Building2, User } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { Project } from "@/lib/types";
import { projectsData } from "./projectsData";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const companyProjects = projectsData.filter(
    (project) => project.type === "company"
  );
  const personalProjects = projectsData.filter(
    (project) => project.type === "personal"
  );

  return (
    <div className="container mx-auto px-4">
      <AnimatedSection
        id="projects-list"
        className="bg-black/20 rounded-lg my-10 py-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Projects
          </h2>

          {/* 회사 프로젝트 섹션 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 p-4">
              <Building2 className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">
                회사 프로젝트
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {companyProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>

          {/* 개인 프로젝트 섹션 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 p-4">
              <User className="h-6 w-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">
                개인 프로젝트
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
