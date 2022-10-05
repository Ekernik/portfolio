import React from 'react';

const MyWork: React.FC = () => {
  return (
    <section
      id="my-work"
      className="container mx-auto flex h-max flex-col items-start justify-center px-4 md:max-w-lg md:px-1 lg:max-w-2xl"
    >
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-700">#My Work</h2>
        <hr />
      </div>

      <div className="mb-10 h-fit w-full overflow-hidden rounded-lg">
        <div className="bg-[url('/heartteamspb.png')] bg-cover bg-top">
          <div className="p-4 text-slate-100 md:p-6 lg:p-8">
            <h3 className="mb-4 text-xl font-bold">Cardiosurgery center</h3>
            <p className="mb-12 text-lg">
              Website helps people get free cardiosurgeries and learn about
              their health issues.
            </p>
            <div className="mb-4">
              <span>Next.JS</span>
            </div>
            <a href="https://heartteamspb.com" className="underline">
              heartteamspb.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
