import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section
      id="introduction"
      className="container mx-auto flex h-max flex-col items-start justify-center px-4 md:max-w-lg md:px-1 lg:max-w-2xl"
    >
      <p className="mt-20 text-sm text-slate-600 lg:text-base">
        Hi, my name is
      </p>
      <h1 className="-ml-1 text-4xl font-bold text-slate-800 lg:text-6xl">
        Nikita Ekern
      </h1>
      <div className="mb-8">
        <p className="text-xl font-bold text-slate-700 lg:text-2xl">
          I am a Frontend developer
        </p>
        <hr />
      </div>
      <p className="mb-2 text-slate-700 lg:text-lg">
        I specialize in building fast loading <span>websites</span> with proper
        semantics, acessebility in mind and SEO-friendliness.
      </p>
      <p className="mb-10 text-slate-700 lg:mb-20 lg:text-lg">
        I&apos;m looking forward working with you!
      </p>
      <div className="flex gap-4">
        <a
          href="#my-work"
          className="rounded-lg border-2 border-slate-200 bg-slate-900 px-6 py-3 text-slate-50 transition-all hover:bg-slate-700"
        >
          See my work!
        </a>
        <a
          href="#"
          className="rounded-lg border-2 border-slate-700 px-6 py-3 text-slate-700 transition-all hover:border-slate-200 hover:bg-slate-700 hover:text-slate-50"
        >
          Download resume
        </a>
      </div>
    </section>
  );
};

export default Introduction;
