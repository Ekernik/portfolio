import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section
      id="about-me"
      className="container mx-auto flex h-max flex-col items-start justify-center px-4 md:max-w-lg md:px-1 lg:max-w-2xl"
    >
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-700">#About me</h2>
        <hr />
      </div>

      <p className="mb-2 text-slate-700 lg:text-lg">
        I love creating thing in internet that gives people joy and happines.
      </p>
      <p className="mb-4 text-slate-700 lg:text-lg">
        Today I focus on building accessible and fast websites for my clients.{' '}
      </p>
      <p className="mb-2 font-bold text-slate-700 lg:text-lg">
        Here is my recipe for your success:
      </p>
      <p className="mb-2 text-slate-700 lg:text-lg">
        I pay a lot of attention to code optimisation, making your website load
        fast
      </p>
      <p className="mb-2 text-slate-700 lg:text-lg">
        I configure your website for search engines, making it easier for your
        potential clients to find you.{' '}
      </p>
      <p className="text-slate-700 lg:text-lg">
        My websites are accessible to visitors with different disabilities.
      </p>
    </section>
  );
};

export default AboutMe;
