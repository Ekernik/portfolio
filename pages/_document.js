import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  {
    return (
      <Html lang="en-US" className="scroll-smooth">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" defer />
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
