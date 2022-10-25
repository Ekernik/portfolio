import ProjectCard from '@/components/sections/MyWork/ProjectCard';
import React from 'react';
import { PROJECTS } from './projects';

const MyWork: React.FC = () => {
  const renderProjects = () =>
    PROJECTS.map((project) => <ProjectCard key={project.title} {...project} />);

  return (
    <section id="my-work" className="section">
      <h2 className="section__header">#My Work</h2>
      {renderProjects()}
    </section>
  );
};

export default MyWork;
