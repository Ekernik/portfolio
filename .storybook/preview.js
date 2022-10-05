import * as NextImage from 'next/future/image';
import '../styles/main.scss';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = { layout: 'fullscreen' };
