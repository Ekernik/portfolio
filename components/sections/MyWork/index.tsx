import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const MyWork: React.FC = () => (
  <section id="my-work" className="section">
    <h2 className="section__header">#My Work</h2>
    <div className="mb-10 h-fit w-full overflow-hidden rounded-lg">
      <div className="bg-[url('/heartteamspb.png')] bg-cover bg-top">
        <div className="p-4 text-slate-100 md:p-6 lg:p-8">
          <h3 className="mb-4 text-xl font-bold">Cardiosurgery center</h3>
          <p className="mb-12 text-lg">
            Website helps people get free cardiosurgeries and learn about their
            health issues.
          </p>
          <div className="mb-4 flex gap-2">
            <span className="badge">React</span>
            <span className="badge">Next.JS</span>
            <span className="badge">TypeScript</span>
            <span className="badge">Maps API</span>
            <span className="badge">NginX</span>
          </div>
          <a
            href="https://heartteamspb.com"
            target="_tab"
            className="flex items-center gap-2 underline hover:text-gray-200"
          >
            heartteamspb.com
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MyWork;
