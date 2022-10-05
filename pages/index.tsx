import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutMe from '@/components/sections/AboutMe';
import Contacts from '@/components/sections/Contacts';
import Introduction from '@/components/sections/Introduction';
import MyWork from '@/components/sections/MyWork';
import TechStack from '@/components/sections/TechStack';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex max-h-max min-h-screen flex-col gap-20 bg-slate-50">
    <Header />
    <Introduction />
    <AboutMe />
    <TechStack />
    <MyWork />
    <Contacts />
    <Footer />
  </div>
);

export default Home;
