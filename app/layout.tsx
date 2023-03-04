import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { FC } from 'react';
import '/styles/main.scss';

const inter = Inter();

interface ILayout {
  children: React.ReactNode;
}

const RootLayout: FC<ILayout> = ({ children }) => {
  return (
    <html lang="en-US" className={`scroll-smooth ${inter.className}`}>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }`}
        </Script>
        <title>Nikita Ekern - Web Developer</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nikita Ekern - Web Developer" />
        <meta
          name="description"
          content="Nikita Ekern's personal website - developing modern and reliable websites using latest technologies"
        />
        <meta
          property="og:description"
          content="Nikita Ekern's personal website - developing modern and reliable websites using latest technologies"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekernik.com/" />
        <meta
          property="og:image"
          content="https://www.ekernik.com/website.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.ekernik.com/website.jpg"
        />
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
