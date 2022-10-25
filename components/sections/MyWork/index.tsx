import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import React from 'react';
import thumbnail from '/public/heartteamspb.png';

const MyWork: React.FC = () => (
  <section id="my-work" className="section">
    <h2 className="section__header">#My Work</h2>
    <div className="relative h-72 w-full overflow-hidden rounded-lg">
      <Image
        src={thumbnail}
        alt="Screenshot of website for cardiosurgeons"
        placeholder="blur"
        fill
        className="object-cover"
      />
      <div className="absolute top-0 left-0 z-0 max-w-full p-4 text-slate-100 md:p-6 lg:p-8">
        <h3 className="mb-4 text-xl font-bold">Cardiosurgery center</h3>
        <p className="mb-8 text-lg">
          Website helps people get free cardiosurgeries and learn about their
          health issues.
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
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
  </section>
);

export default MyWork;
