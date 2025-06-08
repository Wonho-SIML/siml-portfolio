import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpenModal,
}: ProjectCardProps) {
  return (
    <AnimatedSection
      key={index}
      animationType="fadeInUp"
      delay={`${index * 100}ms`}
    >
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col h-full">
        <CardHeader className="p-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={225}
            className="rounded-t-lg mb-4 object-cover w-full h-[225px]"
          />
          <div className="p-6 pt-0 pb-4">
            <CardTitle className="text-white text-xl">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-300 mt-2 h-20 overflow-hidden text-ellipsis">
              {project.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-2 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="bg-blue-700/30 text-blue-300 border border-blue-500/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            <Button
              size="sm"
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-black flex-1"
              onClick={() => onOpenModal(project)}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              자세히 보기
            </Button>
            {project.demo && (
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 flex-1"
                onClick={() =>
                  project.demo && window.open(project.demo, "_blank")
                }
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                바로가기
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
