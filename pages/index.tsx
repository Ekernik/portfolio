import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutMe from '@/components/sections/AboutMe';
import Contacts from '@/components/sections/Contacts';
import Introduction from '@/components/sections/Introduction';
import MyWork from '@/components/sections/MyWork';
import TechStack from '@/components/sections/TechStack';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
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
    </Head>
    <div className="bg-slate-50 dark:bg-gray-900">
      <Header />
      <main className="flex flex-col gap-20">
        <Introduction />
        <AboutMe />
        <TechStack />
        <MyWork />
        <Contacts />
      </main>
      <Footer />
    </div>
  </>
);

export default Home;
