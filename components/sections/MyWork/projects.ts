import Project from './ProjectCard/Project.types';
import thumbnail_heartteamspb from '/public/heartteamspb.png';

export const PROJECTS: Project[] = [
  {
    thumbnail: thumbnail_heartteamspb,
    title: 'Cardiosurgery center',
    description:
      'Website helps people get free cardiosurgeries and learn about their health issues.',
    usedTech: ['React', 'Next.JS', 'TypeScript', 'Maps API', 'NginX'],
    projectLink: 'heartteamspb.com',
  },
];
