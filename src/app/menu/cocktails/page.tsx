import CocktailMenu from "./components/CocktailMenu";
import CocktailHero from "./components/CocktailHero";
import StickyMenu from "../../components/StickyMenu";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <CocktailHero />
      <CocktailMenu />
    </main>
  );
}