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
    <div className="flex max-h-max min-h-screen flex-col gap-20 bg-slate-50">
      <Header />
      <Introduction />
      <AboutMe />
      <TechStack />
      <MyWork />
      <Contacts />
      <Footer />
    </div>
  </>
);

export default Home;
