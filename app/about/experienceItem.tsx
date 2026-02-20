import type React from "react";
import { CalendarDays, Building2 } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

const ExperienceItem: React.FC<{
  item: Experience;
  index: number;
  animationType: "fadeInLeft" | "fadeInRight";
}> = ({ item, index, animationType }) => {
  return (
    <AnimatedSection
      className="relative pl-10 pb-10"
      delay={`${index * 150}ms`}
      animationType={animationType}
      threshold={0.2}
    >
      <div className="absolute left-0 top-1 w-4 h-4 bg-sky-500 rounded-full border-4 border-neutral-950"></div>
      <div className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-sky-500/30"></div>
      <div className="mb-1 flex items-center">
        <Building2 className="mr-2 h-5 w-5 text-sky-400" />
        <h3 className="font-display text-xl font-semibold text-sky-400 mr-2">
          {item.company}
        </h3>
        <span className="text-neutral-600 mr-2">|</span>
        <h3 className="text-neutral-300">{item.role}</h3>
      </div>
      <div className="flex items-center text-sm text-neutral-500 mb-3">
        <CalendarDays className="mr-2 h-4 w-4" />
        <span>{item.period}</span>
      </div>
      <ul className="list-disc list-outside ml-5 text-neutral-400 space-y-1 sm:text-left">
        {item.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </AnimatedSection>
  );
};

export default ExperienceItem;
