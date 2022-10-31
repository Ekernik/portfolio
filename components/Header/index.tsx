'use client';

import {
  Bars3BottomRightIcon,
  BriefcaseIcon,
  CommandLineIcon,
  EnvelopeIcon,
  FingerPrintIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  Github,
  Linkedin,
  Telegram,
  Vk,
  Whatsapp,
} from '@icons-pack/react-simple-icons';
import scrollToSection from 'helpers/scrollToSection';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  let modalClass = isOpen ? 'absolute' : 'hidden';

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-10 w-full bg-white dark:bg-gray-800">
      <header className="mx-auto shadow-md">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Nikita Ekern - web developer</span>
            <button
              className="flex items-center gap-1 text-slate-600 transition dark:text-slate-400 dark:hover:text-slate-200"
              onClick={() => scrollToSection('introduction')}
            >
              <FingerPrintIcon className="h-8 w-auto sm:h-10" />
              <span>Ekernik</span>
            </button>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only text-black dark:text-white">
                Open menu
              </span>
              <Bars3BottomRightIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>

          <nav className="hidden space-x-10 md:flex">
            <button
              className="header__link"
              onClick={() => scrollToSection('about-me')}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="header__link"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('my-work')}
              className="header__link"
            >
              My Work
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="header__link"
            >
              Contacts
            </button>
          </nav>
        </div>
      </header>

      {/* <!--
            Mobile menu, show/hide based on mobile menu state.
        
            Entering: "duration-200 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          --> */}
      <div
        className={`${modalClass} inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden`}
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-gray-600 dark:bg-gray-700">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <button
                className="burger__link burger__link--text"
                onClick={() => {
                  scrollToSection('introduction', setIsOpen);
                }}
              >
                <FingerPrintIcon className="h-8 w-auto" />
                <span>Back to the Top</span>
              </button>

              <div className="-mr-2">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-8">
                <button
                  onClick={() => {
                    scrollToSection('about-me', setIsOpen);
                  }}
                  className="burger__link burger__link--text"
                >
                  <UserIcon className="h-8 w-8" />
                  About Me
                </button>
                <button
                  onClick={() => {
                    scrollToSection('tech-stack', setIsOpen);
                  }}
                  className="burger__link burger__link--text"
                >
                  <CommandLineIcon className="h-8 w-8" />
                  Tech Stack
                </button>
                <button
                  onClick={() => {
                    scrollToSection('my-work', setIsOpen);
                  }}
                  className="burger__link burger__link--text"
                >
                  <BriefcaseIcon className="h-8 w-8" />
                  My Work
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contacts', setIsOpen);
                  }}
                  className="burger__link burger__link--text"
                >
                  <EnvelopeIcon className="h-8 w-8" />
                  Contacts
                </button>
              </nav>
            </div>
          </div>

          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-5 gap-y-4 gap-x-8">
              <a href="https://vk.com/ekernik" className="flex justify-center">
                <Vk
                  className="burger__link burger__link--icon"
                  aria-label="VK - social network"
                />
              </a>
              <a href="https://t.me/ekernik" className="flex justify-center">
                <Telegram
                  className="burger__link burger__link--icon"
                  aria-label="Telegram - messenger app"
                />
              </a>
              <a
                href="https://github.com/ekernik"
                className="flex justify-center"
              >
                <Github
                  className="burger__link burger__link--icon"
                  aria-label="Github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ekernik"
                className="flex justify-center"
              >
                <Linkedin
                  className="burger__link burger__link--icon"
                  aria-label="LinkedIn"
                />
              </a>
              <a
                href="https://wa.me/79995383821"
                className="flex justify-center"
              >
                <Whatsapp
                  className="burger__link burger__link--icon"
                  aria-label="WhatsApp - messenger app"
                />
              </a>
            </div>
          </div>

          <div className="space-y flex items-center justify-between py-6 px-5">
            <a
              href="tel:+79995383821"
              className="burger__link font-semibold hover:underline"
            >
              {/* <PhoneIcon className="mr-2 inline h-6" /> */}
              +7 (999) 538-38-21
            </a>
            <a
              href="mail:ekernik@proton.me"
              className="burger__link font-semibold hover:underline"
            >
              {/* <EnvelopeIcon className="mr-2 inline h-6" /> */}
              ekernik@proton.me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
