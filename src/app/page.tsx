import Footer from "@/components/ui/footer";
import { CharacterView } from "./(homepage)/character-view";
import DemoAi from "./(homepage)/demo-ai";
import Enhance from "./(homepage)/enhance";
import FeaturesSection from "./(homepage)/feature";
import Hero from "./(homepage)/hero";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CharacterView />
      <DemoAi />
      <FeaturesSection />
      <Enhance />
      <Footer />
    </>
  );
}
