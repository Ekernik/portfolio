import Header from '@/components/Header';
import { Inter } from '@next/font/google';
import '../styles/main.scss';

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`scroll-smooth ${inter.className}`}>
      <head>
        <title>Nikita Ekern - Web Developer</title>
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
      <body className="bg-slate-50 dark:bg-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
