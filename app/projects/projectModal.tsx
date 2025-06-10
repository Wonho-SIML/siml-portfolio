import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Github,
  Target,
  Briefcase,
  Rocket,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800/95 backdrop-blur-md border-slate-700 text-white sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 shadow-2xl rounded-lg">
        <DialogHeader className="p-3 pb-2 md:p-6 md:pb-4 sticky top-0 bg-slate-800/80 backdrop-blur-sm z-20 border-b border-slate-700">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400 mt-1">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4 space-y-10">
          {project.features.map((feature) => (
            <div
              key={feature.id}
              className="space-y-6 p-6 bg-slate-700/30 rounded-lg shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300 flex items-center">
                <ChevronRight className="h-6 w-6 mr-2 text-blue-400" />
                {feature.title}
              </h3>
              {feature.gifUrl && (
                <div className="my-4 rounded-md overflow-hidden border border-slate-600">
                  <Image
                    src={feature.gifUrl || "/placeholder.svg"}
                    alt={`${feature.title} GIF`}
                    width={600}
                    height={350}
                    className="w-full object-contain"
                  />
                </div>
              )}
              {[
                {
                  title: "Situation (상황)",
                  content: feature.situation,
                  icon: <Target className="h-5 w-5 text-red-400" />,
                },
                {
                  title: "Task (과제)",
                  content: feature.task,
                  icon: <Briefcase className="h-5 w-5 text-yellow-400" />,
                },
                {
                  title: "Action (행동)",
                  content: feature.action,
                  icon: <Rocket className="h-5 w-5 text-green-400" />,
                },
                {
                  title: "Result (결과)",
                  content: feature.result,
                  icon: <CheckCircle className="h-5 w-5 text-purple-400" />,
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 pt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-200 mb-0.5">
                      {item.title}
                    </h4>
                    {Array.isArray(item.content) ? (
                      <ul className="list-disc list-outside pl-5 space-y-1 text-gray-300 text-sm">
                        {item.content.map((actionItem, i) => (
                          <li key={i}>{actionItem}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <DialogFooter className="p-3 pt-2 md:p-6 md:pt-4 sticky bottom-0 bg-slate-800/80 backdrop-blur-sm z-20 border-t border-slate-700">
          <div className="flex w-full justify-between items-center">
            <div>
              {project.github && (
                <Button
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-700 text-gray-300 hover:text-white"
                  onClick={() =>
                    project.github && window.open(project.github, "_blank")
                  }
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub Repository
                </Button>
              )}
            </div>
            <DialogClose asChild>
              <Button type="button" className="bg-blue-600 hover:bg-blue-700">
                닫기
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
