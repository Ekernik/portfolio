import SocialLinks from '@/components/SocialLinks';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import scrollToSection from 'helpers/scrollToSection';
import React from 'react';

const Introduction: React.FC = () => (
  <section id="introduction" className="section">
    <p className="mt-20 text-sm text-slate-600 dark:text-slate-400 lg:text-base">
      Hi, my name is
    </p>
    <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 sm:-ml-1 lg:text-6xl">
      Nikita Ekern
    </h1>
    <p className="mb-8 border-b text-xl font-bold text-slate-700 dark:border-b-slate-500 dark:text-slate-300 lg:text-2xl">
      Frontend Developer
    </p>
    <p className="paragraph mb-2">
      I specialize in building easily accessible and fast web applications which
      address and solve my client&#39;s needs.
    </p>
    <p className="paragraph mb-10">
      I strive to create simple content structure with clean design patterns and
      love bringing meaningful ideas to life within the browser.
    </p>
    <SocialLinks />
    <div className="flex w-full justify-center gap-4 sm:justify-start">
      <button
        onClick={() => scrollToSection('my-work')}
        className="button border-slate-900 bg-slate-900 text-slate-50 hover:bg-slate-700 dark:bg-slate-200  dark:text-slate-900  dark:hover:bg-slate-50 dark:focus:bg-slate-50"
      >
        See my work!
      </button>
      <div className="flex">
        <a
          href="/CV%20-%20Nikita%20Ekern%20(Frontend%20developer).pdf"
          target="_tab"
          className="button button--secondary rounded-r-none border-r-0"
        >
          Resume
        </a>
        <a
          href="/CV%20-%20Nikita%20Ekern%20(Frontend%20developer).pdf"
          className="button button--secondary rounded-l-none  px-4 dark:border-l dark:border-l-slate-600"
          download
          aria-label="Download my resume"
        >
          <ArrowDownTrayIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  </section>
);

export default Introduction;
