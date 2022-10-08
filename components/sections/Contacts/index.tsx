import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import {
  Github,
  Linkedin,
  Telegram,
  Vk,
  Whatsapp,
} from '@icons-pack/react-simple-icons';
import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section
      id="contacts"
      className="container mx-auto flex h-max flex-col items-start justify-center px-4 md:max-w-lg md:px-1 lg:max-w-2xl"
    >
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-700">#Contacts</h2>
        <hr />
      </div>

      <p>I`m activly looking for work!</p>
      <p className="mb-4">
        Feel free to write me an email or contact me via messaging apps below.
      </p>
      <div className="my-6 flex w-full flex-col items-center gap-6 sm:flex-row md:gap-8">
        <p>
          <a
            href="mail:ekernik@proton.me"
            className="font-semibold text-slate-900 hover:text-slate-700 hover:underline"
          >
            <EnvelopeIcon className="mr-2 inline h-6" />
            ekernik@proton.me
          </a>
        </p>
        <p>
          <a
            href="tel:+79995383821"
            className="font-semibold text-slate-900 hover:text-slate-700 hover:underline"
          >
            <PhoneIcon className="mr-2 inline h-6" />
            +7 (999) 538-38-21
          </a>
        </p>
      </div>

      <div className="flex w-full items-center justify-center gap-6 sm:justify-start">
        <a href="https://vk.com/ekernik">
          <Vk className="h-10 w-10 text-slate-900 transition hover:text-slate-700 sm:h-8 sm:w-8 md:h-6 md:w-6" />
        </a>
        <a href="https://t.me/ekernik">
          <Telegram className="h-10 w-10 text-slate-900 transition hover:text-slate-700 sm:h-8 sm:w-8 md:h-6 md:w-6" />
        </a>
        <a href="https://github.com/ekernik">
          <Github className="h-10 w-10 text-slate-900 transition hover:text-slate-700 sm:h-8 sm:w-8 md:h-6 md:w-6" />
        </a>
        <a href="https://www.linkedin.com/in/ekernik">
          <Linkedin className="h-10 w-10 text-slate-900 transition hover:text-slate-700 sm:h-8 sm:w-8 md:h-6 md:w-6" />
        </a>
        <a href="https://wa.me/79995383821">
          <Whatsapp className="h-10 w-10 text-slate-900 transition hover:text-slate-700 sm:h-8 sm:w-8 md:h-6 md:w-6" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
