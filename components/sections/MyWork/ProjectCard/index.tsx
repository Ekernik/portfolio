import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Sigithub as Github } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import { FC } from 'react';
import ProjectCardProps from './Project.types';

const ProjectCard: FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  usedTech,
  projectLink,
  githubLink,
}) => (
  <div className="relative mb-10 h-72 w-full overflow-hidden rounded-lg">
    <Image
      src={thumbnail}
      alt="Screenshot of website for cardiosurgeons"
      placeholder="blur"
      fill
      sizes="100%"
      className="object-cover"
    />
    <div className="absolute top-0 left-0 z-0 max-w-full p-4 text-slate-100 md:p-6 lg:p-8">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <p className="mb-8 text-lg">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2 md:mb-10">
        {usedTech.map((tech, i) => (
          <span key={i} className="badge">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={`https://${projectLink}`}
          target="_tab"
          className="flex items-center gap-2 underline hover:text-gray-200"
        >
          {projectLink}
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>

        {githubLink && (
          <a
            href={`https://github.com/${githubLink}`}
            target="_tab"
            className="flex items-center gap-2 hover:text-gray-200 hover:underline"
          >
            GitHub
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
