import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="section">
      <h2 className="section__header">#Tech Stack</h2>
      <div className="mb-10 w-full">
        <h3 className="tech__subheader">Frontend Development</h3>
        <div className="grid grid-cols-2 gap-2">
          <p className="skill">HTML5</p>
          <p className="skill">CSS / SCSS</p>
          <p className="skill">ES 2022</p>
          <p className="skill">React + Typescript</p>
          <p className="skill">Next.js</p>
          <p className="skill">Apollo Client 3</p>
        </div>
      </div>

      <div className="mb-10 w-full">
        <h3 className="tech__subheader">Backend Development</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <p className="skill">Node.js</p>
          <p className="skill">Express</p>
          <p className="skill">GraphQL</p>
          <p className="skill">Nginx</p>
        </div>
      </div>

      <div className="w-full">
        <h3 className="tech__subheader">Toolset</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <p className="skill">Postman</p>
          <p className="skill">Figma</p>
          <p className="skill">Linux</p>
          <p className="skill">Storybook</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
