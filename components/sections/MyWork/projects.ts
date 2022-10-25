import Project from './ProjectCard/Project.types';
import thumbnail_heartteamspb from '/public/heartteamspb.png';
import thumbnail_portfolio from '/public/portfolio.png';

export const PROJECTS: Project[] = [
  {
    thumbnail: thumbnail_heartteamspb,
    title: 'Cardiosurgery center',
    description:
      'Website helps people get free cardiosurgeries and learn about their health issues.',
    usedTech: ['React', 'Next.JS', 'TypeScript', 'Maps API', 'NginX'],
    projectLink: 'heartteamspb.com',
  },
  {
    thumbnail: thumbnail_portfolio,
    title: 'Portfolio',
    description: 'The site you are currently looking at.',
    usedTech: ['React', 'Next.JS', 'TypeScript', 'Vercel'],
    projectLink: 'www.ekernik.com',
  },
];
