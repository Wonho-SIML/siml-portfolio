import { Play, X } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  hasError: boolean;
  onVideoError: (videoUrl: string) => void;
  onVideoClick: (videoUrl: string) => void;
}

export default function VideoPlayer({
  videoUrl,
  hasError,
  onVideoError,
  onVideoClick,
}: VideoPlayerProps) {
  return (
    <div className="my-4 rounded-md overflow-hidden border border-slate-600 max-h-80 relative">
      {/* 에러 상태 */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-700/70 flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <X className="h-8 w-8 text-red-400" />
            <p className="text-sm text-gray-300">비디오를 불러올 수 없습니다</p>
          </div>
        </div>
      )}

      {/* 클릭 가능한 오버레이 */}
      <div
        className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center z-20"
        onClick={() => onVideoClick(videoUrl)}
      >
        <div className="bg-black/60 rounded-full p-3">
          <Play className="h-6 w-6 text-white fill-white" />
        </div>
      </div>

      <video
        src={videoUrl}
        className="w-full h-auto max-h-full object-contain"
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        poster={videoUrl.replace(".mp4", ".png")}
        onError={() => onVideoError(videoUrl)}
      />
    </div>
  );
}
