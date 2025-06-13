export interface StarFeature {
  id: string;
  title: string;
  situation: string;
  task: string;
  action: string[];
  result: string;
  videoUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  features: StarFeature[];
  type: "company" | "personal";
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export interface Skill {
  name: string;
  icon: React.ReactElement;
  proficiency?: string; // 없는 편이 더 나을지도
}
