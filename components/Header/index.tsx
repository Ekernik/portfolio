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
    <Popover className="sticky top-0 w-full bg-white">
      <header className="mx-auto">
        <div className="flex items-center justify-between py-6 px-4 shadow-md sm:px-6 md:justify-start md:space-x-10 lg:px-20">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#introduction">
              <span className="sr-only">Nikita Ekern - web developer</span>
              <FingerPrintIcon className="h-8 w-auto sm:h-10" />
            </a>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
              <span className="sr-only">Open menu</span>
              <Bars3BottomRightIcon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#about-me"
              className="text-base font-medium text-slate-500 hover:text-slate-900"
            >
              About Me
            </a>
            <a
              href="#tech-stack"
              className="text-base font-medium text-slate-500 hover:text-slate-900"
            >
              Tech Stack
            </a>
            <a
              href="#my-work"
              className="text-base font-medium text-slate-500 hover:text-slate-900"
            >
              My Work
            </a>
            <a
              href="#contacts"
              className="text-base font-medium text-slate-500 hover:text-slate-900"
            >
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
          <div className="divide-y-2 divide-slate-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <FingerPrintIcon className="h-8 w-auto" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#about-me"
                    className="flex items-center gap-2 font-medium text-slate-900 hover:text-slate-700"
                  >
                    <UserIcon className="h-8 w-8" />
                    About Me
                  </a>
                  <a
                    href="#tech-stack"
                    className="flex items-center gap-2 font-medium text-slate-900 hover:text-slate-700"
                  >
                    <CommandLineIcon className="h-8 w-8" />
                    Tech Stack
                  </a>
                  <a
                    href="#my-work"
                    className="flex items-center gap-2 font-medium text-slate-900 hover:text-slate-700"
                  >
                    <BriefcaseIcon className="h-8 w-8" />
                    My Work
                  </a>
                  <a
                    href="#contacts"
                    className="flex items-center gap-2 font-medium text-slate-900 hover:text-slate-700"
                  >
                    <EnvelopeIcon className="h-8 w-8" />
                    Contacts
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-5 gap-y-4 gap-x-8">
                <a href="https://vk.com/ekernik">
                  <Vk className="h-8 w-8 text-slate-900 transition hover:text-slate-700" />
                </a>
                <a href="https://t.me/ekernik">
                  <Telegram className="h-8 w-8 text-slate-900 transition hover:text-slate-700" />
                </a>
                <a href="https://github.com/ekernik">
                  <Github className="h-8 w-8 text-slate-900 transition hover:text-slate-700" />
                </a>
                <a href="https://www.linkedin.com/in/ekernik">
                  <Linkedin className="h-8 w-8 text-slate-900 transition hover:text-slate-700" />
                </a>
                <a href="https://wa.me/79995383821">
                  <Whatsapp className="h-8 w-8 text-slate-900 transition hover:text-slate-700" />
                </a>
              </div>
            </div>
            <div className="space-y flex items-center justify-between py-6 px-5">
              <a
                href="tel:+79995383821"
                className="font-semibold text-slate-900 hover:text-slate-700 hover:underline"
              >
                {/* <PhoneIcon className="mr-2 inline h-6" /> */}
                +7 (999) 538-38-21
              </a>
              <a
                href="mail:ekernik@proton.me"
                className="font-semibold text-slate-900 hover:text-slate-700 hover:underline"
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
