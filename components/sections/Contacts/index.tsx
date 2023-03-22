import SocialLinks from '@/components/SocialLinks';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

const Contacts: FC = () => {
  return (
    <section id="contacts" className="section">
      <h2 className="section__header">#Contacts</h2>
      <p className="paragraph">I`m activly looking for work!</p>
      <p className="paragraph">Ready for relocating or business trips.</p>
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

      <SocialLinks />
    </section>
  );
};

export default Contacts;
