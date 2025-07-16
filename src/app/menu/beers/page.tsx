import BeersMenu from "./components/BeersMenu";
import BeersHero from "./components/BeersHero";
import StickyMenu from "../../components/StickyMenu";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <BeersHero />
      <BeersMenu />
    </main>
  );
}