export interface StarFeature {
  id: string;
  title: string;
  situation: string;
  task: string;
  action: string[];
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  period: string;
  role: string;
  impact: string;
  tech: string[];
  image?: string;
  accent: "sky" | "violet" | "amber" | "emerald";
  github?: string;
  demo?: string;
  features: StarFeature[];
  type: "company" | "personal";
  /** true면 목록·상세·사이트맵 전부에서 제외 (미완 프로젝트 임시 비노출) */
  hidden?: boolean;
}
