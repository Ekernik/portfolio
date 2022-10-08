import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  {
    return (
      <Html lang="en-US" className="scroll-smooth">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" defer />
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
          <meta property="og:url" content="https://ekernik.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
