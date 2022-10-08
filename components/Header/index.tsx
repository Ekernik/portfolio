import { Popover, Transition } from '@headlessui/react';
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
import { Fragment } from 'react';

const Header: React.FC = () => {
  return (
    <Popover className="sticky top-0 w-full bg-white dark:bg-gray-800">
      <header className="mx-auto">
        <div className="flex items-center justify-between py-6 px-4 shadow-md sm:px-6 md:justify-start md:space-x-10 lg:px-20">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#introduction">
              <span className="sr-only">Nikita Ekern - web developer</span>
              <FingerPrintIcon className="h-8 w-auto dark:text-slate-400 sm:h-10" />
            </a>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:hover:text-slate-200 dark:focus:text-slate-200 dark:focus:ring-slate-400">
              <span className="sr-only">Open menu</span>
              <Bars3BottomRightIcon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a href="#about-me" className="header__link">
              About Me
            </a>
            <a href="#tech-stack" className="header__link">
              Tech Stack
            </a>
            <a href="#my-work" className="header__link">
              My Work
            </a>
            <a href="#contacts" className="header__link">
              Contacts
            </a>
          </Popover.Group>
        </div>
      </header>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y divide-slate-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-slate-600 dark:bg-slate-700">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <FingerPrintIcon className="h-8 w-auto dark:text-slate-400" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-slate-500 dark:hover:bg-slate-400">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#about-me"
                    className="burger__link burger__link--text"
                  >
                    <UserIcon className="h-8 w-8" />
                    About Me
                  </a>
                  <a
                    href="#tech-stack"
                    className="burger__link burger__link--text"
                  >
                    <CommandLineIcon className="h-8 w-8" />
                    Tech Stack
                  </a>
                  <a
                    href="#my-work"
                    className="burger__link burger__link--text"
                  >
                    <BriefcaseIcon className="h-8 w-8" />
                    My Work
                  </a>
                  <a
                    href="#contacts"
                    className="burger__link burger__link--text"
                  >
                    <EnvelopeIcon className="h-8 w-8" />
                    Contacts
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-5 gap-y-4 gap-x-8">
                <a
                  href="https://vk.com/ekernik"
                  className="flex justify-center"
                >
                  <Vk className="burger__link burger__link--icon" />
                </a>
                <a href="https://t.me/ekernik" className="flex justify-center">
                  <Telegram className="burger__link burger__link--icon" />
                </a>
                <a
                  href="https://github.com/ekernik"
                  className="flex justify-center"
                >
                  <Github className="burger__link burger__link--icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ekernik"
                  className="flex justify-center"
                >
                  <Linkedin className="burger__link burger__link--icon" />
                </a>
                <a
                  href="https://wa.me/79995383821"
                  className="flex justify-center"
                >
                  <Whatsapp className="burger__link burger__link--icon" />
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
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
