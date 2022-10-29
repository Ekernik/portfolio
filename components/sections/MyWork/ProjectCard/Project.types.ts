import { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';

export default interface ProjectCardProps
  extends HTMLAttributes<HTMLDivElement> {
  thumbnail: StaticImageData;
  title: string;
  description: string;
  usedTech: string[];
  projectLink: string;
  githubLink?: string;
}
