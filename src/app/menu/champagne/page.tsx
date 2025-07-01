import ChampagneMenu from "./components/ChampagneMenu";
import ChampagneHero from "./components/ChampagneHero";
import StickyMenu from "../../components/StickyMenu";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <ChampagneHero />
      <ChampagneMenu />
    </main>
  );
}