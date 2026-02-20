import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skill } from "@/lib/types";

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="group relative flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 p-4 bg-neutral-900/50 rounded-lg overflow-hidden cursor-pointer border border-neutral-800 hover:border-sky-500/50 hover:scale-[1.03] transition-all duration-300">
            <div className="absolute inset-0 rounded-lg p-px overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-sky-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0.5 bg-neutral-900/90 rounded-[7px]"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
              {skill.icon}
              <p className="text-sm font-medium text-center text-neutral-300 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </div>
          </div>
        </TooltipTrigger>
        {skill.proficiency && (
          <TooltipContent
            side="bottom"
            className="bg-neutral-950 text-white border-neutral-800"
          >
            <p>Proficiency: {skill.proficiency}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillCard;
