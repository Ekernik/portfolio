import {
  Github,
  Linkedin,
  Telegram,
  Vk,
  Whatsapp,
} from '@icons-pack/react-simple-icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="mb-10 flex w-full items-center justify-center gap-6 sm:justify-start">
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
  );
};

export default SocialLinks;
