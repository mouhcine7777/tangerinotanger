import DessertsMenu from "./components/DessertsMenu";
import DessertsHero from "./components/DessertsHero";
import StickyMenu from "../../components/StickyMenu";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <DessertsHero />
      <DessertsMenu />
    </main>
  );
}