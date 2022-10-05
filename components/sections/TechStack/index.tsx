import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="container mx-auto flex h-max flex-col items-start justify-center px-4 md:max-w-lg md:px-1 lg:max-w-2xl"
    >
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-700">#Tech Stack</h2>
        <hr />
      </div>

      <div className="mb-10 w-full">
        <h3 className="mb-4 text-lg font-bold text-slate-700">
          Frontend Development
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <p className="rounded bg-blue-100 p-2 text-center">HTML5</p>
          <p className="rounded bg-blue-100 p-2 text-center">CSS / SCSS</p>
          <p className="rounded bg-blue-100 p-2 text-center">ES 2022</p>
          <p className="rounded bg-blue-100 p-2 text-center">
            React + Typescript
          </p>
          <p className="rounded bg-blue-100 p-2 text-center">Next.js</p>
          <p className="rounded bg-blue-100 p-2 text-center">Apollo Client 3</p>
        </div>
      </div>

      <div className="mb-10 w-full">
        <h3 className="mb-4 text-lg font-bold text-slate-700">
          Backend Development
        </h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <p className="rounded bg-blue-100 p-2 text-center">Node.js</p>
          <p className="rounded bg-blue-100 p-2 text-center">Express</p>
          <p className="rounded bg-blue-100 p-2 text-center">GraphQL</p>
          <p className="rounded bg-blue-100 p-2 text-center">Nginx</p>
        </div>
      </div>

      <div className="w-full">
        <h3 className="mb-4 text-lg font-bold text-slate-700">Toolset</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <p className="rounded bg-blue-100 p-2 text-center">Postman</p>
          <p className="rounded bg-blue-100 p-2 text-center">Figma</p>
          <p className="rounded bg-blue-100 p-2 text-center">Linux</p>
          <p className="rounded bg-blue-100 p-2 text-center">Storybook</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
