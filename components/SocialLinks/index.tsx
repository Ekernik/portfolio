import {
  SiGithub as Github,
  SiLinkedin as Linkedin,
  SiTelegram as Telegram,
  SiVk as Vk,
  SiWhatsapp as Whatsapp,
} from '@icons-pack/react-simple-icons';
import { FC } from 'react';

const SocialLinks: FC = () => (
  <div className="mt-5 mb-7 flex w-full items-center justify-center gap-6 sm:justify-start">
    <a href="https://vk.com/ekernik">
      <Vk className="link--icon" aria-label="VK - social network" />
    </a>
    <a href="https://t.me/ekernik">
      <Telegram className="link--icon" aria-label="Telegram - messaging app" />
    </a>
    <a href="https://github.com/ekernik">
      <Github className="link--icon" aria-label="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/ekernik">
      <Linkedin className="link--icon" aria-label="LinkedIn" />
    </a>
    <a href="https://wa.me/79995383821">
      <Whatsapp className="link--icon" aria-label="WhatsApp - messaging app" />
    </a>
  </div>
);

export default SocialLinks;
