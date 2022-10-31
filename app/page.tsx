import Footer from '../components/Footer';
import AboutMe from '../components/sections/AboutMe';
import Contacts from '../components/sections/Contacts';
import Introduction from '../components/sections/Introduction';
import MyWork from '../components/sections/MyWork';
import TechStack from '../components/sections/TechStack';

export default function Page() {
  return (
    <main className="flex flex-col">
      <Introduction />
      <AboutMe />
      <TechStack />
      <MyWork />
      <Contacts />
      <Footer />
    </main>
  );
}
