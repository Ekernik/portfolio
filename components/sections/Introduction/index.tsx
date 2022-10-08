import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="section">
      <p className="mt-20 text-sm text-slate-600 dark:text-slate-400 lg:text-base">
        Hi, my name is
      </p>
      <h1 className="-ml-1 text-4xl font-bold text-slate-800 dark:text-slate-200 lg:text-6xl">
        Nikita Ekern
      </h1>
      <p className="mb-8 border-b text-xl font-bold text-slate-700 dark:border-b-slate-500 dark:text-slate-300 lg:text-2xl">
        I am a Frontend developer
      </p>
      <p className="paragraph mb-2">
        I specialize in building fast loading <span>websites</span> with proper
        semantics, acessebility in mind and SEO-friendliness.
      </p>
      <p className="paragraph mb-10 lg:mb-20">
        I&apos;m looking forward working with you!
      </p>
      <div className="flex gap-4">
        <a
          href="#my-work"
          className="button border-slate-900 bg-slate-900 text-slate-50 hover:bg-slate-700 dark:bg-slate-200  dark:text-slate-900  dark:hover:bg-slate-50 dark:focus:bg-slate-50"
        >
          See my work!
        </a>
        <a
          // TODO: add resume
          href="#"
          className="button border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-700 dark:focus:border-slate-700 dark:focus:bg-slate-700 dark:focus:text-slate-50"
        >
          Download resume
        </a>
      </div>
    </section>
  );
};

export default Introduction;
