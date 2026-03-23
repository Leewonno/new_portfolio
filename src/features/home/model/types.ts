import type { StaticImageData } from "next/image";

export interface HomeBackgroundProps {
  style?: React.CSSProperties;
  className?: string;
  icon?: StaticImageData;
}

export interface ProjectDetail {
  name: string;
  description: string;
  detail?: string;
  techStack?: string[];
  role?: string;
  period?: string;
  link?: string;
  github?: string;
  works?: string[];
  issues?: IssueType[];
}

export interface IssueType {
  title: string;
  content: string;
}
