import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { FC, PropsWithChildren } from 'react';
import '/styles/main.scss';

const inter = Inter();

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <title>Nikita Ekern - Web Developer</title>
        <meta
          name="description"
          content="Developing modern and reliable websites using latest technologies"
        />

        <meta property="og:url" content="https://www.ekernik.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nikita Ekern - Web Developer" />
        <meta
          property="og:description"
          content="Developing modern and reliable websites using latest technologies"
        />
        <meta
          property="og:image"
          content="https://www.ekernik.com/website.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ekernik.com" />
        <meta property="twitter:url" content="https://ekernik.com" />
        <meta name="twitter:title" content="Nikita Ekern - Web Developer" />
        <meta
          name="twitter:description"
          content="Developing modern and reliable websites using latest technologies"
        />
        <meta
          name="twitter:image"
          content="https://www.ekernik.com/website.png"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
