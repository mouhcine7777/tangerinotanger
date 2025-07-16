import PoissonMenu from "./components/PoissonMenu";
import PoissonHero from "./components/PoissonHero";
import StickyMenu from "../../components/StickyMenu";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <PoissonHero />
      <PoissonMenu />
    </main>
  );
}