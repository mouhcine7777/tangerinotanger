import StickyMenu from "../../components/StickyMenu";
import CassolettesHero from "./components/CassolettesHero";
import CassolettesMenu from "./components/CassolettesMenu";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <CassolettesHero />
      <CassolettesMenu />
    </main>
  );
}