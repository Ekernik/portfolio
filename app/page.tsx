import Footer from '@/components/Footer';
import AboutMe from '@/components/sections/AboutMe';
import Contacts from '@/components/sections/Contacts';
import Introduction from '@/components/sections/Introduction';
import MyWork from '@/components/sections/MyWork';
import TechStack from '@/components/sections/TechStack';
import { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <main className="flex flex-col">
    <Introduction />
    <AboutMe />
    <TechStack />
    <MyWork />
    <Contacts />
    <Footer />
  </main>
);

export default IndexPage;
