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
import { Github } from "lucide-react";
import { Project } from "@/lib/types";
import { useState } from "react";
import StarSection from "./components/StarMethodSection";
import VideoModal from "./components/VideoModal";

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [errorVideos, setErrorVideos] = useState<Set<string>>(new Set());

  if (!project) return null;

  const handleVideoError = (videoUrl: string) => {
    setErrorVideos((prev) => {
      const newSet = new Set(prev);
      newSet.add(videoUrl);
      return newSet;
    });
  };

  const hasVideoError = (videoUrl: string) => {
    return errorVideos.has(videoUrl);
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleVideoModalClose = () => {
    setSelectedVideo(null);
  };

  return (
    <>
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
              <StarSection
                key={feature.id}
                feature={feature}
                hasVideoError={hasVideoError}
                onVideoError={handleVideoError}
                onVideoClick={handleVideoClick}
              />
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

      <VideoModal
        videoUrl={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={handleVideoModalClose}
      />
    </>
  );
}
