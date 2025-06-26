import { Dialog, DialogClose } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  videoUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({
  videoUrl,
  isOpen,
  onClose,
}: VideoModalProps) {
  if (!videoUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
          onClick={onClose}
        >
          <DialogPrimitive.Title className="sr-only">
            확대된 비디오
          </DialogPrimitive.Title>
          <div
            className="relative w-auto h-auto max-w-[95vw] max-h-[95vh]"
            onClick={onClose}
          >
            <DialogClose asChild>
              <button className="absolute -top-2 -right-2 z-10 bg-black/50 rounded-full p-2 text-white hover:text-gray-300 hover:bg-black/70 transition-colors">
                <X size={24} />
              </button>
            </DialogClose>
            <video
              src={videoUrl}
              className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
