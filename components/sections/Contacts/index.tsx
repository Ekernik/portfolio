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
    <section id="contacts" className="section">
      <h2 className="section__header">#Contacts</h2>
      <p className="paragraph">I`m activly looking for work!</p>
      <p className="paragraph mb-4">
        Feel free to write me an email or contact me via messaging apps below.
      </p>
      <div className="my-6 flex w-full flex-col items-center gap-6 sm:flex-row md:gap-8">
        <p>
          <a href="mail:ekernik@proton.me" className="link--text">
            <EnvelopeIcon className="mr-2 inline h-6" />
            ekernik@proton.me
          </a>
        </p>
        <p>
          <a href="tel:+79995383821" className="link--text">
            <PhoneIcon className="mr-2 inline h-6" />
            +7 (999) 538-38-21
          </a>
        </p>
      </div>

      <div className="flex w-full items-center justify-center gap-6 sm:justify-start">
        <a href="https://vk.com/ekernik">
          <Vk className="link--icon" />
        </a>
        <a href="https://t.me/ekernik">
          <Telegram className="link--icon" />
        </a>
        <a href="https://github.com/ekernik">
          <Github className="link--icon" />
        </a>
        <a href="https://www.linkedin.com/in/ekernik">
          <Linkedin className="link--icon" />
        </a>
        <a href="https://wa.me/79995383821">
          <Whatsapp className="link--icon" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
