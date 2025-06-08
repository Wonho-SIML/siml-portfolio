import { Palette } from "lucide-react";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import {
  SiMobx,
  SiReactquery,
  SiI18Next,
  SiDotnet,
  SiStyledcomponents,
  SiMui,
  SiTailwindcss,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp, TbBluetooth } from "react-icons/tb";
import { Skill } from "@/lib/types";

export const skillsData: Skill[] = [
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="w-10 h-10 text-yellow-400" />,
    // proficiency: "A+",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="w-10 h-10 text-blue-400" />,
    // proficiency: "A",
  },
  {
    name: "React",
    icon: <BiLogoReact className="w-10 h-10 text-sky-400" />,
    // proficiency: "A+",
  },
  {
    name: "MobX",
    icon: <SiMobx className="w-10 h-10 text-orange-400" />,
    // proficiency: "A",
  },
  {
    name: "Redux",
    icon: <BiLogoRedux className="w-10 h-10 text-purple-400" />,
    // proficiency: "A",
  },
  {
    name: "TanStack-Query",
    icon: <SiReactquery className="w-10 h-10 text-red-400" />,
    // proficiency: "A",
  },
  {
    name: "i18n",
    icon: <SiI18Next className="w-10 h-10 text-teal-400" />,
    // proficiency: "A+",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="w-10 h-10 text-neutral-300" />,
    // proficiency: "B",
  },
  {
    name: "C#",
    icon: <TbBrandCSharp className="w-10 h-10 text-purple-600" />,
    // proficiency: "B+",
  },
  {
    name: "MAUI",
    icon: <SiDotnet className="w-10 h-10 text-purple-500" />,
    // proficiency: "A+",
  },
  {
    name: "HTML5 Canvas",
    icon: <Palette className="w-10 h-10 text-orange-400" />,
    // proficiency: "A",
  },
  {
    name: "BLE",
    icon: <TbBluetooth className="w-10 h-10 text-blue-600" />,
    // proficiency: "A",
  },
  {
    name: "Styled-Components",
    icon: <SiStyledcomponents className="w-10 h-10 text-pink-400" />,
    // proficiency: "A+",
  },
  {
    name: "MUI",
    icon: <SiMui className="w-10 h-10 text-blue-500" />,
    // proficiency: "A+",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-10 h-10 text-teal-400" />,
    // proficiency: "B",
  },
  {
    name: "Git & GitHub",
    icon: <SiGithub className="w-10 h-10 text-white" />,
    // proficiency: "B+",
  },
  {
    name: "Jira",
    icon: <SiJira className="w-10 h-10 text-blue-500" />,
    // proficiency: "B+",
  },
];
