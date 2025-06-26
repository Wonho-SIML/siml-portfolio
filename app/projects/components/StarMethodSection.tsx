import {
  Target,
  Briefcase,
  Rocket,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { StarFeature } from "@/lib/types";
import VideoPlayer from "./VideoPlayer";

interface StarSectionProps {
  feature: StarFeature;
  hasVideoError: (videoUrl: string) => boolean;
  onVideoError: (videoUrl: string) => void;
  onVideoClick: (videoUrl: string) => void;
}

export default function StarSection({
  feature,
  hasVideoError,
  onVideoError,
  onVideoClick,
}: StarSectionProps) {
  return (
    <div className="space-y-6 p-6 bg-slate-700/30 rounded-lg shadow-lg">
      <h3 className="text-xl md:text-2xl font-semibold text-blue-300 flex items-center">
        <ChevronRight className="h-6 w-6 mr-2 text-blue-400" />
        {feature.title}
      </h3>

      {feature.videoUrl && (
        <VideoPlayer
          videoUrl={feature.videoUrl}
          hasError={hasVideoError(feature.videoUrl)}
          onVideoError={onVideoError}
          onVideoClick={onVideoClick}
        />
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
  );
}
